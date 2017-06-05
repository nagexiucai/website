// https://github.com/nagexiucai/website

function show(what) {
    var todo = what.getAttribute("value");
    var cover = document.getElementById("cover");
    cover.style.display = "block";
    var iframe = document.getElementById("iframe");
    
    iframe.src = "/" + todo + "/";
}