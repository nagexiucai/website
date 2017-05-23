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

// 内点判定
function pointin(p, plg) {
    for (var c = false, i = -1, l = plg.length, j = l - 1; ++i < l; j = i) {
        ((plg[i].y <= p.y && p.y < plg[j].y) || (plg[j].y <= p.y && p.y < plg[i].y)) && (p.x < (plg[j].x - plg[i].x) * (p.y - plg[i].y) / (plg[j].y - plg[i].y) + plg[i].x) && (c = !c);
    }
    return c;
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
        var ett = entity(data[i].id, data[i].name, data[i].logo, data[i].score, ctx);
        ett.x = centerX + Math.cos(step*i)*radius*scale/2;
        ett.y = centerY + Math.sin(step*i)*radius*scale/2;
        entities[ett.id] = ett;
        ett.show();
    }
};

// 实体模型
var entity = function (id, name, logo, score, ctx) {
    return {
        id: id,
        name: name,
        logo: logo || "/frontend/common/police.png",
        memebers: [],
        vertexes: [],
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
                this.ictx.drawImage(img, this.ix-this.width/2, this.iy-this.height/2, this.width, this.height); // TODO: 如何传递外部this（setTimeout/setInterval）
            },
            img.src = this.logo;
            // 闪亮起来
            this.spark();
            // 行动起来
            this.fight();
        },
        spark: function () {
            // 根据状态切换自身光环
            console.log(this.name+"'s score is "+this.score);
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
                    fly: function () {
                        console.log("让子弹飞");
                        // 按N次贝塞尔曲线攻击（避开友军）

                        // 按二阶抛物线攻击（简化：开口向上，起止点低者为拐点，则有“F(x) = K*x*x，K>0”，K设置曲率，然后整体平移使得顶点和拐点重合）
                        
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
                        this.bx = this.startX + this.delta;
                        // 确定拐点坐标并计算垂直坐标
                        if (this.endY <= this.startY) { // K*(x-this.endX)*(x-this.endX)+this.endY
                            this.by = (this.bx-this.endX)*(this.bx-this.endX)/20 + this.endY;
                        }
                        else { // K*(x-this.startX)*(x-startX)+this.startY
                            this.by = (this.bx-this.startX)*(this.bx-this.startX)/20 + this.startY;
                        }
                        console.log(this.delta+" "+this.bx+" "+this.by);
this.bctx.fillStyle = "white";
this.bctx.font = "20px Cursive";
this.bctx.textAlign = "center";
this.bctx.fillText("o", this.bx, this.by);
                        // if x|y near target then burst and reset delta
                        this.status = "cruise";
                    },
                    emit: function () {
                        console.log("发射");
                    },
                    burst: function () {
                        console.log("命中");
                        this.status = "destruct";
                    }
                };
            };
            console.log(this.name+"'s enemies are:");
            for (var i=0; i<this.enemies.length; i++) { // TODO: 已经挂了的目标就不必继续打击
                var warhead = bullet();
                this.bullets[this.enemies[i]] = warhead;
                var ett = entities[this.enemies[i]];
                warhead.startX = warhead.bx = this.x;
                warhead.startY = warhead.by = this.y;
                warhead.endX = ett.x;
                warhead.endY = ett.y;
                warhead.bctx = this.ctx;
                warhead.emit();
            }
        }
    };
};

function initialize() {
    var data = [{id:"lvbu",name:"吕布",memebers:[],logo:"",score:20},{id:"guanyu",name:"关羽",memebers:[],logo:"",score:15},{id:"zhaoyun",name:"赵云",memebers:[],logo:"",score:40},{id:"huangzhong",name:"黄忠",memebers:[],logo:"",score:30},{id:"dianwei",name:"典韦",memebers:[],logo:"",score:25},{id:"zhangfei",name:"张飞",memebers:[],logo:"",score:35},{id:"machao",name:"马超",memebers:[],logo:"",score:10},{id:"xuchu",name:"许褚",memebers:[],logo:"",score:50},{id:"ganning",name:"甘宁",memebers:[],logo:"",score:90},{id:"xiucai",name:"秀才",memebers:[],logo:"",score:65}]; // by ajax
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
//     if (ticks%5 == 0) {
//         if (entities["xiucai"].enemies.length) {
//             console.log("POP"+entities["xiucai"].enemies.pop());
//         }
//         else {
//             entities["xiucai"].enemies.push("zhangfei"); // by ajax
//             entities["xiucai"].fight();
//         }

//         ticks = 0;
//     }

    animate();

    ticks++;

    setTimeout(update, 500);
}

console.log("!!!war broke out!!!");
initialize();
entities["xiucai"].enemies.push("zhangfei"); // by ajax
entities["xiucai"].fight();
update();