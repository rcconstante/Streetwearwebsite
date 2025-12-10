import { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let rafId: number;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const newIsPointer = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.classList.contains('cursor-pointer');
      
      if (newIsPointer !== isHovering) {
        isHovering = newIsPointer;
        setIsPointer(newIsPointer);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animate = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      
      // Smooth easing with performance optimization
      currentX += dx * 0.15;
      currentY += dy * 0.15;

      // Use transform for better performance
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{
          left: 0,
          top: 0,
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 ease-out ${
            isPointer ? 'w-12 h-12 opacity-50' : 'w-4 h-4'
          }`}
        />
      </div>
      <div
        ref={cursorOutlineRef}
        className="fixed pointer-events-none z-[9998] border border-white/30 rounded-full transition-all duration-300 ease-out will-change-transform"
        style={{
          left: 0,
          top: 0,
          width: isPointer ? '60px' : '30px',
          height: isPointer ? '60px' : '30px',
        }}
      />
    </>
  );
};

export default CustomCursor;
