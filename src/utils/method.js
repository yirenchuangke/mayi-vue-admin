// 防抖：就是指触发事件后在n秒内函数只能执行一次，如果在n秒内又触发了事件，则会重新计算函数执行时间
export function debounce(fn, wait = 800) {
  let timmer = null;
  return function() {
    timmer && clearTimeout(timmer);
    timmer = setTimeout(() => {
      fn();
    }, wait);
  };
}
// 节流：就是指连续触发事件但是在一段事件中只执行一次函数
export function throttle(fn, wait = 800) {
  let timmer = null;
  return function() {
    let now = !timmer;
    timmer && clearTimeout(timmer);
    timmer = setTimeout(() => {
      timmer = null;
    }, wait);
    if (now) {
      fn();
    }
  };
}
// 深拷贝函数
export function deepClone(origin) {
  var isObject = (any) => typeof any == "object" && any != null;
  var isArray = (any) =>
    Object.prototype.toString.call(any) === "[object Array]";
  if (!isObject(origin)) return origin;
  var target = isArray(origin) ? [] : {};
  for (var prop in origin) {
    if (origin.hasOwnProperty(prop)) {
      var value = origin[prop];
      if (isObject(value)) {
        target[prop] = deepClone(value);
      } else {
        target[prop] = value;
      }
      //if...else...可换成三目运算符
      //target[prop] = isObject(value) ? deepClone(value) : value
    }
  }
  return target;
}
