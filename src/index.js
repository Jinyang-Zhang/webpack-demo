import _ from "lodash";
// import './style.css';
// import Icon from './Simba.png';
// import Data from './data.xml';
import printMe from './print.js';

function component() {
  const element = document.createElement("div");
  var btn = document.createElement('button');
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  // element.classList.add('hello');
  // 将图像添加到我们已经存在的 div 中。
  // const myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);
  // console.log(Data);
  btn.innerHTML = '点击这里！';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());