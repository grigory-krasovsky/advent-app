import React, { useEffect, useRef } from 'react';

const Confetti = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const confettiCount = 300;
        const confetti = [];

        // Generate confetti particles
        for (let i = 0; i < confettiCount; i++) {
            confetti.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 5 + 5,
                speedX: Math.random() * 2 - 1,
                speedY: Math.random() * 3 + 1,
                color: `hsl(${Math.random() * 360}, 100%, 70%)`,
            });
        }

        let animationFrameId;

        // Draw confetti
        const drawConfetti = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < confetti.length; i++) {
                const particle = confetti[i];

                // Update confetti position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Recycle confetti that goes off-screen
                if (particle.y > canvas.height) {
                    particle.y = -particle.size;
                    particle.x = Math.random() * canvas.width;
                }

                // Draw confetti
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(drawConfetti);
        };

        drawConfetti();

        // Cleanup function
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1000,
            }}
        ></canvas>
    );
};

export default Confetti;