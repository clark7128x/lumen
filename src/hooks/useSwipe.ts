// Визначення свайпу вниз для закриття профілю

import { useEffect, type RefObject } from 'react';

export function useSwipe(
  ref: RefObject<HTMLElement>,
  onSwipeDown: () => void,
  threshold = 100
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      const diff = endY - startY;

      if (diff > threshold) {
        onSwipeDown();
      }
    };

    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchend', handleTouchEnd);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [ref, onSwipeDown, threshold]);
}