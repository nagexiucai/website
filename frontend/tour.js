// https://github.com/nagexiucai/website

/*
The amount of vertices a plane has is (segmentsWidth+1) * (segmentsHeight+1).
If your image is 10x10 px it will give you 100 values.
So you have to divide your plane into 9x9 segments.
For example this plane is divided into 5x5 segments, which results into 36 vertices.
Plane with 10 height/width and 5x5 segments, so as THREE.PlaneGeometry(10,10,5,5);
*/

function getHeightData(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var context = canvas.getContext("2d");

    var size = img.width * img.height;
    var data = new Float32Array(size);
    context.drawImage(img,0,0);
    for (vari=0;i<size;i++) {
        data[i] = 0
    }

    var idata = context.getImageData(0,0,img.width,img.height);
    var pixels = idata.data;
    for (var i=0,j=0;i<pixels.length;i+=4,j++) { // TODO: why step is 4 and what rbg correspondence is -- because of rgba: https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data/
        data[j] = (pixels[i]*256+pixels[i+1]+pixels[i+2]/256)-32768;
    }

    return data;
}

var img = new Image();
img.onload = function () {
    var square = document.getElementById("square");

    // get height data from img
    var data = getHeightData(img);

    // prepare environment
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(img.width*img.scalew, img.height*img.scalew); // TODO: to be reactive
    square.appendChild(renderer.domElement);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75,1,0.1,1000);
    camera.position.set(0,0,20);
    camera.lookAt(scene.position);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    scene.add(new THREE.AmbientLight("white")); // XXX: MeshLambertMaterial needs Light

    // plane
    var geometry = new THREE.PlaneGeometry(16,16,img.width-1,img.height-1);

    // changeable geometry
    // geometry.dynamic = true;
    // geometry.__dirtyVertices = true;
    // geometry.computeCentroids();

    var skin = new Image();
    skin.src = img.skin;
    var texture = new THREE.Texture(skin);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.needsUpdate = true;

    // var cover = {color: 0x00FF00, wireframe: true};
    var cover = {map: texture}; // TODO: Texture marked for update but image is incomplete
    var material = new THREE.MeshLambertMaterial(cover);
    var plane = new THREE.Mesh(geometry,material);
    plane.rotation.set(-Math.PI/4,0,-Math.PI/4);

    // set height of vertices
    var grads = function () {
        for (var i=0,j=-1;i<plane.geometry.vertices.length;i++) {
            if (i%256==0) {
                if (j<0) {
                    plane.geometry.vertices[i].z = 0;
                }
                else {
                    plane.geometry.vertices[i].z = data[i]-data[j*256];
                }
                j++;
            }
            else {
                plane.geometry.vertices[i].z = data[i]-data[i-1];
            }
        }
    }

    var scale = function () {
        // maximum=1826.519531 minimum=899.460938 difference=927.058593 -- huashan-14-13202-6518
        // maximum=2305.972656 minimum=324.000000 difference=1981.972656 -- huashan-10-825-407
        for (var i=0;i<plane.geometry.vertices.length;i++) {
            plane.geometry.vertices[i].z = (data[i]-img.base)/img.scaleh;
        }
    }

    // grads();
    scale();

    scene.add(plane);

    // cube
    // var geometry = new THREE.BoxGeometry(1,1,1);
    // var material = new THREE.MeshBasicMaterial({color: 0xF0000F/*, wireframe: true*/});
    // var cube = new THREE.Mesh(geometry,material);
    // scene.add(cube);

    var render = function () {
        requestAnimationFrame(render);

        // plane.rotation.x += 0.01;
        // plane.rotation.y += 0.01;
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;

        controls.update();
        renderer.render(scene,camera);
    };
    render();
};

var whole = function () {
    img.base = 1981.972656;
    img.scaleh = 1000;
    img.scalew = 2;
    img.skin = "/frontend/material-library/huashan-texture-10-825-407.jpg";
    img.src = "/frontend/material-library/huashan-10-825-407.png";
}

var part = function () {
    img.base = 899.460938;
    img.scaleh = 100;
    img.scalew = 2;
    img.skin = "/frontend/material-library/huashan-texture-14-13202-6518.jpg";
    img.src = "/frontend/material-library/huashan-14-13202-6518.png";
}


if (Math.random()*10 > 5.0) {
    whole();
}
else {
    part();
}

// var enlarged = function () {
//     img.base = 0;
//     img.scaleh = 200;
//     img.scalew = 1;
//     img.skin = "/frontend/material-library/mount-hua-texture.png"; // huashan-texture-14-[13201-6517,13202,1619].png
//     img.src = "/frontend/material-library/mount-hua.png"; // huashan-14-[13201-6517,13202,1619].png
// }

// enlarged();

// test
var test = document.getElementById("test");
var cvtest = document.getElementById("joint");
cvtest.width = 1536;
cvtest.height = 1536;
var ctxtest = cvtest.getContext("2d");
var x = 0;
var y = 0;
var west = 13201;
// var east = 13204;
var north = 6517;
// var south = 6521;
var root = "/frontend/material-library/";
var prefix = "huashan-14-"; // "huashan-texture-14-";
var suffix = ".png"; // ".jpg";

function joint() {
    var img = new Image();
    img.onload = function() {
        ctxtest.drawImage(img, x*256, y*256);
        x += 1;
        west += 1;
        if (x%2 == 0){
            y += 1;
            north += 1;
            x = 0;
            west = 13201; // note its origin
        }
        if (y <= 2) {
            setTimeout(joint, 500);
        }
    };
    img.src = root + prefix + west + "-" + north + suffix;
}

// joint();

function cv2img() {
    var img = new Image();  
    img.src = cvtest.toDataURL("image/png");
    test.appendChild(img);
    test.style.display = "block";
}