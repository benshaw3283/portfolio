import React, { useEffect } from 'react';
import Particles from 'react-tsparticles';
import Stats from 'stats.js'; // Ensure you have stats.js installed or included

const ParticlesEffect = () => {
  useEffect(() => {
    const stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);

    const countParticles = document.querySelector('.js-count-particles');

    const update = () => {
      stats.begin();
      stats.end();
      if (tsParticles.domItem(0).particles.array) {
        countParticles.innerText = tsParticles.domItem(0).particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

    return () => {
      document.body.removeChild(stats.domElement);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-400">
      <Particles
        id="tsparticles"
        options={{
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: { enable: false, mode: 'repulse' },
              onHover: { enable: false, mode: 'repulse' },
              resize: true,
            },
            modes: {
              bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40, speed: 3 },
              connect: { distance: 80, lineLinked: { opacity: 0.5 }, radius: 60 },
              grab: { distance: 400, lineLinked: { opacity: 1 } },
              push: { quantity: 4 },
              remove: { quantity: 2 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: '#ffffff' },
            lineLinked: { blink: false, color: '#000', consent: false, distance: 150, enable: false, opacity: 0, width: 0 },
            move: {
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
              bounce: false,
              direction: 'bottom',
              enable: true,
              outMode: 'out',
              random: true,
              speed: 30,
              straight: true,
            },
            number: { density: { enable: true, area: 800 }, value: 200 },
            opacity: { random: false, value: 0.5 },
            shape: { type: 'circle' },
            size: { random: false, value: 5 },
          },
        }}
      />
      <div className="count-particles absolute top-12 left-0 bg-blue-900 text-green-300 text-sm p-2 rounded-lg">
        <span className="js-count-particles">--</span> particles
      </div>
    </div>
  );
};

export default ParticlesEffect;
