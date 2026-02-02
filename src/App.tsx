import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Portfolio from './components/Portfolio';
import WebSiteWorks from './components/WebSiteWorks';
import PageTransition from './components/PageTransition';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <Routes>
      <Route path="/" element={<PageTransition><Portfolio /></PageTransition>} />
      <Route path="/website-works" element={<PageTransition><WebSiteWorks /></PageTransition>} />
    </Routes>
  );
}

export default App;