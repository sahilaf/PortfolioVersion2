"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger with gsap
gsap.registerPlugin(ScrollTrigger);
export default function Model({ onModelLoaded }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 1.5, 8);

    const fov = 39.6;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 3);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.05,
      0.2,
      0.4
    );
    composer.addPass(bloomPass);

    const filmPass = new FilmPass(0.35, 0.025, 648, false);
    composer.addPass(filmPass);

    const loader = new GLTFLoader();
    let carModel, mixer;
    loader.load("/assets/Portmodelcyber.glb", (gltf) => {
      carModel = gltf.scene;

      const scaleFactor = window.innerWidth < 768 ? 0.03 : 0.06;
      const yPos = window.innerWidth < 768 ? -2 : -4.25;

      carModel.position.set(0.09, yPos, 0);
      carModel.scale.set(scaleFactor, scaleFactor, scaleFactor);
      scene.add(carModel);

      carModel.traverse((child) => {
        if (child.isMesh) {
          child.material.emissive = new THREE.Color(0x00ff00);
          child.material.emissiveIntensity = 1;
        }
      });

      mixer = new THREE.AnimationMixer(carModel);
      const animationClip = THREE.AnimationClip.findByName(
        gltf.animations,
        "Armature|mixamo.com|Layer0"
      );
      const action = mixer.clipAction(animationClip);
      action.play();

      // Notify that model has finished loading
      onModelLoaded();
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 10);
    scene.add(ambientLight);

    const greenLight = new THREE.DirectionalLight(0xdafec4, 5);
    greenLight.position.set(0, 6, 6);
    greenLight.castShadow = true;
    scene.add(greenLight);

    const backLight = new THREE.DirectionalLight(0x8ab86e, 10);
    backLight.position.set(-5, 2, -5);
    backLight.castShadow = true;
    scene.add(backLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = false;
    controls.enableZoom = false;
    controls.enableRotate = false;

    let mouseX = 0,
      mouseY = 0,
      targetX = 0,
      targetY = 0;
    document.addEventListener("mousemove", (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    });

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);

      targetX = mouseX * 2;
      targetY = mouseY * 2;

      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      if (carModel) camera.lookAt(carModel.position);

      controls.update();
      composer.render();
    }
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);

      if (carModel) {
        const scaleFactor = window.innerWidth < 768 ? 0.03 : 0.06;
        const yPos = window.innerWidth < 768 ? -2 : -4.25;
        carModel.scale.set(scaleFactor, scaleFactor, scaleFactor);
        carModel.position.y = yPos;
      }
    });

    let lastScrollTime = 0;
const stopElement = document.querySelector('.stop'); // Target .stop div

window.addEventListener("scroll", () => {
  const now = Date.now();
  if (now - lastScrollTime > 16) { // Throttle to 60 FPS (1000 ms / 60 frames)
    lastScrollTime = now;

    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const stopElementPosition = stopElement.getBoundingClientRect().top + window.scrollY;
    const scrollPercentage = scrollPosition / maxScroll;

    if (carModel) {
      // Check if we've reached the .stop div
      if (scrollPosition < stopElementPosition) {
        const modelRotation = scrollPercentage * 10;

        // Rotate model smoothly
        gsap.to(carModel.rotation, {
          y: modelRotation,
          duration: 0.5,
          ease: "power2.out"
        });

        // Zoom the camera on scroll
        const cameraZPosition = 3 + scrollPercentage * 1.4; // Zoom out by 4 units at max scroll
        camera.position.z = cameraZPosition;
      } else {
        // Stop rotation and zoom when passing the .stop div
        gsap.to(carModel.rotation, {
          y: carModel.rotation.y, // Keep current rotation
          duration: 0, // No animation
        });

        // Keep the camera at the same zoom level when passing the .stop div
        camera.position.z = camera.position.z; // Maintain current zoom level
      }
    }
  }
});


    return () => {
      renderer.dispose();
    };
  }, [onModelLoaded]);

  return (
    <div>
      <canvas ref={canvasRef} id="canvas" />
    </div>
  );
}
