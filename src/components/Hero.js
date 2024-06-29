import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useSpring, animated } from 'react-spring';

const Hero = () => {
  const canvasRef = useRef(null);
  const torusRef = useRef(null);

  const { opacity } = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({
      color: 0x9c4dff,
      wireframe: true,
      transparent: true,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
    torusRef.current = torus;

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.material.opacity = opacity.get();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [opacity]);

  return (
    <animated.section
      style={{ opacity }}
      className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-purple-600 mb-4">
          Kevin Carrington
        </h1>
        <p className="text-xl md:text-2xl text-purple-400 mb-8">
          Creative Development with AI
        </p>
        <button className="bg-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-400 transition-colors duration-300">
          View My Work
        </button>
      </div>
    </animated.section>
  );
};

export default Hero;
