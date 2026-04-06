import { useEffect, useRef } from "react";

interface CanvasNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  delay: number;
}

interface Edge {
  a: number;
  b: number;
}

export function ConstellationGraphic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const nodesRef = useRef<CanvasNode[]>([]);
  const edgesRef = useRef<Edge[]>([]);
  const tRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = 28;
    nodesRef.current = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2.5 + 1,
      delay: i * 0.1,
    }));

    const edges: Edge[] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = nodesRef.current[i].x - nodesRef.current[j].x;
        const dy = nodesRef.current[i].y - nodesRef.current[j].y;
        if (Math.sqrt(dx * dx + dy * dy) < 160) {
          edges.push({ a: i, b: j });
        }
      }
    }
    edgesRef.current = edges;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      tRef.current += 0.008;
      const t = tRef.current;

      for (const node of nodesRef.current) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      }

      for (const { a, b } of edgesRef.current) {
        const na = nodesRef.current[a];
        const nb = nodesRef.current[b];
        const dx = na.x - nb.x;
        const dy = na.y - nb.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const alpha = (1 - dist / 180) * 0.25;
          ctx.beginPath();
          ctx.moveTo(na.x, na.y);
          ctx.lineTo(nb.x, nb.y);
          ctx.strokeStyle = `rgba(39, 183, 176, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      for (const node of nodesRef.current) {
        const pulse = 0.5 + 0.5 * Math.sin(t + node.delay);
        const alpha = 0.35 + 0.65 * pulse;
        const radius = node.r * (0.8 + 0.4 * pulse);

        const grad = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          radius * 4,
        );
        grad.addColorStop(0, `rgba(39, 183, 176, ${alpha * 0.6})`);
        grad.addColorStop(1, "rgba(39, 183, 176, 0)");
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(39, 183, 176, ${alpha})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
      aria-label="Decorative constellation background graphic"
    />
  );
}
