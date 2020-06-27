// 仓库模块A
export default {
    //( [speɪst])
      namespaced: true,//这里是解决不同模块命名冲突的问题,但是所有数据都还在一个挂载点上
    
      state: {
        name: '张三'
      },
    
      getters: {
        anameLength (state) {
          return state.name.length
        }
      },
    
      mutations: {
        hello () {
          console.log('hello a')
        }
      },
    
      actions: {
        world () {
          console.log('world a')
        }
      }
    }
    
    