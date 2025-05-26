<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  // import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
  import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
  var loadingManager = new THREE.LoadingManager();
  const loader = new GLTFLoader(loadingManager);
  const textureLoader = new THREE.TextureLoader(loadingManager);
  import IntersectionObserver from "svelte-intersection-observer";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  let node: HTMLElement;
  // @ts-ignore
  import PlanetModel from "../../assets/planet.glb";
  // @ts-ignore
  import PlaneModel from "../../assets/plane.glb";
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
  const techLogos = [
    vueTexture,
    tailwindTexture,
    bootstrapTexture,
    svelteTexture,
    threejsTexture,
    nodejsTexture,
    flaskTexture,
    jsTexture,
    pythonTexture,
    htmlTexture,
    cssTexture,
    firebaseTexture,
    socketioTexture,
    dockerTexture,
    wordpressTexture,
    ejsTexture,
    mysqlTexture,
    piniaTexture,
    vuetifyTexture,
    mongoTexture,
    cloudinaryTexture,
    bashTexture,
    bulmaTexture,
    linuxTexture,
    aceternityuiTexture,
    rubyTexture,
    railsTexture,
    viteTexture,
    ubuntuTexture,
    figmaTexture,
    githubTexture,
    photoshopTexture,
    supabaseTexture,
    emailjsTexture,
    ec2Texture,
    nuxtTexture,
    s3Texture,
  ];
  let loading: boolean = true;
  // @ts-ignore
  let canvas: HTMLCanvasElement;
  onMount(() => {
    if (window.innerWidth > 768) {
      const scene = new THREE.Scene();
      scene.background = null;
      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
      camera.position.setX(40);
      camera.position.setY(40);
      camera.position.setZ(12);
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas as HTMLCanvasElement,
        alpha: true,
      });

      const controls = new TrackballControls(camera, renderer.domElement);
      // controls.minPolarAngle = Math.PI / 2;
      // controls.maxPolarAngle = Math.PI / 2;
      // controls.noZoom = true;

      renderer.setPixelRatio(1);
      let container: HTMLElement | null =
        document.querySelector(".globe-container");
      if (container) {
        renderer.setSize(container.clientWidth, container.clientHeight);
      } else {
        console.error("Container not found");
      }
      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0xffffff, 400, 500);
      pointLight.position.set(0, 8, 10);
      scene.add(pointLight);
      const gridHelper = new THREE.GridHelper(200, 50);
      scene.add(gridHelper);
      let planet: THREE.Object3D;
      let box: THREE.BoxHelper;

      loader.load(
        PlanetModel,
        function (gltf: GLTF) {
          planet = gltf.scene;
          scene.add(planet);
          planet.scale.set(8, 8, 8);
          box = new THREE.BoxHelper(planet, 0xffff00);
          scene.add(box);
        },
        undefined,
        function (error: any) {
          console.error(error);
        }
      );
      let plane: THREE.Object3D;
      loader.load(
        PlaneModel,
        function (gltf: GLTF) {
          plane = gltf.scene;
          scene.add(plane);
          plane.scale.set(2, 2, 2);
          plane.position.set(0, 0, -10);
          plane.rotation.x = 30;
          box = new THREE.BoxHelper(plane, 0xffff00);
          scene.add(box);
          // plane.rotation.z = Math.PI / 2;
        },
        undefined,
        function (error: any) {
          console.error(error);
        }
      );
      let techArray: THREE.Mesh[] = [];
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

      // techLogos.forEach((element) => {
      //   createLogo(element);
      // });
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
        t += 0.03;
        if (techArray) {
          techArray.forEach(function (logo: THREE.Mesh, index: number) {
            logo.position.x = 7 * Math.cos(t + index * 1.1) + 0;
            logo.position.z = 7 * Math.sin(t + index * 1.1) + 0;
            logo.quaternion.copy(camera.quaternion);
          });
        }
        // if (plane) {
        //   plane.position.x = 4 * Math.cos(t * 1.1) + 4;
        //   plane.position.z = 4 * Math.sin(t * 1.1) + 4;
        //   plane.rotation.y = t * 1.1;
        // }
        // pointLight.position.x = 7 * Math.cos(t * 1.1) + 0;
        // pointLight.position.z = 7 * Math.sin(t * 1.1) + 0;
        // if (planet) {
        //   planet.rotation.y += 0.005;
        // }
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
    }
  });
</script>

<!-- <div id="scroll-distance">Distance from Top: 0px</div> -->

<div class="group globe-container w-screen h-screen relative rounded-3xl">
  {#if loading}
    <div class="loader"></div>
  {/if}
  <canvas bind:this={canvas} id="globe" class="absolute"></canvas>
  <div
    class="flex flex-row justify-center w-full absolute bottom-0 left-0 text-white"
  >
    <h3
      class="opacity-100 group-hover:opacity-0 group-hover:invisible transition-all duration-5000"
    >
      Use mouse to drag
    </h3>
  </div>
</div>

<style>
  .drag-title {
    transition: all 1s linear;
  }
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
