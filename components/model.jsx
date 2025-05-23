// components/model.js
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
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
gsap.registerPlugin(ScrollTrigger);

const FOV = 39.6;
const NEAR = 0.1;
const FAR = 1000;
const BLOOM_PARAMS = {
  resolution:
    typeof window !== "undefined"
      ? new THREE.Vector2(window.innerWidth, window.innerHeight)
      : new THREE.Vector2(1, 1),
  strength: 0.05,
  radius: 0.2,
  threshold: 0.4,
};

const SCALE_FACTOR =
  typeof window !== "undefined" && window.innerWidth < 768 ? 0.03 : 0.06;
const Y_POSITION =
  typeof window !== "undefined" && window.innerWidth < 768 ? -2 : -4.25;

const FILM_PARAMS = {
  noiseIntensity: 0.35,
  scanlinesIntensity: 0.025,
  scanlinesCount: 648,
  grayscale: false,
};

export default function Model({ onModelLoaded = () => {} }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log("Model mounted");

    // Set up Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 1.5, 8);

    // Set up Camera
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(FOV, aspect, NEAR, FAR);
    camera.position.set(0, 0, 3);

    // Set up Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;

    // Post Processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      BLOOM_PARAMS.resolution,
      BLOOM_PARAMS.strength,
      BLOOM_PARAMS.radius,
      BLOOM_PARAMS.threshold
    );
    composer.addPass(bloomPass);
    composer.addPass(
      new FilmPass(
        FILM_PARAMS.noiseIntensity,
        FILM_PARAMS.scanlinesIntensity,
        FILM_PARAMS.scanlinesCount,
        FILM_PARAMS.grayscale
      )
    );

    // Load Model
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    loader.setDRACOLoader(dracoLoader);
    let carModel, mixer;
    loader.load(
      "/assets/Model.glb",
      (gltf) => {
        carModel = gltf.scene;
        carModel.position.set(0.1, Y_POSITION, 0);
        carModel.scale.set(SCALE_FACTOR, SCALE_FACTOR, SCALE_FACTOR);
        scene.add(carModel);

        carModel.traverse((child) => {
          if (child.isMesh) {
            child.material.emissive = new THREE.Color(0xffffff);
            child.material.emissiveIntensity = 6;
          }
        });

        mixer = new THREE.AnimationMixer(carModel);
        const animationClip = THREE.AnimationClip.findByName(
          gltf.animations,
          "Armature|mixamo.com|Layer0"
        );
        if (animationClip) {
          const action = mixer.clipAction(animationClip);
          action.play();
        }

        onModelLoaded();
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    // Add Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 15);
    scene.add(ambientLight);

    const greenLight = new THREE.DirectionalLight(0x2cc295, 5);
    greenLight.position.set(0, 6, 6);
    greenLight.castShadow = true;
    scene.add(greenLight);

    const backLight = new THREE.DirectionalLight(0x2cc295, 10);
    backLight.position.set(-5, 2, -5);
    backLight.castShadow = true;
    scene.add(backLight);

    const pointLight = new THREE.PointLight(0x2cc295, 10);
    pointLight.position.set(0, -1, -1);
    pointLight.castShadow = true;
    scene.add(pointLight);

    const frontLight = new THREE.PointLight(0x2cc295, 20);
    frontLight.position.set(0, 0, 2);
    frontLight.castShadow = true;
    scene.add(frontLight);

    // Set up Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = false;
    controls.enableZoom = false;
    controls.enableRotate = false;

    // Mouse movement
    let mouseX = 0,
      mouseY = 0,
      targetX = 0,
      targetY = 0;
    const mouseMoveHandler = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
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

    // Scroll-driven animations
    let lastScrollTime = 0;
    const stopElement = document.querySelector(".stop");
    const scrollHandler = () => {
      const now = Date.now();
      if (now - lastScrollTime > 16) {
        lastScrollTime = now;
        const scrollPosition = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const stopElementPosition =
          stopElement.getBoundingClientRect().top + window.scrollY;
        const scrollPercentage = scrollPosition / maxScroll;

        if (carModel && scrollPosition < stopElementPosition) {
          const modelRotation = scrollPercentage * 10;
          gsap.to(carModel.rotation, {
            y: modelRotation,
            duration: 0.5,
            ease: "power2.out",
          });

          const cameraZPosition = 3 + scrollPercentage * 1.4;
          camera.position.z = cameraZPosition;

          const cameraXPosition = scrollPercentage * 2;
          const cameraYPosition = -scrollPercentage * 2;
          gsap.to(camera.position, {
            x: cameraXPosition,
            y: cameraYPosition,
            duration: 0.5,
            ease: "power2.out",
          });

          const lightIntensity = 10 + scrollPercentage * 10;
          greenLight.intensity = lightIntensity;
          backLight.intensity = lightIntensity;

          const modelScale = SCALE_FACTOR + scrollPercentage * 0.1;
          carModel.scale.set(modelScale, modelScale, modelScale);

          bloomPass.strength = 0.05 + scrollPercentage * 0.5;
        }
      }
    };
    window.addEventListener("scroll", scrollHandler);

    // Cleanup on unmount
    return () => {
      console.log("Model component unmounted");

      // Remove event listeners
      document.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("scroll", scrollHandler);

      // Cancel animation loop
      cancelAnimationFrame(animationFrameId);

      // Dispose of Three.js objects
      composer.dispose();
      renderer.dispose();
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (child.material.isMaterial) {
            child.material.dispose();
          }
        }
      });
      // Clear scene objects
      scene.clear();
    };
  }, [onModelLoaded]);

  return (
    <div>
      <canvas ref={canvasRef} id="canvas" />
    </div>
  );
}
