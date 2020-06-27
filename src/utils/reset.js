/**
 * Created by Administrator on 2017/8/8.
 * zhanglei
 */


/***********************************************************************************************************************
 * www.zhanglei928.com
 *字符串操作
 *张磊
 ***********************************************************************************************************************/


/**
 *  去除字符串中的空格
 * @param str  字符串
 * @param type  类型   1-所有空格  2-前后空格  3-前空格 4-后空格
 * @returns {*}  处理之后的字符串结果
 */
function trim(str, type) {
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
}
/**
 * 计算字符串的长度
 * @param str 字符串
 * @returns {number}  返回字符串的长度
 *
 * strlen('sadvcasdfsaf')
 * 12
 */
function strlen(str) {
    let regch = /[\u4e00-\u9fa5]/;
    let length = 0;
    for (let i = 0; i < str.length; i++) {
        if (regch.test(str.charAt(i)) == true) {
            // 中文为2个字符
            length += 2;
        } else {
            // 英文一个字符
            length += 1;
        }
    }
    return length;
}


/**
 * 字符串转化
 * @param str 字符串
 * @param type 转换类型  1:首字母大写 2：首页母小写 3：大小写转换 4：全部大写 5：全部小写
 * @returns {*} 处理之后的字符串
 *
 * changeCase('asdasd',1)
 * Asdasd
 */
function changeCase(str, type) {
    function ToggleCase(str) {
        let itemText = ""
        str.split("").forEach(
            function (item) {
                if (/^([a-z]+)/.test(item)) {
                    itemText += item.toUpperCase();
                }
                else if (/^([A-Z]+)/.test(item)) {
                    itemText += item.toLowerCase();
                }
                else {
                    itemText += item;
                }
            });
        return itemText;
    }

    switch (type) {
        case 1:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toUpperCase() + v2.toLowerCase();
            });
        case 2:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toLowerCase() + v2.toUpperCase();
            });
        case 3:
            return ToggleCase(str);
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}

/**
 * 复制字符串
 * @param str  字符串
 * @param count 复制次数
 * @returns {string} 结果字符串
 *
 * repeatStr('abc',3)
 * abcabcabc
 */
function repeatStr(str, count) {
    let text = '';
    for (let i = 0; i < count; i++) {
        text += str;
    }
    return text;
}


/**
 * 替换字符串
 * @param str 字符串
 * @param AFindText 要替换的字符
 * @param ARepText 替换成什么
 * @returns {XML|string|void}
 */
function replaceAll(str, AFindText, ARepText) {
    raRegExp = new RegExp(AFindText, "g");
    return str.replace(raRegExp, ARepText);
}

/**
 * 字符串替换为 *
 * @param str  字符串
 * @param regArr 字符串格式
 * @param type 替换方式
 * @param ARepText 替换字符串 （默认为*）
 * @returns {XML|string|void} 结果
 */
function replaceStr(str, regArr, type, ARepText) {
    let regtext = '', Reg = null, replaceText = ARepText || '*';
    //replaceStr('18819322663',[3,5,3],0)
    //188*****663
    //repeatStr是在上面定义过的（字符串循环复制），大家注意哦
    if (regArr.length === 3 && type === 0) {
        regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})'
        Reg = new RegExp(regtext);
        let replaceCount = repeatStr(replaceText, regArr[1]);
        return str.replace(Reg, '$1' + replaceCount + '$2')
    }
    //replaceStr('asdasdasdaa',[3,5,3],1)
    //***asdas***
    else if (regArr.length === 3 && type === 1) {
        regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}'
        Reg = new RegExp(regtext);
        let replaceCount1 = repeatSte(replaceText, regArr[0]);
        let replaceCount2 = repeatSte(replaceText, regArr[2]);
        return str.replace(Reg, replaceCount1 + '$1' + replaceCount2)
    }
    //replaceStr('1asd88465asdwqe3',[5],0)
    //*****8465asdwqe3
    else if (regArr.length === 1 && type == 0) {
        regtext = '(^\\w{' + regArr[0] + '})'
        Reg = new RegExp(regtext);
        let replaceCount = repeatSte(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount)
    }
    //replaceStr('1asd88465asdwqe3',[5],1,'+')
    //"1asd88465as+++++"
    else if (regArr.length === 1 && type == 1) {
        regtext = '(\\w{' + regArr[0] + '}$)'
        Reg = new RegExp(regtext);
        let replaceCount = repeatSte(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount)
    }
}

/**
 * 字符串检测
 * @param str 检测字符串
 * @param type 检测类型
 * @returns {boolean}  结果
 *
 * checkType('165226226326','phone')
 * false
 */
function checkType(str, type) {
    switch (type) {
        case 'email':
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'phone':
            return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
        case 'tel':
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'number':
            return /^[0-9]$/.test(str);
        case 'english':
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese':
            return /^[\u4E00-\u9FA5]+$/.test(str);
        case 'lower':
            return /^[a-z]+$/.test(str);
        case 'upper':
            return /^[A-Z]+$/.test(str);
        default :
            return true;
    }
}


/**
 * 检测密码的等级强度
 * @param str 密码字符串
 * @returns {number}  强度等级
 *
 * checkPwd('12asdASAD')
 * 3(强度等级为3)
 */
function checkPwd(str) {
    let nowLv = 0;
    if (str.length < 6) {
        return nowLv
    }
    ;
    if (/[0-9]/.test(str)) {
        nowLv++
    }
    ;
    if (/[a-z]/.test(str)) {
        nowLv++
    }
    ;
    if (/[A-Z]/.test(str)) {
        nowLv++
    }
    ;
    if (/[\.|-|_]/.test(str)) {
        nowLv++
    }
    ;
    return nowLv;
}


/**
 * 生成字符串
 * @param count 字符串生成总数 0-36
 * @returns {string}  结果字符串
 */
function randomNumber(count) {
    return Math.random().toString(count).substring(2);
}

/**
 * 检测一个字符在字符串中出现的次数
 * @param str 字符串
 * @param strSplit 字符
 * @returns {number} 返回出现的次数
 *
 * let strTest = 'sad44654blog5a1sd67as9dablog4s5d16zxc4sdweasjkblogwqepaskdkblogahseiuadbhjcibloguyeajzxkcabloguyiwezxc967'
 * countStr(strTest,'blog')
 * 6
 */
function countStr(str, strSplit) {
    return str.split(strSplit).length - 1
}


/***********************************************************************************************************************
 * www.zhanglei928.com
 *数组操作
 *张磊
 ***********************************************************************************************************************/

//ES6新增的Set数据结构，类似于数组，但是里面的元素都是唯一的 ，其构造函数可以接受一个数组作为参数
//let arr=[1,2,1,2,6,3,5,69,66,7,2,1,4,3,6,8,9663,8]
//let set = new Set(array);
//{1,2,6,3,5,69,66,7,4,8,9663}
//ES6中Array新增了一个静态方法from，可以把类似数组的对象转换为数组
//Array.from(set)
//[1,2,6,3,5,69,66,7,4,8,9663]
/**
 *数组去重函数
 *
 * 使用ES6的语法
 * @param arr  数组
 * @returns {Array} 结果
 */
function removeRepeatArray(arr) {
    return Array.from(new Set(arr))
}

/**
 * 打乱数组的顺序
 * @param arr  处理数组
 * @returns {Array.<T>|*} 打乱顺序的数组
 */
function upsetArr(arr) {
    return arr.sort(function () {
        return Math.random() - 0.5
    });
}

/**
 * 求数组的最大值
 * @param arr  数组
 * @returns {*} 数组重的最大值
 */
function maxArr(arr) {
    return Math.max.apply(null, arr);
}

/**
 * 求数组的最小值
 * @param arr 数组
 * @returns {*} 数组的最小值
 */
function minArr(arr) {
    return Math.min.apply(null, arr);
}

/**
 * 求一个数组的和  基于数字数组
 * @param arr
 * @returns {number}
 */
function sumArr(arr) {
    let sumText = 0;
    for (let i = 0, len = arr.length; i < len; i++) {
        sumText += arr[i];
    }
    return sumText
}

/**
 * 求一个数组的平均数  基于数字数组
 * @param arr 数组
 * @returns {number} 数组的平均数  返回的结果可能是多位，根据需求处理
 */
function covArr(arr) {
    let sumText = sumArr(arr);
    let covText = sumText / length;
    return covText
}


/**
 * 随机获取数组中的一个元素
 * @param arr 数组
 * @returns {*}  数组中的任意一个元素
 */
function randomOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


/**
 * 获取一个字符在一个字符串中出现的次数 或  一个元素在一个数组中出现的次数
 * @param obj  字符串 数组
 * @param ele  字符   元素
 * @returns {number}  重复出现的次数
 *
 * getEleCount('asd56+asdasdwqe','a')
 * 3
 *
 *
 * getEleCount([1,2,3,4,5,66,77,22,55,22],22)
 * 2
 */
function getEleCount(obj, ele) {
    let num = 0;
    for (let i = 0, len = obj.length; i < len; i++) {
        if (ele == obj[i]) {
            num++;
        }
    }
    return num;
}


/**
 * 截取数组长度
 * @param arr 数组
 * @param n1  开始数组元素
 * @param n2  结束数组元素  默认为数组的长度
 * @returns {Array} 返回截取的新数组
 *
 * getArrayNum([0,1,2,3,4,5,6,7,8,9],5,9)
 * [5, 6, 7, 8, 9]
 *
 * getArrayNum([0,1,2,3,4,5,6,7,8,9],2)
 * [2, 3, 4, 5, 6, 7, 8, 9]
 *
 */
function getArrayNum(arr, n1, n2) {
    let arr1 = [], len = n2 || arr.length - 1;
    for (let i = n1; i <= len; i++) {
        arr1.push(arr[i])
    }
    return arr1;
}

/**
 * 删除值为'val'的数组元素
 * @param arr 数组
 * @param val 删除的元素
 * @param type 删除的类型  默认为完全匹配  加% 关键字匹配哦
 *
 *
 * removeArrayForValue(['test','test1','test2','test','aaa'],'test','%')
 * ["aaa"]   带有'test'的都删除
 *
 * removeArrayForValue(['test','test1','test2','test','aaa'],'test')
 * ["test1", "test2", "aaa"]  //数组元素的值全等于'test'才被删除
 */
function removeArrayForValue(arr, val, type) {
    arr.filter(function (item) {
        return type === '%' ? item.indexOf(val) !== -1 : item !== val
    })
}


/***********************************************************************************************************************
 *  www.zhanglei928.com
 * 其他操作
 * 张磊
 ***********************************************************************************************************************/

/**
 * 设置cookie
 * @param name cookie名称
 * @param value cookie值
 * @param iDay 保存天数
 */
function setCookie(name, value, iDay) {
    let oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + '=' + value + ';expires=' + oDate;
}


/**
 * 获取cookie
 * @param name cookie的名称
 * @returns {*}
 */
function getCookie(name) {
    let arr = document.cookie.split('; ');
    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[i].split('=');
        if (arr2[0] == name) {
            return arr2[1];
        }
    }
    return '';
}

/**
 * 删除cookie
 * @param name
 */
function removeCookie(name) {
    setCookie(name, 1, -1);
}

/**
 * 格式化对象 清除对象中的空和null
 * @param obj 对象
 * @returns {{}}  处理完之后的对象
 *
 * filterParams({a:"",b:null,c:"010",d:123})
 * Object {c: "010", d: 123}
 */
function filterParams(obj) {
    let _newPar = {};
    for (let key in obj) {
        if ((obj[key] === 0 || obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
            _newPar[key] = obj[key];
        }
    }
    return _newPar;
}

/**
 * 将数组的人民币转换为大写
 * @param n 钱数
 * @returns {string} 转为大写的人民币名称
 *
 * upDigit(168752632)
 * ￥壹亿陆仟捌佰柒拾伍万贰仟陆佰叁拾贰元整"
 *
 * upDigit(-1682)
 * -￥壹仟陆佰捌拾贰元整
 */
function upDigit(n) {
    let fraction = ['角', '分', '厘'];
    let digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    let unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
    let head = n < 0 ? '￥-' : '￥';
    n = Math.abs(n);
    let s = '';
    for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (let i = 0; i < unit[0].length && n > 0; i++) {
        let p = '';
        for (let j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        //s = p.replace(/(零.)*零$/, '').replace(/^$/, '零')+ unit[0][i] + s;
        s = p + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}


/**
 * 获取URL参数 获取的参数为一个对象
 * @param url URL地址
 * @returns {{}}  返回一个对象
 */
function getUrlPrmt(url) {
    url = url ? url : window.location.href;
    let _pa = url.substring(url.indexOf('?') + 1), _arrS = _pa.split('&'), _rs = {};
    for (let i = 0, _len = _arrS.length; i < _len; i++) {
        let pos = _arrS[i].indexOf('=');
        if (pos == -1) {
            continue;
        }
        let name = _arrS[i].substring(0, pos), value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
        _rs[name] = value;
    }
    return _rs;
}


/**
 * 设置参数
 * @param obj 参数为一个对象
 * @returns {string} 返回一个使用&连接的字符串
 *
 * setUrlPrmt({'a':1,'b':2})
 * a=1&b=2
 */
function setUrlPrmt(obj) {
    let _rs = [];
    for (let p in obj) {
        if (obj[p] != null && obj[p] != '') {
            _rs.push(p + '=' + obj[p])
        }
    }
    return _rs.join('&');
}

/**
 * 返回两个数之间的随机数
 * @param n1 开始值  默认为0
 * @param n2 结束值  默认为255
 * @returns {number}
 *
 * randomNumber(5,10)
 * 返回5-10的随机整数，包括5，10
 *
 * randomNumber(10)
 * 返回0-10的随机整数，包括0，10
 *
 * randomNumber()
 * 返回0-255的随机整数，包括0，255
 */
function randomNumber(n1, n2) {
    if (arguments.length === 2) {
        return Math.round(n1 + Math.random() * (n2 - n1));
    }
    else if (arguments.length === 1) {
        return Math.round(Math.random() * n1)
    }
    else {
        return Math.round(Math.random() * 255)
    }
}

/**
 * 随机产生颜色值
 * @returns {*}  rgb(34,60,238)  一个rgb值
 */
function randomColor() {
    //randomNumber是上面定义的函数
    //写法1
    return 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';

    //写法2
    //return '#'+Math.random().toString(16).substring(2).substr(0,6);

    //写法3
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += '0123456789abcdef'[randomNumber(15)];
    }
    return color;
}


/**
 * 获取到截止时间的时间
 * @param endTime  截止时间
 * @returns {string}  返回的字符串
 *
 *
 * getEndTime('2017/7/22 16:0:0')
 *
 * "剩余时间6天 2小时 28 分钟20 秒"
 */
function getEndTime(endTime) {
    let startDate = new Date();  //开始时间，当前时间
    let endDate = new Date(endTime); //结束时间，需传入时间参数
    let t = endDate.getTime() - startDate.getTime();  //时间差的毫秒数
    let d = 0, h = 0, m = 0, s = 0;
    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
    }
    return d + "天" + h + "小时 " + m + " 分钟" + s + " 秒";
}

/**
 * 文件类型检测
 * @param url  文件路径带后缀
 * @param type 检测类型
 * @returns {boolean}  返回true false
 */
function checkFileType(url, type) {
    let url = url.toLowerCase() || '',
        type = type.toLowerCase() || '',
        point = url.lastIndexOf("."),
        filetype = url.substr(point);
    if (type.indexOf(filetype) < 0 || url == "") {
        return false;
    } else {
        return true;
    }
}