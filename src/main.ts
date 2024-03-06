import './app.css'
import App from './App.svelte'
// @ts-ignore
import spaceBoiModel from './assets/space_boi.glb'
// @ts-ignore
// import earthModel from './assets/of_planes_and_satellites.glb'
const app = new App({
  target: document.getElementById('app')!,
})

export default app


import * as THREE from "three";
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// @ts-ignore
import { AsciiEffect } from 'three/addons/effects/AsciiEffect';
// @ts-ignore
import { TrackballControls } from 'three/addons/controls/TrackballControls';
// @ts-ignore
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';


const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader()
textureLoader.crossOrigin = "Anonymous"
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020617)
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.setX(20);
camera.position.setY(10);
camera.position.setZ(20);


const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg") as HTMLCanvasElement,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// let effect
// effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true });
// effect.setSize(window.innerWidth, window.innerHeight);
// effect.domElement.style.color = '#00ff00';
// effect.domElement.style.backgroundColor = 'black';
// document.body.appendChild(effect.domElement);


// Light config

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight);
// const pointLight = new THREE.PointLight(0xffffff, 3000, 2000);
// pointLight.position.set(20, 20, 20);
// scene.add(pointLight);

// Helper config

// const lightHelper = new THREE.PointLightHelper(pointLight)
// scene.add(lightHelper);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper);
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);
// axesHelper.scale.set(10, 10, 10)
// Controll

// const controls = new OrbitControls(camera, effect.domElement);
const controls = new OrbitControls(camera, renderer.domElement);


// Earth Model

let spaceBoi: any
loader.load(spaceBoiModel, function (gltf: any) {
  spaceBoi = gltf.scene
  scene.add(spaceBoi);
  spaceBoi.scale.set(3, 3, 3)

}, undefined, function (error: Error) {
  console.error(error);
});

// Language

// const langTexture = textureLoader.load('../src/assets/vue.png')
// const lang = new THREE.Mesh(
//   new THREE.PlaneGeometry(5, 5),
//   new THREE.MeshStandardMaterial({
//     map: langTexture
//   })
// )
// lang.position.y = 10
// scene.add(lang)
// let earth: any
// loader.load(earthModel, function (gltf: any) {
//   earth = gltf.scene
//   scene.add(earth);
//   earth.scale.set(100, 100, 100)

// }, undefined, function (error: Error) {
//   console.error(error);
// });

//Moon

// const moonTexture = textureLoader.load('../src/assets/vue.png');
// const moon = new THREE.Mesh(
//   new THREE.BoxGeometry(2, 2, 2),
//   new THREE.MeshStandardMaterial({
//     map: moonTexture
//   })
// )
// moon.position.set(20, 10, 0)
// scene.add(moon);

// Earth

// const earthTexture = textureLoader.load('../src/assets/earth-plain.jpg');
// const earth = new THREE.Mesh(
//   new THREE.SphereGeometry(10, 32, 32),
//   new THREE.MeshStandardMaterial({
//     map: earthTexture
//   })
// )
// scene.add(earth);

// Sun 

// const sunTexture = textureLoader.load('../src/assets/sun.jpg');
// const sun = new THREE.Mesh(
//   new THREE.SphereGeometry(30, 32, 32),
//   new THREE.MeshStandardMaterial({
//     map: sunTexture
//   })
// )
// scene.add(sun);
// sun.position.set(-40, 40, -40);

const objects = [];

// use just one sphere for everything
const radius = 1;
const widthSegments = 6;
const heightSegments = 6;
const sphereGeometry = new THREE.SphereGeometry(
  radius, widthSegments, heightSegments);

// const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xFFFF00 });
// const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
// sunMesh.scale.set(5, 5, 5);  // make the sun large
// scene.add(sunMesh);
// objects.push(sunMesh);

//Stars

// function addRandomStar() {
//   const geometry = new THREE.SphereGeometry(0.2, 24, 24)
//   const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
//   const star = new THREE.Mesh(geometry, material)

//   const x = THREE.MathUtils.randFloatSpread(300)
//   const y = THREE.MathUtils.randFloatSpread(300)
//   const z = THREE.MathUtils.randFloatSpread(300)

//   star.position.set(x, y, z)
//   scene.add(star)
// }
// Array(200).fill(undefined).map(() => addRandomStar());

function moveCamera() {
  const topT = document.body.getBoundingClientRect().top
  camera.position.x = topT * 0.005 + 20
  camera.position.y = topT * 0.0005 + 10
  camera.position.z = topT * 0.005 + 20
  spaceBoi.rotation.y = topT * -0.0005
  spaceBoi.position.y = topT * 0.005
  // lang.position.y = topT * 0.005 + 10
}
// document.body.onscroll = moveCamera
//Animate

let t = 0
function animate() {
  requestAnimationFrame(animate);
  render();
  if (touchedBottom) {
    bottomAnimate();
  }
}
function bottomAnimate() {
  if (spaceBoi) {
    spaceBoi.rotation.y += 0.001;
  }
}
let touchedBottom = false;
window.onscroll = function () {
  moveCamera()
  const difference = document.documentElement.scrollHeight - window.innerHeight;
  const scrollposition = document.documentElement.scrollTop;
  if (difference - scrollposition <= 2) {
    touchedBottom = true;
  } else {
    touchedBottom = false;
  }
}
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
function render() {
  // earth.rotation.y += 0.02
  // lang.rotation.y += 0.005
  // t += -0.05
  // lang.position.x = 10 * Math.cos(t) + 0;
  // lang.position.z = 10 * Math.sin(t) + 0;
  // lang.quaternion.copy(camera.quaternion)
  // if (spaceBoi) {
  //   spaceBoi.rotation.y += 0.01;
  // }
  controls.update()
  renderer.render(scene, camera);
}
animate();

