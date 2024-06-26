// @ts-ignore
// import spaceBoiModel from '../../assets/space_boi.glb'
// @ts-ignore

// import vueTexture from '../../assets/techLogo/vue.png'
// import tailwindTexture from '../../assets/techLogo/tailwind.png';
// import bootstrapTexture from '../../assets/techLogo/bootstrap.png';
// import svelteTexture from '../../assets/techLogo/svelte.png';
// import threejsTexture from '../../assets/techLogo/three.png';
// import nodejsTexture from '../../assets/techLogo/node.png';
// import flaskTexture from '../../assets/techLogo/flask.png';
// import jsTexture from '../../assets/techLogo/js.png';
// import pythonTexture from '../../assets/techLogo/python.png';
// import htmlTexture from '../../assets/techLogo/html.png';
// import cssTexture from '../../assets/techLogo/css.png';
// import firebaseTexture from '../../assets/techLogo/firebase.png';
// import socketioTexture from '../../assets/techLogo/socketio.png'
// import dockerTexture from '../../assets/techLogo/docker.png'
// import wordpressTexture from '../../assets/techLogo/wordpress.png'
// import ejsTexture from '../../assets/techLogo/ejs.png'
// import mysqlTexture from '../../assets/techLogo/mysql.png'
// import piniaTexture from '../../assets/techLogo/pinia.png'
// import vuetifyTexture from '../../assets/techLogo/vuetify.png'
// import mongoTexture from '../../assets/techLogo/mongo.png'
// import cloudinaryTexture from '../../assets/techLogo/cloudinary.png'
// import bashTexture from '../../assets/techLogo/bash.png'
// import bulmaTexture from '../../assets/techLogo/bulma.png'
// import linuxTexture from '../../assets/techLogo/linux.png'
// import aceternityuiTexture from '../../assets/techLogo/aceternity.png'
// import rubyTexture from '../../assets/techLogo/ruby.png'
// import railsTexture from '../../assets/techLogo/rails.png'
// import viteTexture from '../../assets/techLogo/vite.png'
// import ubuntuTexture from '../../assets/techLogo/ubuntu.png'
// import figmaTexture from '../../assets/techLogo/figma.png'
// import githubTexture from '../../assets/techLogo/github.png'
// import photoshopTexture from '../../assets/techLogo/photoshop.png'
// import supabaseTexture from '../../assets/techLogo/supabase.png'
// import emailjsTexture from '../../assets/techLogo/emailjs.png'
// import ec2Texture from '../../assets/techLogo/ec2.png'
// import nuxtTexture from '../../assets/techLogo/nuxt.png'
// import s3Texture from '../../assets/techLogo/s3.png'  

// import * as THREE from "three";
// @ts-ignore
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// @ts-ignore
// import { AsciiEffect } from 'three/addons/effects/AsciiEffect';
// @ts-ignore
// import { TrackballControls } from 'three/addons/controls/TrackballControls';
// @ts-ignore
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

// export function initializeScene() {

// const loader = new GLTFLoader();
// const textureLoader = new THREE.TextureLoader()
// textureLoader.crossOrigin = "Anonymous"
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x020617)
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.setX(0);
// camera.position.setY(8);
// camera.position.setZ(16);


// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector("#bg") as HTMLCanvasElement,
// });
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);

// let effect
// effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true });
// effect.setSize(window.innerWidth, window.innerHeight);
// effect.domElement.style.color = '#00ff00';
// effect.domElement.style.backgroundColor = 'black';
// document.body.appendChild(effect.domElement);


// Light config

// const ambientLight = new THREE.AmbientLight(0xffffff)
// scene.add(ambientLight);
// const pointLight = new THREE.PointLight(0xffffff, 300, 200);
// pointLight.position.set(0, 8, 15);
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
// const controls = new OrbitControls(camera, renderer.domElement);


// Earth Model

// let spaceBoi: any
// loader.load(spaceBoiModel, function (gltf: any) {
//   spaceBoi = gltf.scene
//   scene.add(spaceBoi);
//   spaceBoi.scale.set(3, 3, 3)
//   spaceBoi.rotation.y = -0.6

// }, undefined, function (error: Error) {
//   console.error(error);
// });

// tech logo constructor
// function createLogo(logoPath: string) {
//   const techTexture = textureLoader.load(logoPath);
//   const tech = new THREE.Mesh(
//     new THREE.PlaneGeometry(1.2, 1.2),
//     new THREE.MeshBasicMaterial({
//       map: techTexture,
//       transparent: true,
//       // alphaTest: 0.5,
//     })
//   );
//   // tech.position.y = 8;
//   tech.position.y = Math.floor(Math.random() * 7) + 5

//   scene.add(tech);
//   return tech;
// }


// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();
// function onMouseMove(event: any) {
//   mouse.x = -(event.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
// }
// window.addEventListener('mousemove', onMouseMove, false);


// const vueLogo = createLogo(vueTexture);
// const svelteLogo = createLogo(svelteTexture);
// const tailwindLogo = createLogo(tailwindTexture);
// const bootstrapLogo = createLogo(bootstrapTexture)
// const jsLogo = createLogo(jsTexture);
// const htmlLogo = createLogo(htmlTexture)
// const cssLogo = createLogo(cssTexture)
// const pythonLogo = createLogo(pythonTexture)
// const flaskLogo = createLogo(flaskTexture)
// const threeLogo = createLogo(threejsTexture)
// const nodejsLogo = createLogo(nodejsTexture)
// const firebaseLogo = createLogo(firebaseTexture)
// const socketioLogo = createLogo(socketioTexture)
// const dockerLogo = createLogo(dockerTexture)
// const wordpressLogo = createLogo(wordpressTexture)
// const ejsLogo = createLogo(ejsTexture)
// const mysqlLogo = createLogo(mysqlTexture)
// const piniaLogo = createLogo(piniaTexture)
// const vuetifyLogo = createLogo(vuetifyTexture)
// const mongoLogo = createLogo(mongoTexture)
// const cloudinaryLogo = createLogo(cloudinaryTexture)
// const bashLogo = createLogo(bashTexture)
// const bulmaLogo = createLogo(bulmaTexture)
// const linuxLogo = createLogo(linuxTexture)
// const aceternityLogo = createLogo(aceternityuiTexture)
// const rubyLogo = createLogo(rubyTexture)
// const railsLogo = createLogo(railsTexture)
// const viteLogo = createLogo(viteTexture)
// const ubuntuLogo = createLogo(ubuntuTexture)
// const figmaLogo = createLogo(figmaTexture)
// const githubLogo = createLogo(githubTexture)
// const photoshopLogo = createLogo(photoshopTexture)
// const supabaseLogo = createLogo(supabaseTexture)
// const emailjsLogo = createLogo(emailjsTexture)
// const ec2Logo = createLogo(ec2Texture)
// const nuxtLogo = createLogo(nuxtTexture)
// const s3Logo = createLogo(s3Texture)
// const techArray = [
//   vueLogo,
//   svelteLogo,
//   tailwindLogo,
//   bootstrapLogo,
//   jsLogo,
//   htmlLogo,
//   cssLogo,
//   pythonLogo,
//   flaskLogo,
//   threeLogo,
//   nodejsLogo,
//   firebaseLogo,
//   socketioLogo,
//   dockerLogo,
//   wordpressLogo,
//   ejsLogo,
//   mysqlLogo,
//   piniaLogo,
//   vuetifyLogo,
//   mongoLogo,
//   cloudinaryLogo,
//   bashLogo,
//   bulmaLogo,
//   linuxLogo,
//   aceternityLogo,
//   rubyLogo,
//   railsLogo,
//   viteLogo,
//   ubuntuLogo,
//   figmaLogo,
//   githubLogo,
//   photoshopLogo,
//   supabaseLogo,
//   emailjsLogo,
//   ec2Logo,
//   nuxtLogo,
//   s3Logo,
// ]
// function moveCamera() {
//   const topT = document.body.getBoundingClientRect().top

// }
//Animate

// let t = 0
// function animate() {
//   requestAnimationFrame(animate);
//   render();
//   if (touchedBottom) {
//     bottomAnimate();
//   }
// }
// function bottomAnimate() {
  
// }
// let touchedBottom = false;

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }
// function render() {
//   t += 0.003
//   techArray.forEach(function (logo, index) {
//     logo.position.x = 11 * Math.cos(t + index*1.1) + 0;
//     logo.position.z = 11 * Math.sin(t + index*1.1) + 0;
//   });
//   if (spaceBoi) {
//     spaceBoi.rotation.y += 0.001;
//   }
  // raycaster.setFromCamera(mouse, camera);
  // const intersects = raycaster.intersectObjects([spaceBoi]);
  // if (intersects.length) {
  //   const { point } = intersects[0];
  //   pointLight.position.copy(point.setY(0.5));
  //   pointLight.position.copy(point.setX(0.5));
  // }

//   renderer.render(scene, camera);
// }
// animate();
// }