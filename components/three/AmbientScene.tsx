"use client";

import { useEffect, useRef } from "react";
import type { Color as ThreeColor, WebGLRenderer } from "three";
import styles from "./AmbientScene.module.css";

/**
 * Decorative site-wide WebGL layer.
 *
 * Renders a very low-contrast field of brand-coloured points and wireframe
 * solids that drifts slowly behind the page content. The three.js chunk is
 * imported lazily on the client so it never blocks initial paint, and the
 * layer is aria-hidden with pointer-events disabled. Visitors who prefer
 * reduced motion get a single static frame instead of an animation loop.
 */
export function AmbientScene() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;
    let dispose: (() => void) | undefined;

    void (async () => {
      let THREE: typeof import("three");
      try {
        THREE = await import("three");
      } catch {
        return;
      }
      if (cancelled || !host) return;

      let renderer: WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
      } catch {
        return;
      }

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const finePointer = window.matchMedia("(pointer: fine)").matches;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        0.1,
        80,
      );
      camera.position.set(0, 0, 10);

      const palette = {
        blue: new THREE.Color("#2563eb"),
        cyan: new THREE.Color("#22d3ee"),
      };

      const geometries: Array<() => void> = [];

      const makePointField = (count: number, color: ThreeColor, opacity: number) => {
        const positions = new Float32Array(count * 3);
        for (let index = 0; index < count; index += 1) {
          positions[index * 3] = (Math.random() - 0.5) * 22;
          positions[index * 3 + 1] = (Math.random() - 0.5) * 12;
          positions[index * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({
          color,
          size: 0.06,
          transparent: true,
          opacity,
          sizeAttenuation: true,
          depthWrite: false,
        });
        geometries.push(() => {
          geometry.dispose();
          material.dispose();
        });
        return new THREE.Points(geometry, material);
      };

      const makeRing = (radius: number, color: ThreeColor, opacity: number) => {
        const geometry = new THREE.IcosahedronGeometry(radius, 0);
        const material = new THREE.MeshBasicMaterial({
          color,
          wireframe: true,
          transparent: true,
          opacity,
          depthWrite: false,
        });
        geometries.push(() => {
          geometry.dispose();
          material.dispose();
        });
        return new THREE.Mesh(geometry, material);
      };

      const field = new THREE.Group();
      field.add(makePointField(150, palette.blue, 0.45));
      field.add(makePointField(90, palette.cyan, 0.4));
      scene.add(field);

      const solidA = makeRing(2.2, palette.blue, 0.11);
      solidA.position.set(6.4, 2.6, -2);
      const solidB = makeRing(1.35, palette.cyan, 0.16);
      solidB.position.set(-6.6, -2.4, -3);
      const solidC = makeRing(0.85, palette.cyan, 0.12);
      solidC.position.set(7.4, -3.4, -4);
      scene.add(solidA, solidB, solidC);

      const clock = new THREE.Clock();
      const pointer = { x: 0, y: 0 };
      const cameraTarget = { x: 0, y: 0 };

      const onResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        if (reducedMotion) renderer.render(scene, camera);
      };

      const onPointerMove = (event: PointerEvent) => {
        pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
        pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
      };

      let frameId = 0;

      const renderFrame = () => {
        const time = clock.getElapsedTime();
        field.rotation.y = time * 0.012;
        field.position.y = Math.sin(time * 0.08) * 0.2;
        solidA.rotation.x = time * 0.1;
        solidA.rotation.y = time * 0.14;
        solidB.rotation.x = -time * 0.08;
        solidB.rotation.y = time * 0.11;
        solidC.rotation.y = -time * 0.16;
        cameraTarget.x += (pointer.x * 0.35 - cameraTarget.x) * 0.02;
        cameraTarget.y += (-pointer.y * 0.25 - cameraTarget.y) * 0.02;
        camera.position.x = cameraTarget.x;
        camera.position.y = cameraTarget.y;
        renderer.render(scene, camera);
      };

      const tick = () => {
        frameId = window.requestAnimationFrame(tick);
        renderFrame();
      };

      const start = () => {
        if (!frameId && !document.hidden) {
          frameId = window.requestAnimationFrame(tick);
        }
      };

      const stop = () => {
        if (frameId) {
          window.cancelAnimationFrame(frameId);
          frameId = 0;
        }
      };

      const onVisibilityChange = () => {
        if (document.hidden) stop();
        else start();
      };

      window.addEventListener("resize", onResize);
      document.addEventListener("visibilitychange", onVisibilityChange);

      if (reducedMotion) {
        renderer.render(scene, camera);
      } else {
        if (finePointer) window.addEventListener("pointermove", onPointerMove, { passive: true });
        start();
      }

      dispose = () => {
        stop();
        window.removeEventListener("resize", onResize);
        window.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        for (const disposePart of geometries) disposePart();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    })();

    return () => {
      cancelled = true;
      dispose?.();
    };
  }, []);

  return <div ref={hostRef} className={styles.layer} aria-hidden="true" />;
}
