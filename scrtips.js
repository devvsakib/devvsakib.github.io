const canvas = document.getElementById('trail');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });
const material = new THREE.MeshBasicMaterial({ color: 0xff19b0 });
const trail = new THREE.Object3D();
trail.material = material;

const width = window.innerWidth;
const height = window.innerHeight;
renderer.setSize(width, height);

scene.add(trail);
document.addEventListener('mousemove', e => {
    trail.position.x = e.clientX;
    trail.position.y = e.clientY;
    camera.position.z = 5;
});

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();