import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app


import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect';
import { TrackballControls } from 'three/addons/controls/TrackballControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';


const loader = new GLTFLoader();

const textureLoader = new THREE.TextureLoader()
textureLoader.crossOrigin = "Anonymous"

const scene = new THREE.Scene();
scene.background = textureLoader.load('../assets/bg.png')

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.setZ(30);
camera.position.setX(0);
camera.position.setY(10);


const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
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
const pointLight = new THREE.PointLight(0xffffff, 3000, 2000);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

// Helper config

// const lightHelper = new THREE.PointLightHelper(pointLight)
// scene.add(lightHelper);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper);

// Controll

// const controls = new OrbitControls(camera, effect.domElement);
const controls = new OrbitControls(camera, renderer.domElement);


// Earth Model

let earthModel
loader.load('../src/assets/miku_amongus.glb', function (gltf) {
  earthModel = gltf.scene
  scene.add(earthModel);
  earthModel.scale.set(1, 1, 1)

}, undefined, function (error) {
  console.error(error);
});


//Moon

const moonTexture = textureLoader.load('../src/assets/moon.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture
  })
)
moon.position.set(20, 0, 0)
scene.add(moon);

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

const sunTexture = textureLoader.load('../src/assets/sun.jpg');
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(30, 32, 32),
  new THREE.MeshStandardMaterial({
    map: sunTexture
  })
)
scene.add(sun);
sun.position.set(-40, 40, -40);

//Stars

function addRandomStar() {
  const geometry = new THREE.SphereGeometry(0.3, 24, 24)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const star = new THREE.Mesh(geometry, material)

  const x = THREE.MathUtils.randFloatSpread(300)
  const y = THREE.MathUtils.randFloatSpread(300)
  const z = THREE.MathUtils.randFloatSpread(300)

  star.position.set(x, y, z)
  scene.add(star)
}
Array(200).fill().forEach(addRandomStar)

function moveCamera() {
  const t = document.body.getBoundingClientRect().top
  moon.rotation.x += 0.1
  camera.position.z = t * -0.01


}
document.body.onscroll = moveCamera
//Animate

let t = 0
function animate() {
  requestAnimationFrame(animate);
  render();

}
function render() {
  // earth.rotation.y += 0.02
  moon.rotation.y += 0.005
  t += -0.005
  moon.position.x = 20 * Math.cos(t) + 0;
  moon.position.z = 20 * Math.sin(t) + 0;
  // if (earthModel) {
  //   earthModel.rotation.y += 0.01;
  // }
  controls.update()
  renderer.render(scene, camera);
}
animate();

