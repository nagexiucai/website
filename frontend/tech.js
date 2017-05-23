// https://github.com/nagexiucai/website

var environments = function () {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    var war = document.getElementById("canvas-war");
    war.width = width;
    war.height = height;

    return {
        width: width,
        height: height,
        ctx: war.getContext("2d")
    };
};
var entities = [];
var ticks = 0;

// 判定内点
function pointin(p, plg) {
    for (var c = false, i = -1, l = plg.length, j = l - 1; ++i < l; j = i) {
        ((plg[i].y <= p.y && p.y < plg[j].y) || (plg[j].y <= p.y && p.y < plg[i].y)) && (p.x < (plg[j].x - plg[i].x) * (p.y - plg[i].y) / (plg[j].y - plg[i].y) + plg[i].x) && (c = !c);
    }
    return c;
}

// 计算平面上已知顶点和所过另外一点坐标开口朝上二次解析参数
// TODO: 由于计算精度损失导致起止点水平或垂直接近时失效
function quadratic(vertex, another) {
    /* ax^2 + bx + c = y
    ** vertex == P(x1,y1)
    ** another == P(x2,y2)
    ** 必过another的抛物线轴对称点 ? = P(2*x1-x2,y2)
    ** 其实是平面上已知不重复三点可确定一条抛物线的通用法则
    */

    var a = ((another.y - vertex.y) * vertex.x) / Math.pow(vertex.x - another.x, 3);
    var b = ((vertex.y - another.y) / (vertex.x - another.x)) - (a * (vertex.x + another.x));
    var c = vertex.y - (a * Math.pow(vertex.x, 2)) - (b * vertex.x);

    return function (x) {
        return a*Math.pow(x,2) + b*x + c;
    }
}

// 点距
function distance(p, pp) {
    return Math.pow(Math.pow(p.x-pp.x,2) + Math.pow(p.y-pp.y,2), 0.5);
}

// 战场布局
var layout = function (w, h, ctx, data) {
    // 按矩形周长均匀分布
    // 按椭圆周长均匀分布
    // 按边缘距离泊松分布

    // 按中心角度均匀分布

    var scale = Math.sqrt(2) / 2
    var n = data.length;
    var step = Math.PI*2 / n;
    var centerX = w/2;
    var centerY = h/2;
    var radius = Math.min(w, h);
    for (var i=0;i<n;i++) {
        var ett = entity(data[i].id, data[i].name, data[i].logo, data[i].score, data[i].color, ctx);
        ett.x = centerX + Math.cos(step*i)*radius*scale/2;
        ett.y = centerY + Math.sin(step*i)*radius*scale/2;
        entities[ett.id] = ett;
        ett.show();
    }
};

// 实体模型
var entity = function (id, name, logo, score, color, ctx) {
    return {
        id: id,
        name: name,
        logo: logo || "/frontend/common/police.png",
        color: color,
        memebers: [],
        vertexes: [], // reserved for 3d
        enemies: [],
        friends: [],
        x: 0,
        y: 0,
        z: 0,
        ctx: ctx,
        score: score,
        state: "active", // active/attacked/dead/robust/weak
        bullets: [],
        show: function () {
            // 报上名来
            this.ctx.fillStyle = "white";
            this.ctx.font = "20px Cursive";
            this.ctx.textAlign = "center";
            this.ctx.fillText(this.name, this.x, this.y);
            // 树立旗来
            var img = new Image();
            img.ictx = this.ctx;
            img.ix = this.x;
            img.iy = this.y;
            img.onload = function () { // XXX: JS中的this实在太灵活
                this.ictx.drawImage(img, this.ix-this.width/2, this.iy-this.height/2, this.width, this.height);
            },
            img.src = this.logo;
            // 闪亮起来
            this.spark();
            // 行动起来
            this.fight();
        },
        spark: function () {
            // 根据状态切换自身光环
        },
        fight: function () {
            var bullet = function () {
                return {
                    texture: "0101", // 二进制弹道导弹
                    startX: 0,
                    startY: 0,
                    endX: 0,
                    endY: 0,
                    speed: 5, // pixels
                    delta: 0,
                    bx: 0,
                    by: 0,
                    status: "ready", // cruise/destruct/ready
                    bctx: undefined,
                    orbit: undefined,
                    bcolor: "white",
                    fly: function () {
                        // 按N次贝塞尔曲线攻击（避开友军）

                        // 按二阶抛物线攻击（若目标为顶点，则简化为“平面上已知顶点和所过一点坐标求开口向上二次解析方程”）
                        
                        // 保存当前坐标
                        var x = this.bx;
                        var y = this.by;

                        // 计算水平位移
                        if (this.endX >= this.startX) {
                            this.delta += this.speed;;
                        }
                        else {
                            this.delta -= this.speed;
                        }
                        this.bx += this.delta;

                        // 计算垂直坐标
                        this.by = this.orbit(this.bx);

                        // if x|y near target then burst and reset delta
                        if (distance({x:this.startX,y:this.startY},{x:this.bx,y:this.by}) >= distance({x:this.endX,y:this.endY},{x:this.startX,y:this.startY})) {
                            this.bx = this.startX;
                            this.by = this.startY;
                            this.delta = 0;
                            this.status = "destruct";

var img = new Image();
img.ictx = this.bctx;
img.ix = this.endX;
img.iy = this.endY;
img.onload = function () { // XXX: JS中的this实在太灵活
    this.ictx.drawImage(img, this.ix-20, this.iy-20, 40, 40);
},
img.src = "/frontend/material-library/burst.png";

                            return;
                        }

                        this.bctx.fillStyle = this.bcolor;
                        this.bctx.beginPath();
                        this.bctx.arc(this.bx, this.by, 3, 0, 2*Math.PI, true);
                        this.bctx.fill();

                        this.status = "cruise";
                    },
                    emit: function () {
                    },
                    burst: function () {
                        this.status = "destruct";
                    }
                };
            };
            for (var i=0; i<this.enemies.length; i++) { // TODO: 已经挂了的目标就不必继续打击
                var warhead = bullet();
                this.bullets[this.enemies[i]] = warhead;
                var ett = entities[this.enemies[i]];
                warhead.startX = warhead.bx = this.x;
                warhead.startY = warhead.by = this.y;
                warhead.endX = ett.x;
                warhead.endY = ett.y;
                warhead.bctx = this.ctx;
                warhead.bcolor = ett.color;
                warhead.orbit = quadratic({x:ett.x,y:ett.y},{x:this.x,y:this.y});
                warhead.emit();
            }
        }
    };
};

function initialize() {
    var data = [{id:"lvbu",name:"吕布",memebers:[],logo:"",score:20,color:"red"},{id:"guanyu",name:"关羽",memebers:[],logo:"",score:15,color:"green"},{id:"zhaoyun",name:"赵云",memebers:[],logo:"",score:40,color:"blue"},{id:"huangzhong",name:"黄忠",memebers:[],logo:"",score:30,color:"violet"},{id:"dianwei",name:"典韦",memebers:[],logo:"",score:25,color:"pink"},{id:"zhangfei",name:"张飞",memebers:[],logo:"",score:35,color:"yellow"},{id:"machao",name:"马超",memebers:[],logo:"",score:10,color:"silver"},{id:"xuchu",name:"许褚",memebers:[],logo:"",score:50,color:"cyan"},{id:"ganning",name:"甘宁",memebers:[],logo:"",score:90,color:"orange"},{id:"xiucai",name:"秀才",memebers:[],logo:"",score:65,color:"golden"}]; // by ajax
    var cfg = environments();
    layout(cfg.width, cfg.height, cfg.ctx, data);
}

function animate() {
    for (var ett in entities) {
        entities[ett].spark();
        for (var blt in entities[ett].bullets) {
            entities[ett].bullets[blt].fly();
        }
    }
}

function update() {
    if (ticks%5 == 0) {
        // by ajax
        ticks = 0;
    }

    animate();

    ticks++;

    setTimeout(update, 500);
}

function test() {
    entities["xiucai"].enemies.push("xuchu");
    entities["xiucai"].enemies.push("dianwei");
    entities["xiucai"].enemies.push("zhangfei");
    entities["xiucai"].fight();
}

console.log("!!!war broke out!!!");
initialize();
test();
update();