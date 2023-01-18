import { useEffect, useState } from 'react';

export const useWindowResize = (): number => {
  const initSize = window.innerWidth;
  const [windowSize, setWindowSize] = useState<number>(initSize);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};