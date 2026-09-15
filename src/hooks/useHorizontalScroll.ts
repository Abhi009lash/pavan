import { useState, useEffect, useRef, useCallback } from 'react';

interface UseHorizontalScrollProps {
  totalItems: number;
}

export function useHorizontalScroll({ totalItems }: UseHorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const calculateProgress = useCallback(() => {
    if (!containerRef.current || !trackRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScroll = containerRef.current.offsetHeight - windowHeight;

    if (totalScroll <= 0) {
      setScrollProgress(0);
      setTranslateX(0);
      setActiveIndex(0);
      return;
    }

    const currentScroll = -containerRect.top;
    const rawProgress = currentScroll / totalScroll;
    const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

    const trackWidth = trackRef.current.scrollWidth;
    const containerWidth = containerRef.current.clientWidth;
    const maxScroll = Math.max(trackWidth - containerWidth, 0);

    setScrollProgress(clampedProgress);
    setTranslateX(-clampedProgress * maxScroll);

    const newIndex = Math.min(
      Math.floor(clampedProgress * totalItems),
      totalItems - 1
    );
    setActiveIndex(newIndex);
  }, [totalItems]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      calculateProgress();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    calculateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateProgress]);

  const scrollToCard = useCallback((index: number) => {
    if (!containerRef.current) return;
    const windowHeight = window.innerHeight;
    const totalScroll = containerRef.current.offsetHeight - windowHeight;
    const targetProgress = totalItems > 1 ? index / (totalItems - 1) : 0;
    const containerTop = window.scrollY + containerRef.current.getBoundingClientRect().top;
    const targetScrollY = containerTop + targetProgress * totalScroll;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  }, [totalItems]);

  return {
    containerRef,
    trackRef,
    scrollProgress,
    activeIndex,
    translateX,
    scrollToCard,
  };
}
