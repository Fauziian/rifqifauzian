import { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ModernPortfolio } from './components/ModernPortfolio';
import { PKLGallery } from './components/PKLGallery';
import { WorkGallery } from './components/WorkGallery';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentView, setCurrentView] = useState<'main' | 'pkl-gallery' | 'work-gallery'>('main');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showWelcome ? (
        <WelcomeScreen key="welcome" />
      ) : currentView === 'pkl-gallery' ? (
        <PKLGallery key="pkl" onBack={() => setCurrentView('main')} />
      ) : currentView === 'work-gallery' ? (
        <WorkGallery key="work" onBack={() => setCurrentView('main')} />
      ) : (
        <ModernPortfolio
          key="main"
          onViewPKLPhotos={() => setCurrentView('pkl-gallery')}
          onViewWorkPhotos={() => setCurrentView('work-gallery')}
        />
      )}
    </AnimatePresence>
  );
}