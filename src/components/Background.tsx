"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

class Plane {
  geometry: THREE.PlaneGeometry;
  material: THREE.ShaderMaterial;
  mesh: THREE.Mesh;

  constructor(color: string) {
    this.geometry = new THREE.PlaneGeometry(10, 10, 128, 128);
    this.material = new THREE.ShaderMaterial({
      wireframe: true,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) },
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;
          
          float noise = sin(pos.x * 2.0 + uTime) * 0.2 + 
                        cos(pos.y * 2.0 + uTime) * 0.2;
                        
          pos.z += noise;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying vec2 vUv;
        void main() {
          float dist = distance(vUv, vec2(0.5));
          float alpha = smoothstep(0.5, 0.1, dist) * 0.5;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = -Math.PI / 2.2;
    this.mesh.position.y = -2;
  }

  update(time: number) {
    this.material.uniforms.uTime.value = time;
  }

  updateColor(color: string) {
    this.material.uniforms.uColor.value = new THREE.Color(color);
  }
}

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<Plane | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    camera.position.y = 1;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    const mountNode = containerRef.current;
    mountNode.appendChild(renderer.domElement);

    // Initial color based on theme: black mountain for light, white for dark
    // Use theme from ref to avoid triggering effect on theme change
    const wireColor = planeRef.current?.material.uniforms.uColor.value.getHexString() || "18181b";
    const plane = new Plane("#" + wireColor);
    planeRef.current = plane;
    scene.add(plane.mesh);

    const clock = new THREE.Clock();

    let animationFrameId: number;
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      plane.update(elapsedTime);
      
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountNode && renderer.domElement) {
        if (mountNode.contains(renderer.domElement)) {
          mountNode.removeChild(renderer.domElement);
        }
      }
      plane.geometry.dispose();
      plane.material.dispose();
      renderer.dispose();
    };
  }, []);

  // Update color when theme changes
  useEffect(() => {
    if (planeRef.current) {
      planeRef.current.updateColor(resolvedTheme === "dark" ? "#f4f4f5" : "#18181b");
    }
  }, [resolvedTheme]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-40 transition-opacity duration-300"
      style={{ background: "transparent" }}
    />
  );
}
