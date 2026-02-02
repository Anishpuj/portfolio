import { useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

type TransitionState = 'entering-black' | 'entering-fade' | 'visible' | 'exiting-black' | 'exiting-fade';

function PageTransition({ children }: PageTransitionProps) {
  const [transitionState, setTransitionState] = useState<TransitionState>('entering-black');
  const [isExiting, setIsExiting] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<number | undefined>(undefined);
  const prevLocationRef = useRef(location);

  useLayoutEffect(() => {
    // Check if we're navigating to a different page
    if (prevLocationRef.current !== location) {
      // Use requestAnimationFrame to avoid setState during render
      requestAnimationFrame(() => {
        setIsExiting(true);
        setTransitionState('exiting-black');
        
        // Start exit transition
        timeoutRef.current = window.setTimeout(() => {
          setTransitionState('exiting-fade');
        }, 200);
        
        // Complete exit and start entry
        timeoutRef.current = window.setTimeout(() => {
          prevLocationRef.current = location;
          setIsExiting(false);
          setTransitionState('entering-black');
          
          // Start entry transition
          timeoutRef.current = window.setTimeout(() => {
            setTransitionState('entering-fade');
          }, 200);
          
          // Show content
          timeoutRef.current = window.setTimeout(() => {
            setTransitionState('visible');
          }, 400);
        }, 600); // Increased from 300 to 600
      });
    } else {
      // Initial page load - skip transition, go straight to content
      timeoutRef.current = window.setTimeout(() => {
        setTransitionState('visible');
      }, 100);
    }

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [location]);

  const getBlackScreenOpacity = () => {
    switch (transitionState) {
      case 'entering-black':
      case 'exiting-black': return 'opacity-100';
      case 'entering-fade':
      case 'exiting-fade': return 'opacity-0';
      case 'visible': return 'opacity-0 pointer-events-none';
      default: return 'opacity-100';
    }
  };

  const getContentOpacity = () => {
    switch (transitionState) {
      case 'entering-black':
      case 'exiting-black': return 'opacity-0 translate-y-4';
      case 'entering-fade':
      case 'exiting-fade': return 'opacity-0 translate-y-4';
      case 'visible': return 'opacity-100 translate-y-0';
      default: return 'opacity-0 translate-y-4';
    }
  };

  const shouldShowContent = () => {
    return transitionState === 'visible' && !isExiting;
  };

  return (
    <div className="relative min-h-screen">
      {/* Black screen overlay */}
      <div
        className={`absolute inset-0 bg-black z-50 transition-opacity ${getBlackScreenOpacity()}`}
        style={{ transitionDuration: '400ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      />
      
      {/* Page content */}
      <div
        className={`transition-all ${getContentOpacity()}`}
        style={{ transitionDuration: '800ms', transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
      >
        {shouldShowContent() && children}
      </div>
    </div>
  );
}

export default PageTransition;
