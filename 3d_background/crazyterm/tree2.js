const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000)

// const geometry = new THREE.CylinderGeometry(5, 5, 20, 32)
// const geometry = new THREE.sphereGeometry(20, 8, 6);
const geometry = new THREE.TorusGeometry(10, 3, 16, 64)

const material = new THREE.MeshBasicMaterial({
    color: "rgb(0,256,0)",
    wireframe: true,
})
const cylinder = new THREE.Mesh(geometry, material)

scene.add(cylinder)
camera.position.x = 10
camera.position.y = 0
camera.position.z = 0
camera.rotation.x += 1.5
camera.rotation.y += 0.5
camera.rotation.z += 3

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

function animate() {
    cylinder.rotation.x += 0.0
    cylinder.rotation.y += 0.0
    cylinder.rotation.z += -0.005
    camera.rotation.z += 0.001
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