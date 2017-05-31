// https://github.com/nagexiucai/website

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
    for (var i=0,j=0;i<pixels.length;i+=4,j++) { // pixel = [r,g,b,a]
        data[j] = (pixels[i]*256+pixels[i+1]+pixels[i+2]/256)-32768;
    }

    return data;
}

var img = new Image();
img.onload = function () {
    var square = document.getElementById("square");

    var data = getHeightData(img);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(img.width*img.scalew, img.height*img.scalew);
    square.appendChild(renderer.domElement);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75,1,0.1,1000);
    camera.position.set(0,0,20);
    camera.lookAt(scene.position);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    scene.add(new THREE.AmbientLight("white"));

    var geometry = new THREE.PlaneGeometry(16,16,img.width-1,img.height-1);

    var skin = new Image();
    skin.src = img.skin;
    var texture = new THREE.Texture(skin);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.needsUpdate = true;

    var cover = {map: texture};
    var material = new THREE.MeshLambertMaterial(cover);
    var plane = new THREE.Mesh(geometry,material);
    plane.rotation.set(-Math.PI/4,0,-Math.PI/4);

    var scale = function () {
        for (var i=0;i<plane.geometry.vertices.length;i++) {
            plane.geometry.vertices[i].z = (data[i]-img.base)/img.scaleh;
        }
    }

    scale();

    scene.add(plane);

    var render = function () {
        requestAnimationFrame(render);

        controls.update();
        renderer.render(scene,camera);
    };
    render();
};

var huashan = function () {
    img.base = 899.460938;
    img.scaleh = 100;
    img.scalew = 2;
    img.skin = "/frontend/material-library/mount-hua-texture.png";
    img.src = "/frontend/material-library/mount-hua.png";
}

huashan();