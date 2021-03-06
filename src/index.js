import _ from "lodash";
// import './style.css';
// import Icon from './Simba.png';
// import Data from './data.xml';
import printMe from './print.js';
import './styles.css';

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

let element = component(); // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
    document.body.appendChild(element);
  })
}