// https://github.com/nagexiucai/website

var NXJS = function() {};
NXJS.__proto__.info = {
    version: "0.0.1",
    license: "bsd",
    author: "me@nagexiucai.com"
};
NXJS.__proto__.ajax = function (method,url,callback,type,mime) {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                callback(ajax);
            }
        }
    };
    ajax.responseType = type || "text";
    ajax.open(method,url,true);
    ajax.setRequestHeader("Content-Type",mime || "application/x-www-form-urlencoded");
    ajax.send({"dataType":"JSONP"});
};

// NXJS.ajax("GET","/",function(ajax){console.log(ajax.responseText);});