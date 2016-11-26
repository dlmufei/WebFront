#视窗设定
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
//扩展
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="Copyright" content="Tencent" />
<meta name="format-detection" content="telephone=no" />


#长页面JS

var evt = "onorientationchange" in window ? "orientationchange" : "resize";
window.addEventListener(evt, resize, false);//添加屏幕旋转事件
function resize() {
 var html = document.documentElement;
 //页面大小缩放的上限阀值，当页面大小超过此值时将不再放大页面
 var k = 375; 
 if (window.orientation == 90 || window.orientation == -90) {//横屏
 k = 320;//横屏时页面大小缩放的上限
 }
 //750为设计稿宽度大小，100为根元素大小
 if (html.clientWidth <= k) {
 html.style.fontSize = html.clientWidth / 750 * 100 + "px";
 } else {
 html.style.fontSize = k / 750 * 100 + "px";
 }
}
resize();

闭包形式
/* var t0 = new Date().getTime();
        (function(doc, win) {
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function() {
                    var clientWidth = docEl.clientWidth;
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                };
            // recalc();
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            win.addEventListener("DOMContentLoaded", recalc, false);
        })(document, window);*/



#分屏页面JS

var evt = "onorientationchange" in window ? "orientationchange" : "resize";
function resize() {
 var html = document.documentElement,
 fontSize = 100,//100为根元素字体大小
 pageW = 750,//设计稿页面宽度
 pageH = 1254,//设计稿页面高度
 //根据具体情况修改宽高值，可以用页面主体内容的宽高值
 wk = 375;//页面大小缩放的上限阀值，当页面大小超过此值时将不再放大页面
 hk = 627;//页面大小缩放的上限阀值，当页面大小超过此值时将不再放大页面
 if (html.clientWidth / html.clientHeight > pageW / pageH) {
 if (html.clientHeight <= hk) {
 html.style.fontSize = html.clientHeight / pageH * fontSize + "px";
 } else {
 html.style.fontSize = hk / pageH * fontSize + "px";
 }
 } else {
 if (html.clientWidth <= wk) {
 html.style.fontSize = html.clientWidth / pageW * fontSize + "px";
 } else {
 html.style.fontSize = wk / pageW * fontSize + "px";
 }
 }
}
resize();

#media query媒体查询

@media screen and (min-width:320px) {
　 html { font-size:42.66px;}
}
@media screen and (min-width:360px) {
　 html { font-size:48px;}
}
@media screen and (min-width:375px) {
　 html { font-size:50px;}
}
@media screen and (min-width:480px) {
　 html { font-size:64px;}
}
//扩展
@media screen and (min-width: 320px) and (max-width: 480px) {
    /*style*/
}
@media screen and (min-width: 480px) and (max-width: 640px) {
    /*style*/
}
