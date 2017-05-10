/*
发送GET请求“https://maps.googleapis.com/maps/api/elevation/json?locations=latitude,longitude[|lati,longi|...]”；
每天2500次免费请求，按客户端与服务器端查询次数之和计算；
每次请求512个位置；
每秒50次请求，按客户端与服务器端查询次数之和计算。

估计——
单线程每秒请求一次，一次500点，2500秒（不到42分钟）完成一天的采集任务，共计125万点；
实际空间约东西8700米、南北9900米；
最大精度点容量约东西92394点、南北105004点。
逐行扫描法，从西往东、由北向南：
步长选择0.000001度时，每天可扫描13.5行，共需7778天多！
依此看来：要么将步长放大到0.001以上；要么增加有效线程。
*/

/*********************
****! Deprecated !****
*********************/

//速度调节因子
var factor = 3; //取值范围是[0,6]（值越大越快）——TODO:这种加速稀疏采样的方式对数据精度损伤太大导致位置偏离显著

//采点目标区域（矩形）
var top = parseFloat(34.543466.toFixed(factor));
var bottom = parseFloat(34.438462.toFixed(factor));
var right = parseFloat(110.115926.toFixed(factor));
var left = parseFloat(110.023532.toFixed(factor));
var step = 0.000001*(Math.pow(10,factor));
var deltay = top*(1000000/Math.pow(10,factor)) - bottom*(1000000/Math.pow(10,factor));
var deltax = right*(1000000/Math.pow(10,factor)) - left*(1000000/Math.pow(10,factor));

var url = "http://maps.googleapis.com/maps/api/elevation/json?";

var request = require("request"); //TODO: 从http到request还是没解决httproxy配置的问题（对node相关模块不熟悉吧）
request.defaults({"proxy":"http://127.0.0.1:8087"});

function fetch(query) {
    request(url+query, function (error, response, body) {
        console.log(error);
        console.log(response);
        console.log(body);
    });
}

//扫描
for (var y=0, cursory=top; y<deltay; y++, cursory=Math.round(((cursory+step)*Math.pow(10,factor)))/Math.pow(10,factor)) {
    for (var x=0, cursorx=left; x<deltax; x++, cursorx=Math.round(((cursorx+step)*Math.pow(10,factor)))/Math.pow(10,factor)) {
        query = "locations=" + cursory + "," + cursorx;
        fetch(query);
        break;
    }
    break;
}
