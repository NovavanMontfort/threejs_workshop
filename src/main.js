import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import gsap from 'gsap';



new GLTFLoader().load("/model-tree.glb", (model) => {

// console.log(THREE)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(1024, 1024);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const tree = model.scene;
tree.position.set(0.0, -1.0, 0.0);
tree.scale.set(0.25, 0.25, 0.25);
scene.add(tree);

//add meshes
//const geometry = new THREE.BoxGeometry(1,1,1);
//const material = new THREE.MeshPhysicalMaterial({ color: 0x00ff00, roughness: 0.0, metalness: 0.5});
//const omar = new THREE.Mesh(geometry, material);

//scene.add(omar);

//add light
const light = new THREE.PointLight();
light.intensity = 20.0;
light.position.z = 5;
scene.add(light);

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100.0);
camera.position.z = 5;

renderer.render(scene, camera)

// Every frame
gsap.ticker.add(() => {
 
  // Add very small rotation subject every frame
  tree.rotation.y += 0.01;

 
  // Render scene
  renderer.render(scene, camera);
});

});




// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
