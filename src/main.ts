import './app.css'
import App from './App.svelte'
// @ts-ignore
import spaceBoiModel from './assets/space_boi.glb'
// @ts-ignore
// import earthModel from './assets/of_planes_and_satellites.glb'

import vueTexture from './assets/techLogo/vue.png'
import tailwindTexture from './assets/techLogo/tailwind.png';
import bootstrapTexture from './assets/techLogo/bootstrap.png';
import svelteTexture from './assets/techLogo/svelte.png';
import threejsTexture from './assets/techLogo/three.png';
import nodejsTexture from './assets/techLogo/node.png';
import flaskTexture from './assets/techLogo/flask.png';
import jsTexture from './assets/techLogo/js.png';
import pythonTexture from './assets/techLogo/python.png';
import htmlTexture from './assets/techLogo/html.png';
import cssTexture from './assets/techLogo/css.png';
import firebaseTexture from './assets/techLogo/firebase.png';
import socketioTexture from './assets/techLogo/socketio.png'
import dockerTexture from './assets/techLogo/docker.png'
import wordpressTexture from './assets/techLogo/wordpress.png'
import ejsTexture from './assets/techLogo/ejs.png'
import mysqlTexture from './assets/techLogo/mysql.png'
import piniaTexture from './assets/techLogo/pinia.png'
import vuetifyTexture from './assets/techLogo/vuetify.png'
import mongoTexture from './assets/techLogo/mongo.png'
import cloudinaryTexture from './assets/techLogo/cloudinary.png'
import bashTexture from './assets/techLogo/bash.png'
import bulmaTexture from './assets/techLogo/bulma.png'
import linuxTexture from './assets/techLogo/linux.png'
import aceternityuiTexture from './assets/techLogo/aceternity.png'
import rubyTexture from './assets/techLogo/ruby.png'
import railsTexture from './assets/techLogo/rails.png'
import viteTexture from './assets/techLogo/vite.png'
import ubuntuTexture from './assets/techLogo/ubuntu.png'
import figmaTexture from './assets/techLogo/figma.png'
import githubTexture from './assets/techLogo/github.png'
import photoshopTexture from './assets/techLogo/photoshop.png'
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
import { element } from 'three/examples/jsm/nodes/Nodes.js';

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
camera.position.setX(0);
camera.position.setY(80);
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
const pointLight = new THREE.PointLight(0xffffff, 500, 200);
pointLight.position.set(0, 0, 15);
scene.add(pointLight);

// Helper config

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper);
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);
// axesHelper.scale.set(10, 10, 10)
// Controll

// const controls = new OrbitControls(camera, effect.domElement);
// const controls = new OrbitControls(camera, renderer.domElement);


// Earth Model

let spaceBoi: any
loader.load(spaceBoiModel, function (gltf: any) {
  spaceBoi = gltf.scene
  scene.add(spaceBoi);
  spaceBoi.scale.set(3, 3, 3)

}, undefined, function (error: Error) {
  console.error(error);
});

// techuage
function createtechuageLogo(logoPath: string) {
  const techTexture = textureLoader.load(logoPath);
  const tech = new THREE.Mesh(
    new THREE.PlaneGeometry(1.2, 1.2),
    new THREE.MeshStandardMaterial({
      map: techTexture,
      transparent: true,
      alphaTest: 0.5,
    })
  );
  // tech.position.y = 8;
  tech.position.y = Math.floor(Math.random() * 7) + 5

  scene.add(tech);
  return tech;
}
const vueLogo = createtechuageLogo(vueTexture);
const svelteLogo = createtechuageLogo(svelteTexture);
const tailwindLogo = createtechuageLogo(tailwindTexture);
const bootstrapLogo = createtechuageLogo(bootstrapTexture)
const jsLogo = createtechuageLogo(jsTexture);
const htmlLogo = createtechuageLogo(htmlTexture)
const cssLogo = createtechuageLogo(cssTexture)
const pythonLogo = createtechuageLogo(pythonTexture)
const flaskLogo = createtechuageLogo(flaskTexture)
const threeLogo = createtechuageLogo(threejsTexture)
const nodejsLogo = createtechuageLogo(nodejsTexture)
const firebaseLogo = createtechuageLogo(firebaseTexture)
const socketioLogo = createtechuageLogo(socketioTexture)
const dockerLogo = createtechuageLogo(dockerTexture)
const wordpressLogo = createtechuageLogo(wordpressTexture)
const ejsLogo = createtechuageLogo(ejsTexture)
const mysqlLogo = createtechuageLogo(mysqlTexture)
const piniaLogo = createtechuageLogo(piniaTexture)
const vuetifyLogo = createtechuageLogo(vuetifyTexture)
const mongoLogo = createtechuageLogo(mongoTexture)
const cloudinaryLogo = createtechuageLogo(cloudinaryTexture)
const bashLogo = createtechuageLogo(bashTexture)
const bulmaLogo = createtechuageLogo(bulmaTexture)
const linuxLogo = createtechuageLogo(linuxTexture)
const aceternityLogo = createtechuageLogo(aceternityuiTexture)
const rubyLogo = createtechuageLogo(rubyTexture)
const railsLogo = createtechuageLogo(railsTexture)
const viteLogo = createtechuageLogo(viteTexture)
const ubuntuLogo = createtechuageLogo(ubuntuTexture)
const figmaLogo = createtechuageLogo(figmaTexture)
const githubLogo = createtechuageLogo(githubTexture)
const photoshopLogo = createtechuageLogo(photoshopTexture)
const techArray = [
  vueLogo,
  svelteLogo,
  tailwindLogo,
  bootstrapLogo,
  jsLogo,
  htmlLogo,
  cssLogo,
  pythonLogo,
  flaskLogo,
  threeLogo,
  nodejsLogo,
  firebaseLogo,
  socketioLogo,
  dockerLogo,
  wordpressLogo,
  ejsLogo,
  mysqlLogo,
  piniaLogo,
  vuetifyLogo,
  mongoLogo,
  cloudinaryLogo,
  bashLogo,
  bulmaLogo,
  linuxLogo,
  aceternityLogo,
  rubyLogo,
  railsLogo,
  viteLogo,
  ubuntuLogo,
  figmaLogo,
  githubLogo,
  photoshopLogo
]
function moveCamera() {
  const topT = document.body.getBoundingClientRect().top
  camera.position.y = topT * -0.0001 + 8
  camera.position.z = topT * 0.001 + 20
  spaceBoi.rotation.y += 0.01
  // techArray.forEach(function (logo, index) {
  //   logo.position.y = topT * 0.0035 + 10
  // })
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
  t += -0.003
  // vueLogo.position.x = 10 * Math.cos(t) + 0;
  // vueLogo.position.z = 10 * Math.sin(t) + 0;
  // vueLogo.quaternion.copy(camera.quaternion)

  techArray.forEach(function (logo, index) {
    logo.position.x = 10 * Math.cos(t + index * 1.1) + 0;
    logo.position.z = 10 * Math.sin(t + index * 1.1) + 0;
    logo.quaternion.copy(camera.quaternion)
    // if (touchedBottom) {
    //   logo.visible = false
    // } else {
    //   logo.visible = true
    // }
  });


  renderer.render(scene, camera);
}
animate();

