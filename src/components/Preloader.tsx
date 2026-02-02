import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

function Preloader({ onComplete }: PreloaderProps) {
  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 5000; // 5 seconds
    const interval = 50; // Update every 50ms
    const increment = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setPercentage((prev) => {
        const updatedPercentage = Math.min(prev + increment, 100);
        if (updatedPercentage >= 100) {
          clearInterval(timer);
          // Hold at 100% for a moment, then fade out
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onComplete();
            }, 500); // Fade out duration
          }, 300);
        }
        return updatedPercentage;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-black z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="fixed bottom-8 left-8">
        <div className="text-8xl sm:text-9xl lg:text-10xl font-sans text-white font-bold">
          {Math.round(percentage)}%
        </div>
      </div>
    </div>
  );
}

export default Preloader;
