!function(){
  var duration = 50
  $('.actions').on('click', 'button', function(e){
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
    }
  })
  function writeCode(prefix, code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id
    id = setTimeout(function run(){
      n+=1
      container.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n < code.length){
        id = setTimeout(run, duration)
      }else{
        fn && fn.call()
      }
    }, duration)
  }

code1 = `
body {
  background-color: #fff3e0;
}
/*先给米奇来个头*/
.mickey {
  margin: auto;
  margin-top: 50px;
  margin-bottom: 250px;
  width: 200px;
  height: 200px;
}

.head {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: #000000;
  position: relative;
  box-sizing: border-box;
}
/*来两个圆圆的耳朵*/
.ear {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #000000;
  position: absolute;
  top: -55px;
}

.ear.left {
  left: -40px;
}

.ear.right {
  right: -40px;
}
/*这样脸的边框就成形了*/
/*好了，我们要开始做眼睛了*/
/*首先我们来两只大眼睛*/
.eye-spot {
  height: 100px;
  width: 75px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 15px;
  z-index: 13;
}
.eye {
  background-color: #fff;
  border: 2px solid #000;
  height: 56px;
  width: 23px;
  display: block;
  position: absolute;
  border-radius: 50%;
  top: 27px;
  z-index: 20;
}
.eye.left {
  transform: rotate(-15deg);
  left: 44px;
}
.eye-spot.left {
  left: 27px;
  transform: rotate(10deg);
  
}
.eye.right {
  transform: rotate(15deg);
  right: 44px;
}
.eye-spot.right {
  right:27px;
  transform: rotate(-10deg);
  
}
/*再给他两颗眼珠子*/
.eye.left::before {
  content: "f";
  display: block;
  height: 25px;
  width: 12px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 30px;
  left: 11px;
}
.eye.right::before {
  content: "f";
  display: block;
  height: 25px;
  width: 12px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 30px;
  right: 11px;
}
/*接下来是脸颊了*/
.cheek {
  position: absolute;
  background-color: #fff;
  width: 120px;
  height: 80px;
  border-radius: 50%;
  top: 110px;
  border-bottom: 2px solid #000;
}

.cheek.left {
  left: -10px;
  transform: rotate(30deg);
  border-left: 2px solid #000;
}

.cheek.right {
  right: -10px;
  transform: rotate(-30deg);
  border-right: 2px solid #000;
}
/* 好了，接下来是鼻子了 */
.nose-area {
  background-color: #fff;
  width: 80px;
  height: 70px;
  border-radius: 50%;
  top: 96px;
  left: 60px;
  position: absolute;
  border-top: 3px solid #000;
  z-index: 15
}

.nose-area::before {
  content: "";
  display: block;
  color: red;
  background-color: #000;
  border-radius: 50%;
  width: 50px;
  height: 30px;
  top: 15px;
  left: 15px;
  position: absolute;
}
/*这时，我们的米奇已经挺像了*/
/*我们接着画一个上嘴唇*/
.lip-line {
  width: 140px;
  height: 90px;
  border-radius: 50%; 
  background-color: #fff;
  border-bottom: 2px solid #000;
  top: 78px;
  left: 30px;
  position: absolute;
  z-index: 10;
}
/*然后给它加个嘴巴*/
.mouth {
  position: absolute;
  width: 70px;
  height: 80px;
  background-color: #000;
  top: 120px;
  left: 65px;
  z-index: 9;
  border-radius: 50%;
  overflow: hidden;
}
/*它还需要两根红红的舌头*/
.mouth::before {
  content: "";
  display: block;
  background-color: red;
  height: 37px;
  width: 37px;
  position: absolute;
  z-index: 100;
  top: 55px;
  left: 14px;
  border-radius: 50%;
  border-top: 2px solid #000;
}

.mouth::after {
  content: "";
  display: block;
  background-color: red;
  height: 37px;
  width: 37px;
  position: absolute;
  z-index: 100;
  top: 55px;
  left: 32px;
  border-radius: 50%;
  border-top: 2px solid #000;
}
/*最后来个圆圆的下巴*/
.chin {
  width: 70px;
  height: 55px;
  position: absolute;
  background-color: #fff;
  top: 165px;  
  left: 65px;
  border-radius: 50%;
  border-bottom: 2px solid #000;
}
/* 这只米老鼠是不是很可爱呀*/

`
  writeCode('',code1)

}.call()