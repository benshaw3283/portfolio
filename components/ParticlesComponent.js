import { useEffect, useState, useCallback, useRef } from "react";
import { createNoise3D } from "simplex-noise";

let noiseZ = 0;
let size = 15; 
let columns;
let rows;
let field;
let noise;
let animationFrameId;

const ParticlesComponent = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const canvasRef = useRef(null);
  const fieldRef = useRef(field);
  const sizeRef = useRef(size);

  const initField = useCallback((width, height) => {
    columns = Math.floor(width / sizeRef.current) + 1;
    rows = Math.floor(height / sizeRef.current) + 1;
    field = new Array(columns);
    for (let x = 0; x < columns; x++) {
      field[x] = new Array(rows);
      for (let y = 0; y < rows; y++) {
        field[x][y] = [0, 0];
      }
    }
    fieldRef.current = field;
  }, []);

  const calculateField = useCallback(() => {
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        let angle = noise(x / 20, y / 20, noiseZ) * Math.PI * 2; 
        let length = noise(x / 40 + 40000, y / 40 + 40000, noiseZ);
        fieldRef.current[x][y][0] = angle;
        fieldRef.current[x][y][1] = Math.abs(length);
      }
    }
  }, []);

  const drawField = useCallback((ctx, width, height) => {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.50)"; 
    ctx.lineWidth = 1;
    
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        let angle = fieldRef.current[x][y][0];
        let length = fieldRef.current[x][y][1];
        ctx.save();
        ctx.translate(x * sizeRef.current, y * sizeRef.current);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, sizeRef.current * length * 0.75); 
        ctx.stroke();
        ctx.restore();
      }
    }
  }, []);

  const animate = useCallback(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false }); 
    
    calculateField();
    drawField(ctx, canvas.width, canvas.height);
    noiseZ += 0.002; 
    
    animationFrameId = requestAnimationFrame(animate);
  }, [calculateField, drawField]);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setDimensions({ width, height });
    
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const scale = window.devicePixelRatio || 1;
      canvas.width = width * scale;
      canvas.height = height * scale;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      const ctx = canvas.getContext("2d", { alpha: false });
      ctx.scale(scale, scale);
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);
      
      initField(width, height);
    }
  }, [initField]);

  const updateFieldRef = useCallback(() => {
    fieldRef.current = field;
  }, []);

  const updateSizeRef = useCallback(() => {
    sizeRef.current = size;
  }, []);

  useEffect(() => {
    noise = createNoise3D();
    handleResize();
    window.addEventListener('resize', handleResize);
    updateFieldRef();
    updateSizeRef();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [handleResize, updateFieldRef, updateSizeRef, animate]);





  return (
    <div className="relative w-full h-screen bg-black">
      <canvas 
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.5
        }}
      />
    </div>
  );
};

export default ParticlesComponent;