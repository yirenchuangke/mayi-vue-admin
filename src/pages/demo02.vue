<template>
  <div class="_map">
    <div class="amap-page-container">
      <el-amap-search-box
        class="search-box"
        :search-option="searchOption"
        :on-search-result="onSearchResult"
      ></el-amap-search-box>
      <el-amap
        ref="map"
        vid="amapDemo"
        :plugin="plugin"
        :zoom="zoom"
        :center="center"
        class="amap-demo"
        :events="events"
      >
        <el-amap-marker
          vid="component-marker"
          :position="makerConf.position"
          :content="makerConf.content"
        ></el-amap-marker>
      </el-amap>
    </div>
    <div class="adrs">
      <ul>
        <li
          class
          v-for="(item,index) in list"
          :key="index"
          :class="currIndex == index ? 'active':''"
          @click="select(item,index)"
        >
          <p class="address">{{item.address}}</p>
          <p class="nm">{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    var me = this;
    me.city = me.city || "北京";
    return {
      list: [],
      currIndex: 0,
      zoom: 60,
      center: [114.397169, 30.50576],
      events: {
        init: o => {
          o.setCity(me.city, result => {
            if (result && result.length > 0) {
              me.zoom = 16;
              me.makerConf.position = result;
              me.getList(result);
              console.log(result,5)
            }
          });
          //去掉logo
          document.getElementsByClassName("amap-logo")[0].style.display =
            "none";
        },
        dragend: function(e) {
          
          var point = this.getCenter();
          var pos = [point.lng, point.lat];
          me.makerConf.position = [point.lng, point.lat];
          me.getList(pos);
        }
      },
      makerConf: {
        position: [114.397169, 30.50576],
        content: ""
      },
      searchOption: {
        city: me.city,
        citylimit: true
      },
      plugin: [
        "Scale",
        {
          pName: "Geolocation",
          events: {
            init(o) {},
            complete: function(result) {
              //定位成功
              var address = result.formattedAddress;
              var point = result.position;
              var obj = {
                address: address,
                name: "",
                location: point
              };
              me.list = [obj];
              console.log(obj,7)
              me.makerConf.position = [point.lng, point.lat];
            },
            error: function() {}
          }
        }
      ]
    };
  },
  created() {
    var me = this;
  },
  watch: {
    center(a) {
       console.log(a)
    } 
  },
  mounted() {},
  methods: {
    select: function(item, index) {
      console.log(1)
      var me = this;
      me.currIndex = index;
      var point = item.location;
      me.makerConf.position = [point.lng, point.lat];
      me.center = [point.lng, point.lat];
    },
    //this.$refs.map.$$getCenter()
    getList: function(result) {
      console.log(result,2)

      //获取列表
      var me = this;
      me.$Geocoder({
        lnglatXY: result,
        success: function(res) {
          if (res.regeocode && res.regeocode.pois) {
            me.list = res.regeocode.pois;
            console.log(res.regeocode.pois,8)
          } else {
            me.list = [];
          }
        },
        error: function(res) {
          me.list = [];
        }
      });
    },
    onSearchResult(pois) {
      console.log(pois,3)
      //搜索
      let latSum = 0;
      let lngSum = 0;
      var me = this;

      var mymap = me.$refs.map.$$getInstance();

      if (pois && pois.length > 0) {
        //如果长度为1则无需转化
        
        var poi = pois[0];
        var lng = poi["lng"];
        var lat = poi["lat"];
        me.center = [lng, lat];
        console.log(poi,6)
        me.makerConf.position = [lng, lat];
        //me.makerConf.content = poi.name;
        me.list = pois;
      } else {
        me.list = [];
      }
    },

    $Geocoder(options) {
      console.log(options,4)
      //将坐标点转化为，详细地址
      options = options || {};
      if (AMap) {
        AMap.plugin(["AMap.Geocoder"], () => {
          const geocoder = new AMap.Geocoder({
            radius: options.radius || 1000,
            extensions: options.extensions || "all"
          });
          var lnglatXY = options.lnglatXY || [114.397169, 30.50576]; //已知点坐标
          geocoder.getAddress(lnglatXY, function(status, result) {
            if (status === "complete" && result.info === "OK") {
              options.success && options.success(result);
            } else {
              options.error && options.error(status, result);
            }
          });
        });
      }
    }
  },
  watch: {
    list: function() {
      this.currIndex = 0;
    }
  }
};
</script>

<style>
.el-vue-search-box-container .search-box-wrapper {
  width: 100% !important;
}
._map {
  clear: both;
  height: 500px;
}
.amap-page-container {
  height: 100%;
  position: relative;
}
.search-box {
  position: absolute !important;
  top: 0px;
  left: 50%;
  margin-left: -180px;
  z-index: 200 !important;
}
.amap-demo {
  height: 100%;
}
.amap-logo {
  display: none;
}
.amap-copyright {
  bottom: -100px;
  display: none;
}
.amap-scalecontrol {
  bottom: 4px !important;
}
.amap-geolocation-con {
  bottom: 30px !important;
  z-index: 199 !important;
}
ul li.active {
  color: deeppink;
}
</style>