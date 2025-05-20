import './style.css';
import gsap from 'gsap';

const shackle = document.getElementById('lock-shackle');
const lockSvg = document.getElementById('lock-svg');
const lockScreen = document.getElementById('lock-screen');
const tunnel = document.getElementById('tunnel');
const paradise = document.getElementById('paradise');

lockSvg.addEventListener('mouseenter', () => {
  const tl = gsap.timeline();

  // Step 1: Shackle animation
  tl.to(shackle, {
    rotation: -45,
    y: -30,
    transformOrigin: "50% 50%",
    duration: 1.5,
    ease: "power2.inOut"
  });

  // Step 2: Lock fades out
  tl.to(lockSvg, {
    scale: 0.3,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  }, "+=0.3");

  // Step 3: Hide lock, show tunnel
  tl.add(() => {
    lockScreen.style.display = "none";
    tunnel.style.display = "flex";
  });

  // Step 4: Tunnel zoom and fade
  tl.to(tunnel, {
    scale: 1.5,
    opacity: 0,
    duration: 2,
    ease: "power2.inOut",
    delay: 1.2
  });

  // Step 5: Hide tunnel, show paradise
  tl.add(() => {
    tunnel.style.display = "none";
    paradise.style.display = "flex";
  });
});


const grassField = document.getElementById('grass-field');
const grassBack = document.getElementById('grass-field-back');

function generateGrass(container, density) {
  for (let i = 0; i < density; i++) {
    const blade = document.createElement('div');
    blade.classList.add('blade');
    blade.style.height = `${Math.random() * 40 + 40}px`;
    blade.style.backgroundColor = `hsl(${Math.random() * 30 + 100}, 70%, 40%)`;
    blade.style.margin = `0 ${Math.random() * 1}px`;
    blade.style.animationDelay = `${Math.random() * 2}s`;
    container.appendChild(blade);
  }
}

generateGrass(grassField, 600);     // foreground blades
generateGrass(grassBack, 600);      // blurry background




window.addEventListener("DOMContentLoaded", () => {
  generateGrass(); // generates 600 blades
});

const bird = document.getElementById("bird");
bird.addEventListener("click", () => {
  bird.classList.add("bird-fly");
});

