// https://github.com/nagexiucai/website

document.onready = function(){
    var swf = document.getElementById("swf");
    var paper = document.getElementById("paper");
    var abstract = document.getElementById("abstract");
};

function $swf(){
    swf.removeAttribute("src");
    swf.style = "display:none;";
}

// 在show区域展示图表
function powerspectrum(which){
    $swf();
    abstract.style = "display:none;"
    console.log(which.innerHTML);
    console.log(which.attributes["src"].nodeValue);
    paper.style = "display:inline-block;";
}

// 在新页面打开电子书
function esoterica(which){
    paper.style = "display:none;";
    $swf();
    console.log(which.innerHTML);
    console.log(which.attributes["src"].nodeValue);
    abstract.style = "display:inline-block;width:480px;height:400px;";
}

// 在show区域嵌入优酷
function art(which){
    paper.style = "display:none;";
    abstract.style = "display:none;";
    var url = "http://player.youku.com/player.php/sid/" + which.attributes["src"].nodeValue + "==/v.swf";
    swf.setAttribute("src", url);
    swf.style = "display:inline-block;";
}