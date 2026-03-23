import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Escena
const scene = new THREE.Scene();

// Cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 5);
scene.add(light);


// Geometría   new THREE.IcosahedronGeometry(1);    // 20 caras
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);

// Materiales
const materialBlue = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const materialRed = new THREE.MeshStandardMaterial({ color: 0xc0c0c0 });
const materialSilver = new THREE.MeshStandardMaterial({ color: 0xff0000 });

// Figuras
const figure1 = new THREE.Mesh(geometry, materialBlue);
const figure2 = new THREE.Mesh(geometry, materialRed);
const figure3 = new THREE.Mesh(geometry, materialSilver);

// Posiciones (línea horizontal)
figure1.position.x = -3;
figure2.position.x = 0;
figure3.position.x = 3;

// Velocidades
figure1.userData.speed = 0.01;
figure2.userData.speed = 0.04;
figure3.userData.speed = 0.09;

// Agregar a la escena
scene.add(figure1, figure2, figure3);

// Animación
function animate() {

    figure1.rotation.x += figure1.userData.speed;
    figure1.rotation.y += figure1.userData.speed;

    figure2.rotation.x += figure2.userData.speed;
    figure2.rotation.y += figure2.userData.speed;

    figure3.rotation.x += figure3.userData.speed;
    figure3.rotation.y += figure3.userData.speed;

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);