// https://github.com/nagexiucai/website

var entities = [];

// 内点判定
function pointin(p, plg) {
    for (var c = false, i = -1, l = plg.length, j = l - 1; ++i < l; j = i) {
        ((plg[i].y <= p.y && p.y < plg[j].y) || (plg[j].y <= p.y && p.y < plg[i].y)) && (p.x < (plg[j].x - plg[i].x) * (p.y - plg[i].y) / (plg[j].y - plg[i].y) + plg[i].x) && (c = !c);
    }
    return c;
}

// 战场布局
var layout = function (w, h, data, ctx) {
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
        score: 0,
        state: "normal", // normal/attacked/alarmed/powerful/weak/dead
        tickers: [],
        show: function () {
            // 报上名来
            this.ctx.fillStyle = "white";
            this.ctx.font = "20px Cursive";
            this.ctx.textAlign = "center";
            this.ctx.fillText(this.name, this.x, this.y);
            // 树立旗来
            var img = new Image();
            img.onload = function () {
                console.log(this);
                this.ctx.drawImage(img, this.x, this.y, 20, 20); // TODO: 如何传递外部this（setTimeout/setInterval）
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
                    startX: this.x,
                    startY: this.y,
                    endX: this.x,
                    endY: this.y,
                    pathway: function () {
                        // 按N次贝塞尔曲线攻击（避开友军）

                        // 按二阶抛物线攻击（简化成目标为拐点）
                        console.log(this);
                    },
                    emit: function () {
                        console.log(this);
                    },
                    burst: function () {
                        console.log(this);
                    }
                };
            };
            for (var i=0, warhead=bullet(); i<this.enemies.length; i++) {
                var ett = entities[this.enemies[i]];
                warhead.endX = ett.x;
                warhead.endY = ett.y;
                warhead.emit();
            }
        }
    };
};

function initialize() {
    var war = document.getElementById("canvas-war");
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    war.width = width;
    war.height = height;
    warctx = war.getContext("2d");
    var data = [{id:"lvbu",name:"吕布",memebers:[],logo:"",score:20},{id:"guanyu",name:"关羽",memebers:[],logo:"",score:15},{id:"zhaoyun",name:"赵云",memebers:[],logo:"",score:40},{id:"huangzhong",name:"黄忠",memebers:[],logo:"",score:30},{id:"dianwei",name:"典韦",memebers:[],logo:"",score:25},{id:"zhangfei",name:"张飞",memebers:[],logo:"",score:35},{id:"machao",name:"马超",memebers:[],logo:"",score:10},{id:"xuchu",name:"许褚",memebers:[],logo:"",score:50},{id:"ganning",name:"甘宁",memebers:[],logo:"",score:90},{id:"xiucai",name:"秀才",memebers:[],logo:"",score:65}]; // by ajax
    layout(width, height, data, warctx);
}

initialize();

function update() {
}