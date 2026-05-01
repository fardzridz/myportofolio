"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useSpring } from "@react-spring/web";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const { theme } = useTheme();

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 60,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let phi = 4.5;
    let width = 0;
    
    // Resize handler
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2 * 0.4, // Aspect ratio 1/.4
      phi: 4.5, 
      theta: -0.8, // Tilt up to move Indonesia to the top
      dark: 1, // Always dark mode as requested
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [0.1, 0.5, 1], 
      glowColor: [1.2, 1.2, 1.2],
      markers: [
        { location: [-7.7577915, 113.0543703], size: 0.20 },
      ],
      scale: 2.5, 
      offset: [0, width * 2 * 0.4 * 0.6], // Push globe down
      onRender: (state) => {
        // Handle Drag & Auto-rotation
        if (!pointerInteracting.current) {
          phi += 0.003; 
        } 
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2 * 0.4;
      },
    });

    setTimeout(() => {
        if (canvasRef.current) {
            canvasRef.current.style.opacity = '1';
        }
    }, 100);

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [theme, r]);

  return (
    <div style={{
        width: '100%',
        margin: 'auto',
        position: 'relative',
      }}
      className="cursor-grab active:cursor-grabbing w-full h-full flex items-end justify-center" // Align bottom
         onPointerDown={(e) => {
            pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
            (e.target as HTMLDivElement).style.cursor = 'grabbing';
          }}
          onPointerUp={(e) => {
            pointerInteracting.current = null;
            (e.target as HTMLDivElement).style.cursor = 'grab';
          }}
          onPointerOut={(e) => {
            pointerInteracting.current = null;
            (e.target as HTMLDivElement).style.cursor = 'grab';
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({
                r: delta / 200,
              });
            }
          }}
          onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta = e.touches[0].clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({
                r: delta / 100,
              });
            }
          }}
    >
        <canvas
            ref={canvasRef}
            style={{ 
                width: '100%', 
                height: '100%', 
                contain: 'layout paint size',
                opacity: 100, 
                transition: 'opacity 1s ease' 
            }}
        />
    </div>
  );
}
