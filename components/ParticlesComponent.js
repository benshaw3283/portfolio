import { useEffect, useState, useCallback, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { createNoise3D } from "simplex-noise";

let noiseZ = 0;
let size = 15; // Smaller size for more dense field
let columns;
let rows;
let field;
let noise;
let animationFrameId;

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
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
        let angle = noise(x / 20, y / 20, noiseZ) * Math.PI * 2; // Increased frequency
        let length = noise(x / 40 + 40000, y / 40 + 40000, noiseZ);
        fieldRef.current[x][y][0] = angle;
        fieldRef.current[x][y][1] = Math.abs(length); // Ensure positive length
      }
    }
  }, []);

  const drawField = useCallback((ctx, width, height) => {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)"; // Increased opacity
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
        ctx.lineTo(0, sizeRef.current * length * 0.75); // Scale down the line length
        ctx.stroke();
        ctx.restore();
      }
    }
  }, []);

  const animate = useCallback(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false }); // Disable alpha for better performance
    
    calculateField();
    drawField(ctx, canvas.width, canvas.height);
    noiseZ += 0.002; // Slower animation
    
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
    
    const initEngine = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadSlim(engine);
          console.log("Particles engine initialized");
        });
        setInit(true);
      } catch (error) {
        console.error("Error initializing particles:", error);
      }
    };
    initEngine();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [handleResize, updateFieldRef, updateSizeRef]);

  useEffect(() => {
    if (init && dimensions.width > 0 && dimensions.height > 0) {
      animate();
      updateFieldRef();
    }
  }, [init, dimensions, animate, updateFieldRef]);

  const particlesLoaded = useCallback(async (container) => {
    if (container) {
      console.log("Particles container loaded");
      
      // Update particle velocities based on noise field
      const updateParticles = () => {
        if (!container.particles) return;
        
        const particles = container.particles.filter(() => true);
        if (!particles.length) return;
        
        particles.forEach(p => {
          const pos = p.getPosition();
          const px = Math.max(Math.floor(pos.x / sizeRef.current), 0);
          const py = Math.max(Math.floor(pos.y / sizeRef.current), 0);

          const currentField = fieldRef.current;
          if (currentField && currentField[px] && currentField[px][py]) {
            const angle = currentField[px][py][0];
            const length = currentField[px][py][1];
            
            // Convert angle to velocity components
            const speed = p.options.move.speed;
            const vx = Math.cos(angle) * length * speed;
            const vy = Math.sin(angle) * length * speed;
            
            p.velocity.x = vx;
            p.velocity.y = vy;
          }
        });
      };

      // Start update loop
      let animationFrame;
      const update = () => {
        updateParticles();
        animationFrame = requestAnimationFrame(update);
      };
      update();

      // Cleanup animation frame on unmount
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, []);

  const options = {
    background: {
      color: {
        value: "transparent"
      }
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#640be0'
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0
        }
      },
      opacity: {
        value: 1
      },
      size: {
        value: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outMode: "out",
        bounce: false,
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        resize: true
      }
    },
    detectRetina: true,
    pauseOnBlur: true
  };

  return (
    <div className="relative w-full h-screen bg-black">
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            pointerEvents: 'none'
          }}
          particlesLoaded={particlesLoaded}
        />
      )}
      <canvas 
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0.5
        }}
      />
    </div>
  );
};

export default ParticlesComponent;