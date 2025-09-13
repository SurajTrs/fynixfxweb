"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  /** 0..255 how close to white to remove (default 20) */
  tolerance?: number;
  /** Optional max width/height to avoid huge canvases */
  maxDim?: number;
};

/**
 * ChromaImage: removes near-white backgrounds in runtime using canvas.
 * Not as perfect as a true transparent PNG/WebP, but works well for UI mocks.
 */
export default function ChromaImage({ src, alt = "", className = "", tolerance = 22, maxDim = 1600 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      // Scale image down to maxDim to avoid perf issues
      const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
      const w = Math.max(1, Math.floor(img.width * scale));
      const h = Math.max(1, Math.floor(img.height * scale));
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, w, h);
      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;
      const t = tolerance;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        // Distance to white
        const dr = 255 - r;
        const dg = 255 - g;
        const db = 255 - b;
        if (dr <= t && dg <= t && db <= t) {
          data[i + 3] = 0; // make transparent
        } else if (dr <= t * 1.6 && dg <= t * 1.6 && db <= t * 1.6) {
          // soften edges for near-white
          data[i + 3] = Math.max(0, a - 120);
        }
      }
      ctx.putImageData(imageData, 0, 0);
    };
  }, [src, tolerance, maxDim]);

  return <canvas ref={canvasRef} aria-label={alt} className={className} />;
}
