import "./style.css";

import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;

const width = globalThis.innerWidth;
const height = globalThis.innerHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);

const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(width, height);
renderer.render(scene, camera);
