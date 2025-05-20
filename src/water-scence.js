import * as THREE from 'three';
import { Water } from 'three-stdlib';

let scene, camera, renderer, water;

export function initWaterScene() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 2000);
  camera.position.set(0, 50, 100);

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("water-overlay").appendChild(renderer.domElement);

  const geometry = new THREE.PlaneGeometry(1000, 1000);

  water = new Water(geometry, {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: new THREE.TextureLoader().load('https://threejs.org/examples/textures/waternormals.jpg', tex => {
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    }),
    alpha: 0.8,
    sunDirection: new THREE.Vector3(),
    sunColor: 0xffffff,
    waterColor: 0x001e0f,
    distortionScale: 3.7,
    fog: false
  });

  water.rotation.x = -Math.PI / 2;
  scene.add(water);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  water.material.uniforms['time'].value += 1.0 / 60.0;
  renderer.render(scene, camera);
}
