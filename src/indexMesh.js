var THREE = require('three');
const scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 
    75, //field of view
    window.innerWidth / window.innerHeight, //aspect ratio
    0.1, //near clipping plane
    1000); //far clipping plane

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += .01;
    cube.rotation.y += .01;

    renderer.render( scene, camera );
}


animate();