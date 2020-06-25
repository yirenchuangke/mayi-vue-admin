// 只能輸入正整数
export let pIositiveInteger = (rule, value, callback) => {
  let reg = /^\d+$/;
  if (!reg.test(value)) {
    callback(new Error("只能输入数字"));
  } else {
    callback();
  }
};

// 只能输入n个正整数
export let pIositiveIntegerNumber = (rule, value, callback) => {
  let reg = /^\d{n}$/;
  if (!reg.test(value)) {
    callback(new Error("只能输n入数字"));
  } else {
    callback();
  }
};

// 手机号
export let phone = (rule, value, callback) => {
  let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
  if (!reg.test(value)) {
    callback(new Error("请输入正确的手机号"));
  } else {
    callback();
  }
};
// URL
export let URL = (rule, value, callback) => {
  let reg = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
  if (!reg.test(value)) {
    callback(new Error("请输入正确的URL"));
  } else {
    callback();
  }
};
// 身份证
export let identityCard = (rule, value, callback) => {
  let reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
  if (!reg.test(value)) {
    callback(new Error("请输入正确的身份证号"));
  } else {
    callback();
  }
};
// 英文数字下划线
export let ENU = (rule, value, callback) => {
  let reg = /^\w+$/;
  if (!reg.test(value)) {
    callback(new Error("只能输入英文数字或下划线"));
  } else {
    callback();
  }
};
// 英文数字
export let EN = (rule, value, callback) => {
  let reg = /^[a-z0-9]+$/i;
  if (!reg.test(value)) {
    callback(new Error("只能输入英文和数字"));
  } else {
    callback();
  }
};
