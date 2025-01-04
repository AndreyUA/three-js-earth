import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;

const width = globalThis.innerWidth;
const height = globalThis.innerHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1_000);
camera.position.z = 5;
scene.add(camera);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas,
});
renderer.setSize(width, height);
renderer.render(scene, camera);

const tick = () => {
  renderer.render(scene, camera);

  globalThis.requestAnimationFrame(tick);
};

tick();
