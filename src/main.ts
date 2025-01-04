import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const loader = new THREE.TextureLoader();

const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;

const width = globalThis.innerWidth;
const height = globalThis.innerHeight;

// Scene
const scene = new THREE.Scene();

// Geometry
const earthGroup = new THREE.Group();

const geometry = new THREE.IcosahedronGeometry(1, 16);
const material = new THREE.MeshStandardMaterial({
  map: loader.load("00_earthmap1k.jpg"),
});
const earthMesh = new THREE.Mesh(geometry, material);

earthGroup.rotation.z = (-23.5 * Math.PI) / 180;
earthGroup.add(earthMesh);
scene.add(earthGroup);

// Light
const sunLight = new THREE.DirectionalLight(0xffffff, 2);
sunLight.position.set(-2, 0.5, 1.5);
scene.add(sunLight);

// Camera
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1_000);
camera.position.z = 5;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas,
});
renderer.setSize(width, height);
renderer.render(scene, camera);

// Animation
const tick = () => {
  earthGroup.rotation.y += 0.002;

  renderer.render(scene, camera);

  globalThis.requestAnimationFrame(tick);
};

tick();
