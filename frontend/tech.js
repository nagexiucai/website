// https://github.com/nagexiucai/website

var cover = document.getElementById("cover");
var iframe = document.getElementById("iframe");

function show(what) {
    var todo = what.getAttribute("value");
    cover.style.display = "block";
    iframe.src = "/" + todo + "/";
}