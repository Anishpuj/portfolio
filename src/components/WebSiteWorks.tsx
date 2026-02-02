import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './WebSiteWorks.css';

function WebSiteWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollContent = scrollContainer.firstElementChild as HTMLElement;
      if (scrollContent) {
        // Clone the content for infinite loop
        const clone = scrollContent.cloneNode(true) as HTMLElement;
        scrollContainer.appendChild(clone);
      }
    }
  }, []);

  const images = [
    '/work1.png',
    '/work2.png',
    '/work3.png',
    '/work4.png',
    '/work5.png',
    '/work6.png'
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Big Heading */}
        <h1 className="text-9xl sm:text-10xl lg:text-12xl font-serif text-white text-center mb-24" style={{ fontSize: 'clamp(4rem, 15vw, 12rem)' }}>
          CREATIVE WORK.
        </h1>

        {/* Infinite Image Loop */}
        <div className="overflow-hidden w-full -mx-4 sm:-mx-6 lg:-mx-8">
          <div 
            ref={scrollRef}
            className="flex space-x-8 animate-scroll"
            style={{
              animation: 'scroll 30s linear infinite',
              width: 'max-content'
            }}
          >
            <div className="flex space-x-8">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-80"
                >
                  {index === 0 && (
                    <div className="text-center mb-2">
                      <a 
                        href="https://junowatts.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm underline"
                      >
                        check live →
                      </a>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="text-center mb-2">
                      <a 
                        href="https://nicopalmer.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm underline"
                      >
                        check live →
                      </a>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="text-center mb-2">
                      <a 
                        href="https://negativefilms.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm underline"
                      >
                        check live →
                      </a>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="text-center mb-2">
                      <a 
                        href="https://nrmlss.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm underline"
                      >
                        check live →
                      </a>
                    </div>
                  )}
                  {index === 4 && (
                    <div className="text-center mb-2">
                      <a 
                        href="https://politechaos.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm underline"
                      >
                        check live →
                      </a>
                    </div>
                  )}
                  {index === 5 && (
                    <div className="text-center mb-2">
                      <a 
                        href="https://montana01.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm underline"
                      >
                        check live →
                      </a>
                    </div>
                  )}
                  <div className="w-80 h-60 bg-gray-900 overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`Work ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Portfolio Link */}
        <div className="text-center mt-16">
          <button 
            onClick={() => navigate('/')}
            className="text-white underline hover:text-gray-300 transition-colors text-lg bg-transparent border-none cursor-pointer"
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

export default WebSiteWorks;
