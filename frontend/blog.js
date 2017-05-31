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
    "python":[{"field":"wxwidgets","color":"violet","weight":0.6},
              {"field":"tornado","color":"green","weight":0.7},
              {"field":"interpreter","color":"navy","weight":0.6},
              {"field":"sklearn","color":"blue","weight":0.5},
              {"field":"openstack","color":"red","weight":0.8}],
    "swift":[{"field":"iphone","color":"brown","weight":0.4},
             {"field":"iwatch","color":"blue","weight":0.4}],
    "go":[{"field":"docker","color":"red","weight":0.4},
          {"field":"etcd","color":"green","weight":0.4}],
    "php":[{"field":"laveral","color":"violet","weight":0.3},{"field":"ratchet ","color":"tan","weight":0.3}],
    "javascript":[{"field":"node","color":"brown","weight":0.3},
                  {"field":"vue","color":"green","weight":0.7},
                  {"field":"three","color":"blue","weight":0.8},
                  {"field":"paper","color":"red","weight":0.5},
                  {"field":"chart","color":"navy","weight":0.4},
                  {"field":"egret","color":"ochre","weight":0.3},
                  {"field":"egret","color":"orange","weight":0.5}],
    "lua":[{"field":"elua","color":"violet","weight":0.4}],
    "object-c":[{"field":"macos","color":"brown","weight":0.4}],
    "erlang":[{"field":"leofs","color":"green","weight":0.4},
              {"field":"otp","color":"blue","weight":0.4},
              {"field":"elixir","color":"red","weight":0.3}],
    "java":[{"field":"tomcat","color":"red","weight":0.5},
            {"field":"struts","color":"blue","weight":0.6},
            {"field":"android","color":"green","weight":0.7},
            {"field":"quartz","color":"navy","weight":0.5},
            {"field":"jfreechart","color":"brown","weight":0.4}],
    "c++":[{"field":"ceph","color":"brown","weight":0.4},
           {"field":"cocos2d","color":"blue","weight":0.4}],
    "matlab":[{"field":"image","color":"brown","weight":0.4},
              {"field":"communication","color":"blue","weight":0.3}],
    "c":[{"field":"linux","color":"brown","weight":0.4},
         {"field":"windows","color":"blue","weight":0.4},
         {"field":"mcu","color":"red","weight":0.7},
         {"field":"ucos","color":"brown","weight":0.4},
         {"field":"redis","color":"navy","weight":0.4}],
    "asm":[{"field":"x86","color":"blue","weight":0.4},
           {"field":"arm","color":"red","weight":0.6}],
    "hdl":[{"field":"vhdl","color":"brown","weight":0.4},
           {"field":"verilog","color":"blue","weight":0.4}],
    "chip":[{"field":"nano100","color":"brown","weight":0.4},
            {"field":"lpc214x","color":"blue","weight":0.4},
            {"field":"stm32f103x","color":"red","weight":0.4},
            {"field":"stc89c52x","color":"green","weight":0.4},
            {"field":"sim800c","color":"tan","weight":0.4},
            {"field":"esp8266","color":"navy","weight":0.4},
            {"field":"ns1315","color":"violet","weight":0.4}],
    "pcblayout":[{"field":"altium","color":"brown","weight":0.7},
                 {"field":"protel","color":"blue","weight":0.5},
                 {"field":"cadence","color":"green","weight":0.4}],
    "circuitdesign":[{"field":"multisim","color":"brown","weight":0.7},
                     {"field":"proteus","color":"navy","weight":0.5}],
    "algorithm":[{"field":"search","color":"red","weight":0.6},
                 {"field":"filter","color":"navy","weight":0.5},
                 {"field":"cnn","color":"brown","weight":0.7}],
    "radio":[{"field":"radar","color":"brown","weight":0.7},
             {"field":"antenna","color":"green","weight":0.3},
             {"field":"hfss","color":"blue","weight":0.7}],
    "biomedical":[{"field":"xray","color":"brown","weight":0.7},
                  {"field":"ecg","color":"blue","weight":0.5}]
};
function powerSpectrum(which){
    $swf();
    abstract.style = "display:none;"
    paper.style = "display:inline-block;";
    indicator(which);
    var name = which.attributes["src"].nodeValue;
    var data = skills[name];
    if (data){
        // 斑点
        var stantardWeightRadius = paper.width * 0.125; // 标准比重斑点半径
        var step = (Math.PI*2)/data.length;
        var ctx = paper.getContext("2d");
        var widthCenter = paper.width/2;
        var heightCenter = paper.height/2;
        ctx.clearRect(0,0,paper.width,paper.height);
        for (var i=0; i<data.length; i++){
            var weightRadiusInner = stantardWeightRadius * data[i].weight;
            var weightRadiusOutter = weightRadiusInner + 2;
            var flexFact = data.length/10 + 1;
            var x = widthCenter + Math.cos(step*i)*stantardWeightRadius*flexFact;
            var y = heightCenter + Math.sin(step*i)*stantardWeightRadius*flexFact;
            ctx.fillStyle = "gray";
            ctx.beginPath();
            ctx.arc(x,y,weightRadiusOutter,0,Math.PI*2,true);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = data[i].color;
            ctx.beginPath();
            ctx.arc(x,y,weightRadiusInner,0,Math.PI*2,true);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.font = "20px Cursive";
            ctx.textAlign = "center";
            ctx.fillText(data[i].field,x,y+5); // TODO: 绘制文本垂直居中补丁
        }
    }
}

// 在新页面打开电子书
function esoterica(which){
    paper.style = "display:none;";
    $swf();
    abstract.innerHTML = "<a target='_blank' href='" + "https://github.com/nagexiucai/manuscripts/blob/master/" + which.attributes["src"].nodeValue + "'>" + which.attributes["mark"].nodeValue + "<a/>"
    abstract.style = "display:inline-block;height:400px;"; // p标签不支持width/height属性
    indicator(which);
}

// 在show区域嵌入优酷
function art(which){
    paper.style = "display:none;";
    abstract.style = "display:none;";
    var url = /*"http://player.youku.com/player.php/sid/"*/"http://player.youku.com/embed/" + which.attributes["src"].nodeValue + "=="/*==/v.swf"*/;
    swf.setAttribute("src", url);
    swf.style = "display:inline-block;";
    indicator(which);
}