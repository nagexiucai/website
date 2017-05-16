// https://github.com/nagexiucai/website

/*
The amount of vertices a plane has is (segmentsWidth+1) * (segmentsHeight+1).
If your image is 10x10 px it will give you 100 values.
So you have to divide your plane into 9x9 segments.
For example this plane is divided into 5x5 segments, which results into 36 vertices.
Plane with 10 height/width and 5x5 segments, so as THREE.PlaneGeometry(10,10,5,5);
*/

// return array with height data from img
function getHeightData(img, scale) {
    if (scale == undefined) {
        scale=1;
    }
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
    var imgd = context.getImageData(0,0,img.width,img.height);
    var pix = imgd.data;
    var j=0;
    for (var i=0;i<pix.length;i+=4) {
        var all = pix[i]+pix[i+1]+pix[i+2];
        data[j++] = all/(12*scale);
    }
    return data;
}

// terrain
var img = new Image();
img.onload = function () {
    var square = document.getElementById("square");
    // get height data from img
    var data = getHeightData(img);
    // prepare environment
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 400);
    square.appendChild(renderer.domElement);
    var camera = new THREE.PerspectiveCamera(45,1,1,1000);
    camera.position.z = 5;
    var scene = new THREE.Scene();
    // plane
    var geometry = new THREE.PlaneGeometry(256,256,255,255);
    var texture = THREE.ImageUtils.loadTexture("/frontend/material-library/huashan-texture.jpg");
    var material = new THREE.MeshLambertMaterial({color: 0xffffff}/*{map: texture}*/);
    var plane = new THREE.Mesh(geometry,material);
    // set height of vertices
    for ( var i=0;i<plane.geometry.vertices.length;i++) {
        plane.geometry.vertices[i].z = data[i];
    }
    scene.add(plane);

    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    var cube = new THREE.Mesh(geometry,material);
    scene.add(cube);

    var render = function () {
        requestAnimationFrame(render);

        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;
        renderer.render(scene,camera);
    };
    render();
};
// load img source
img.src = "/frontend/material-library/huashan.png";