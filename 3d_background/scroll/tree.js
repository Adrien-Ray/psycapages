const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000)

// const geometry = new THREE.CylinderGeometry(5, 5, 20, 32)
// const geometry = new THREE.sphereGeometry(20, 8, 6);
const geometry = new THREE.SphereGeometry(10, 64, 64)

const material = new THREE.MeshBasicMaterial({
    color: "rgb(40, 100, 0)",
    wireframe: true,
})

/* const material = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    opacity: 0.5,
    transparent: true
}); */




const cylinder = new THREE.Mesh(geometry, material)

scene.add(cylinder)
cylinder.rotation.z = 0.2
cylinder.rotation.x = 1.5
camera.position.x = -10
camera.position.y = 0
camera.position.z = 20
camera.rotation.x += 0
camera.rotation.y += -1
camera.rotation.z += -0.5

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

function animate() {
    cylinder.rotation.x += 0.00
    cylinder.rotation.y += -0.00
    cylinder.rotation.z += 0
    camera.rotation.z += 0.00
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




var getScroll;

function repeatOften() {
    cylinder.rotation.y += -0.01
};

function repeatOften2() {
    cylinder.rotation.y += 0.01
};

document.getElementById("fakebody").addEventListener("scroll", function() {
    if (this.scrollTop > getScroll) {
        requestAnimationFrame(repeatOften);
    } else {
        requestAnimationFrame(repeatOften2);
    }
    getScroll = this.scrollTop;

});