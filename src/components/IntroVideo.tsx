"use client";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for the trailing cursor
  const springX = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - 50); // Offset to center a ~100px wide pill
      mouseY.set(e.clientY - rect.top - 20);  // Offset to center a ~40px tall pill
    }
  };

  const handleClick = async () => {
    if (videoRef.current) {
      const vid = videoRef.current;
      vid.currentTime = 0;
      vid.muted = false;
      vid.playbackRate = 1.0; // Play at normal 1x speed in fullscreen
      
      try {
        if (vid.requestFullscreen) {
          await vid.requestFullscreen();
        } else if ((vid as any).webkitRequestFullscreen) {
          await (vid as any).webkitRequestFullscreen();
        }
        vid.play();
      } catch (err) {
        console.error("Error attempting to enable fullscreen:", err);
      }
    }
  };

  // Re-mute when exiting fullscreen so the inline trailer is silent again
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; // Initial inline speed is 2x
    }
    
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.playbackRate = 2.0; // Return to 2x speed inline
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <section className="section-pad intro-video-section">
      <motion.div 
        ref={containerRef}
        className="intro-video-wrapper"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        <video 
          ref={videoRef}
          src="/assets/intro.webm" 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="intro-video-element"
        />

        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="custom-video-cursor"
              style={{ x: springX, y: springY }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              Play Intro
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
