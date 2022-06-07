const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({ alpha: true })
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000)

// const geometry = new THREE.CylinderGeometry(5, 5, 20, 32)
// const geometry = new THREE.sphereGeometry(20, 8, 6);
const geometry = new THREE.SphereGeometry(5, 64, 32);

/* const material = new THREE.MeshBasicMaterial({
    color: "red",
    wireframe: true,
}) */

let material = new THREE.MeshPhongMaterial({
    color: 'rgb(0, 255, 149)', // red (can also use a CSS color string here)
    opacity: 0.8,
    transparent: true,
    flatShading: true,
});

const cylinder = new THREE.Mesh(geometry, material)





// wireframe
var geo = new THREE.EdgesGeometry(cylinder.geometry); // or WireframeGeometry
var mat = new THREE.LineBasicMaterial({ color: 'rgb(0, 255, 149)' });
var wireframe = new THREE.LineSegments(geo, mat);
cylinder.add(wireframe);





scene.add(cylinder)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 25
camera.rotation.x += 0
camera.rotation.y += 0
camera.rotation.z += 0
cylinder.rotation.z = 0.5

//Création de la lumière
//Ambiante
var light = new THREE.AmbientLight('rgb(255, 235, 124)');
scene.add(light);
//Directionelle
var light = new THREE.DirectionalLight(0xfdfcf0, 1);
light.position.set(20, 10, 20);
scene.add(light);











renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

function animate() {
    cylinder.rotation.x += 0.00
    cylinder.rotation.y += 0.005
    cylinder.rotation.z += 0.00
    camera.rotation.z += 0.0
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}
window.addEventListener('resize', onWindowResize);
animate()