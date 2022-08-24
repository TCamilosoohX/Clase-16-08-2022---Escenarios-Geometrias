// creating sceme
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x1C2541);
scene.fog = new THREE.Fog( 0x00ff00, 10, 6)


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
var geometry = new THREE.BoxGeometry(2, 2, 2, 5, 5, 5);
var material = new THREE.MeshBasicMaterial({color: 0xffffff});

var object = new THREE.Mesh(
    new THREE.ConeGeometry(1, 3, 32),
    material
    );


scene.add(object);

camera.position.z = 10;

var animate = function(){
    requestAnimationFrame(animate);
    
    scene.traverse(function(object){
        if(object.isMesh === true){

            object.rotation.x += 0.01
            object.rotation.y += 0.01
        }
    }); 
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();