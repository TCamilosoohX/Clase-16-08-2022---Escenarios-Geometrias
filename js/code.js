// creating sceme
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x1C2541);
scene.fog = new THREE.Fog( 0, 5, 1)

var loader = new THREE.TextureLoader();
loader.load('./wallpaper4.png', function(texture){
    scene.background = texture;
})

// add camera
var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight
);

// remderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// add geometry
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x2ccfc0});
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

var animate = function(){
    requestAnimationFrame(animate);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();