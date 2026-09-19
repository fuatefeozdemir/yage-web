"use client";

import React, { useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Phone, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const AetherHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let isAnimating = false;
        let particles: Particle[] = [];
        const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            size: number;
            color: string;

            constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (this.x > canvas!.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas!.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius + this.size) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x -= forceDirectionX * force * 5;
                        this.y -= forceDirectionY * force * 5;
                    }
                }

                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        function init() {
            particles = [];
            let numberOfParticles = Math.min((canvas!.height * canvas!.width) / 12000, 150);
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 0.4) - 0.2;
                let directionY = (Math.random() * 0.4) - 0.2;
                let color = 'rgba(99, 102, 241, 0.5)';
                particles.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                        + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));

                    if (distance < (canvas!.width / 7) * (canvas!.height / 7)) {
                        opacityValue = 1 - (distance / 20000);

                        let dx_mouse_a = particles[a].x - (mouse.x || 0);
                        let dy_mouse_a = particles[a].y - (mouse.y || 0);
                        let distance_mouse_a = Math.sqrt(dx_mouse_a*dx_mouse_a + dy_mouse_a*dy_mouse_a);

                        if (mouse.x !== null && distance_mouse_a < mouse.radius) {
                            ctx!.strokeStyle = `rgba(165, 180, 252, ${opacityValue})`;
                        } else {
                            ctx!.strokeStyle = `rgba(99, 102, 241, ${opacityValue * 0.3})`;
                        }

                        ctx!.lineWidth = 1;
                        ctx!.beginPath();
                        ctx!.moveTo(particles[a].x, particles[a].y);
                        ctx!.lineTo(particles[b].x, particles[b].y);
                        ctx!.stroke();
                    }
                }
            }
        };

        const animate = () => {
            if (!isAnimating) return;

            ctx!.fillStyle = '#09090b';
            ctx!.fillRect(0, 0, innerWidth, innerHeight);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        // Performans Optimizasyonu: Sadece ekranda görünürken animasyonu çalıştır
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (!isAnimating) {
                            isAnimating = true;
                            init();
                            animate();
                        }
                    } else {
                        isAnimating = false;
                        if (animationFrameId) cancelAnimationFrame(animationFrameId);
                    }
                });
            },
            { threshold: 0 }
        );

        observer.observe(container);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            isAnimating = false;
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, []);

    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15 + 0.2,
                duration: 0.8,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div ref={containerRef} className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-brand-bg border-b border-white/5">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>

            <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pointer-events-none">
                <div className="max-w-4xl pointer-events-auto">
                    <motion.span
                        custom={0} variants={fadeUpVariants} initial="hidden" animate="visible"
                        className="block text-brand-muted uppercase tracking-[0.2em] text-xs md:text-sm font-mono font-bold mb-6"
                    >
                        Gazi Üniversitesi · Teknoloji Fakültesi
                    </motion.span>

                    <motion.h1
                        custom={1} variants={fadeUpVariants} initial="hidden" animate="visible"
                        className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold text-white leading-[1.05] tracking-tighter mb-8"
                    >
                        Yazılım Araştırma <br />
                        ve Geliştirme <br />
                        Topluluğu
                    </motion.h1>

                    <motion.p
                        custom={2} variants={fadeUpVariants} initial="hidden" animate="visible"
                        className="text-lg md:text-xl text-brand-muted/80 mb-12 max-w-2xl leading-relaxed"
                    >
                        Gazi Üniversitesi öğrencileriyle birlikte yazılım ve teknoloji üzerine çalışıyoruz. Birlikte öğreniyor, kodluyor ve projeler geliştiriyoruz.
                    </motion.p>

                    <motion.div
                        custom={3} variants={fadeUpVariants} initial="hidden" animate="visible"
                        className="flex flex-wrap items-center gap-5"
                    >
                        <a href={siteConfig.sosyal.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-black px-8 py-4 rounded-sm font-bold hover:bg-[#20b858] transition-colors shadow-lg group">
                            <Phone size={18} /> WhatsApp Grubu <ArrowUpRight size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </a>

                        <Link href="/katil" className="flex items-center justify-center gap-2 bg-transparent text-white border border-white/20 px-8 py-4 rounded-sm font-semibold hover:border-brand-primary hover:text-brand-primary transition-colors">
                            Aramıza Katıl
                        </Link>
                    </motion.div>
                </div>
            </section>

            <div className="absolute bottom-0 left-0 w-full px-6 pb-8 flex justify-between items-center text-[10px] sm:text-xs font-mono text-brand-muted/40 uppercase tracking-[0.2em] z-20 pointer-events-none">
                <span className="hidden sm:inline-block">Gazi University</span>
                <span>Ankara / TR</span>
            </div>
        </div>
    );
};

export default AetherHero;