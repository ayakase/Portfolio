<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  // import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
  var loadingManager = new THREE.LoadingManager();
  const loader = new GLTFLoader(loadingManager);
  const textureLoader = new THREE.TextureLoader(loadingManager);
  // @ts-ignore
  import PlanetModel from "../../assets/planet.glb";
  import { TrackballControls } from "three/addons/controls/TrackballControls.js";

  import vueTexture from "../../assets/techLogo/vue.png";
  import tailwindTexture from "../../assets/techLogo/tailwind.png";
  import bootstrapTexture from "../../assets/techLogo/bootstrap.png";
  import svelteTexture from "../../assets/techLogo/svelte.png";
  import threejsTexture from "../../assets/techLogo/three.png";
  import nodejsTexture from "../../assets/techLogo/node.png";
  import flaskTexture from "../../assets/techLogo/flask.png";
  import jsTexture from "../../assets/techLogo/js.png";
  import pythonTexture from "../../assets/techLogo/python.png";
  import htmlTexture from "../../assets/techLogo/html.png";
  import cssTexture from "../../assets/techLogo/css.png";
  import firebaseTexture from "../../assets/techLogo/firebase.png";
  import socketioTexture from "../../assets/techLogo/socketio.png";
  import dockerTexture from "../../assets/techLogo/docker.png";
  import wordpressTexture from "../../assets/techLogo/wordpress.png";
  import ejsTexture from "../../assets/techLogo/ejs.png";
  import mysqlTexture from "../../assets/techLogo/mysql.png";
  import piniaTexture from "../../assets/techLogo/pinia.png";
  import vuetifyTexture from "../../assets/techLogo/vuetify.png";
  import mongoTexture from "../../assets/techLogo/mongo.png";
  import cloudinaryTexture from "../../assets/techLogo/cloudinary.png";
  import bashTexture from "../../assets/techLogo/bash.png";
  import bulmaTexture from "../../assets/techLogo/bulma.png";
  import linuxTexture from "../../assets/techLogo/linux.png";
  import aceternityuiTexture from "../../assets/techLogo/aceternity.png";
  import rubyTexture from "../../assets/techLogo/ruby.png";
  import railsTexture from "../../assets/techLogo/rails.png";
  import viteTexture from "../../assets/techLogo/vite.png";
  import ubuntuTexture from "../../assets/techLogo/ubuntu.png";
  import figmaTexture from "../../assets/techLogo/figma.png";
  import githubTexture from "../../assets/techLogo/github.png";
  import photoshopTexture from "../../assets/techLogo/photoshop.png";
  import supabaseTexture from "../../assets/techLogo/supabase.png";
  import emailjsTexture from "../../assets/techLogo/emailjs.png";
  import ec2Texture from "../../assets/techLogo/ec2.png";
  import nuxtTexture from "../../assets/techLogo/nuxt.png";
  import s3Texture from "../../assets/techLogo/s3.png";
  let loading: boolean = true;
  // @ts-ignore
  onMount(() => {
    const scene = new THREE.Scene();
    scene.background = null;
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    // camera.position.setX(10);
    // camera.position.setY(10);
    camera.position.setZ(12);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#cube") as HTMLCanvasElement,
      alpha: true,
    });

    const controls = new TrackballControls(camera, renderer.domElement);
    // controls.minPolarAngle = Math.PI / 2;
    // controls.maxPolarAngle = Math.PI / 2;
    controls.noZoom = true;

    renderer.setPixelRatio(1);
    let container = document.querySelector(".cube-container");
    renderer.setSize(container.clientWidth, container.clientHeight);
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 400, 500);
    pointLight.position.set(0, 8, 10);
    scene.add(pointLight);
    // const gridHelper = new THREE.GridHelper(200, 50);
    // scene.add(gridHelper);
    let planet: any;
    loader.load(
      PlanetModel,
      function (gltf: any) {
        planet = gltf.scene;
        scene.add(planet);
        planet.scale.set(4, 4, 4);
        // spaceBoi.rotation.y = -0.6
      },
      undefined,
      function (error: Error) {
        console.error(error);
      }
    );
    let techArray: any = [];
    function createLogo(logoPath: string) {
      const techTexture = textureLoader.load(logoPath);
      const tech = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.8),
        new THREE.MeshBasicMaterial({
          map: techTexture,
          transparent: true,
          // alphaTest: 0.5,
        })
      );
      // tech.position.y = 8;
      tech.position.y = Math.floor(Math.random() * 5) - 2;
      scene.add(tech);
      techArray.push(tech);
      return tech;
    }

    createLogo(vueTexture);
    createLogo(svelteTexture);
    createLogo(tailwindTexture);
    createLogo(bootstrapTexture);
    createLogo(jsTexture);
    createLogo(htmlTexture);
    createLogo(cssTexture);
    createLogo(pythonTexture);
    createLogo(flaskTexture);
    createLogo(threejsTexture);
    createLogo(nodejsTexture);
    createLogo(firebaseTexture);
    createLogo(socketioTexture);
    createLogo(dockerTexture);
    createLogo(wordpressTexture);
    createLogo(ejsTexture);
    createLogo(mysqlTexture);
    createLogo(piniaTexture);
    createLogo(vuetifyTexture);
    createLogo(mongoTexture);
    createLogo(cloudinaryTexture);
    createLogo(bashTexture);
    createLogo(bulmaTexture);
    createLogo(linuxTexture);
    createLogo(aceternityuiTexture);
    createLogo(rubyTexture);
    createLogo(railsTexture);
    createLogo(viteTexture);
    createLogo(ubuntuTexture);
    createLogo(figmaTexture);
    createLogo(githubTexture);
    createLogo(photoshopTexture);
    createLogo(supabaseTexture);
    createLogo(emailjsTexture);
    createLogo(ec2Texture);
    createLogo(nuxtTexture);
    createLogo(s3Texture);

    function moveCamera() {
      const topT = document.body.getBoundingClientRect().top;
      //   camera.position.y = topT * -0.0001 + 8;
      //   camera.position.z = topT * 0.02 + 50;
    }
    // window.onscroll = function () {
    //   moveCamera();
    //   const difference =
    //     document.documentElement.scrollHeight - window.innerHeight;
    //   const scrollposition = document.documentElement.scrollTop;
    // };
    loadingManager.onLoad = function () {
      animate();
      loading = false;
    };
    let t = 0;
    function animate() {
      t += 0.003;
      if (techArray) {
        techArray.forEach(function (logo, index) {
          logo.position.x = 7 * Math.cos(t + index * 1.1) + 0;
          logo.position.z = 7 * Math.sin(t + index * 1.1) + 0;
          logo.quaternion.copy(camera.quaternion);
        });
      }
      pointLight.position.x = 7 * Math.cos(t * 1.1) + 0;
      pointLight.position.z = 7 * Math.sin(t * 1.1) + 0;
      if (planet) {
        planet.rotation.y += 0.005;
      }
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
  });
</script>

<!-- <div id="scroll-distance">Distance from Top: 0px</div> -->

<div class="cube-container relative main-box rounded-3xl">
  {#if loading}
    <div class="loader"></div>
  {/if}
  <canvas id="cube" class="absolute"></canvas>
</div>

<style>
  .cube-container {
    width: 30rem;
    height: 30rem;
  }
  #cube {
    /* width: 100rem;
    height: 100rem; */
  }
  /* HTML: <div class="loader"></div> */
  /* HTML: <div class="loader"></div> */
  .loader {
    margin: auto;
    margin-top: 48%;
  }
  .loader {
    width: 50px;
    aspect-ratio: 1;
    display: grid;
    border: 4px solid #0000;
    border-radius: 50%;
    border-color: #ccc #0000;
    animation: l16 1s infinite linear;
  }
  .loader::before,
  .loader::after {
    content: "";
    grid-area: 1/1;
    margin: 2px;
    border: inherit;
    border-radius: 50%;
  }
  .loader::before {
    border-color: #ae33f0 #0000;
    animation: inherit;
    animation-duration: 0.5s;
    animation-direction: reverse;
  }
  .loader::after {
    margin: 8px;
  }
  @keyframes l16 {
    100% {
      transform: rotate(1turn);
    }
  }
</style>
