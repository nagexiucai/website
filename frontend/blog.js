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

// 显示当前点的li节点
function indicator(which){
    var lis = document.getElementsByTagName("li");
    for (var i=0; i<lis.length; i++){
        lis[i].removeAttribute("style");
    }
    which.setAttribute("style", "color:red;");
}

// 在show区域展示图表
var skills = {
    "python":[{"field":"web", "color":"green", "weight":20}, {"field":"core", "color":"blue", "weight":30}, {"field":"cloud", "color":"yellow", "weight":20}],
    "radio":[]
};
function powerspectrum(which){
    $swf();
    abstract.style = "display:none;"
    console.log(which.innerHTML);
    paper.style = "display:inline-block;";
    indicator(which);
    var name = which.attributes["src"].nodeValue;
    var data = skills[name];
    if (data){
        // 饼图
        var cxt=paper.getContext("2d");
        cxt.fillStyle="#FF0000";
        cxt.beginPath();
        cxt.arc(240,200,30,0,Math.PI*2,true);
        cxt.closePath();
        cxt.fill();
    }
}

// 在新页面打开电子书
function esoterica(which){
    paper.style = "display:none;";
    $swf();
    abstract.innerHTML = which.attributes["mark"].nodeValue
    abstract.style = "display:inline-block;height:400px;"; // p标签不支持width/height属性
    console.log(which.innerHTML);
    var url = "http://note.youdao.com/share/?id=" + which.attributes["src"].nodeValue
    indicator(which);
    setTimeout(function(){window.open(url)}, 5000);
}

// 在show区域嵌入优酷
function art(which){
    paper.style = "display:none;";
    abstract.style = "display:none;";
    var url = /*"http://player.youku.com/player.php/sid/"*/"http://player.youku.com/embed/" + which.attributes["src"].nodeValue + "=="/*==/v.swf"*/;
    swf.setAttribute("src", url);
    swf.style = "display:inline-block;";
    indicator(which);
    console.log(which.innerHTML);
}