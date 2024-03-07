import './app.css'
import App from './App.svelte'
// @ts-ignore
import spaceBoiModel from './assets/space_boi.glb'
// @ts-ignore
// import earthModel from './assets/of_planes_and_satellites.glb'

import vueTexture from './assets/langLogo/vue.png'
import tailwindTexture from './assets/langLogo/tailwind.png';
import bootstrapTexture from './assets/langLogo/bootstrap.png';
import svelteTexture from './assets/langLogo/svelte.png';
import threejsTexture from './assets/langLogo/three.png';
import nodejsTexture from './assets/langLogo/node.png';
import flaskTexture from './assets/langLogo/flask.png';
import jsTexture from './assets/langLogo/js.png';
import pythonTexture from './assets/langLogo/python.png';
import htmlTexture from './assets/langLogo/html.png';
import cssTexture from './assets/langLogo/css.png';
import firebaseTexture from './assets/langLogo/firebase.png';
import socketioTexture from './assets/langLogo/socketio.png'
import dockerTexture from './assets/langLogo/docker.png'
import wordpressTexture from './assets/langLogo/wordpress.png'
import ejsTexture from './assets/langLogo/ejs.png'
import mysqlTexture from './assets/langLogo/mysql.png'
import piniaTexture from './assets/langLogo/pinia.png'
import vuetifyTexture from './assets/langLogo/vuetify.png'
import mongoTexture from './assets/langLogo/mongo.png'
import cloudinaryTexture from './assets/langLogo/cloudinary.png'
import bashTexture from './assets/langLogo/bash.png'
import bulmaTexture from './assets/langLogo/bulma.png'
import linuxTexture from './assets/langLogo/linux.png'
import aceternityuiTexture from './assets/langLogo/aceternity.png'
import rubyTexture from './assets/langLogo/ruby.png'
import railsTexture from './assets/langLogo/rails.png'
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

// Language
function createLanguageLogo(logoPath: string) {
  const langTexture = textureLoader.load(logoPath);
  const lang = new THREE.Mesh(
    new THREE.PlaneGeometry(1.2, 1.2),
    new THREE.MeshStandardMaterial({
      map: langTexture,
      transparent: true,
      alphaTest: 0.5,
    })
  );
  lang.position.y = 8;
  scene.add(lang);
  return lang;
}
const vueLogo = createLanguageLogo(vueTexture);
const svelteLogo = createLanguageLogo(svelteTexture);
const tailwindLogo = createLanguageLogo(tailwindTexture);
const bootstrapLogo = createLanguageLogo(bootstrapTexture)
const jsLogo = createLanguageLogo(jsTexture);
const htmlLogo = createLanguageLogo(htmlTexture)
const cssLogo = createLanguageLogo(cssTexture)
const pythonLogo = createLanguageLogo(pythonTexture)
const flaskLogo = createLanguageLogo(flaskTexture)
const threeLogo = createLanguageLogo(threejsTexture)
const nodejsLogo = createLanguageLogo(nodejsTexture)
const firebaseLogo = createLanguageLogo(firebaseTexture)
const socketioLogo = createLanguageLogo(socketioTexture)
const dockerLogo = createLanguageLogo(dockerTexture)
const wordpressLogo = createLanguageLogo(wordpressTexture)
const ejsLogo = createLanguageLogo(ejsTexture)
const mysqlLogo = createLanguageLogo(mysqlTexture)
const piniaLogo = createLanguageLogo(piniaTexture)
const vuetifyLogo = createLanguageLogo(vuetifyTexture)
const mongoLogo = createLanguageLogo(mongoTexture)
const cloudinaryLogo = createLanguageLogo(cloudinaryTexture)
const bashLogo = createLanguageLogo(bashTexture)
const bulmaLogo = createLanguageLogo(bulmaTexture)
const linuxLogo = createLanguageLogo(linuxTexture)
const aceternityLogo = createLanguageLogo(aceternityuiTexture)
const rubyLogo = createLanguageLogo(rubyTexture)
const railsLogo = createLanguageLogo(railsTexture)
const langArray = [
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
  railsLogo
]
function moveCamera() {
  const topT = document.body.getBoundingClientRect().top
  camera.position.y = topT * -0.0002 + 10
  camera.position.z = topT * 0.001 + 20
  spaceBoi.rotation.y += 0.01
  // langArray.forEach(function (logo, index) {
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

  langArray.forEach(function (logo, index) {
    logo.position.x = 12 * Math.cos(t + index * 1.1) + 0;
    logo.position.z = 12 * Math.sin(t + index * 1.1) + 0;
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

