import { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ModernPortfolio } from './components/ModernPortfolio';
import { PKLGallery } from './components/PKLGallery';
import { WorkGallery } from './components/WorkGallery';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentView, setCurrentView] = useState<'main' | 'pkl-gallery' | 'work-gallery'>('main');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) {
    return <WelcomeScreen />;
  }

  if (currentView === 'pkl-gallery') {
    return <PKLGallery onBack={() => setCurrentView('main')} />;
  }

  if (currentView === 'work-gallery') {
    return <WorkGallery onBack={() => setCurrentView('main')} />;
  }

  return (
    <ModernPortfolio
      onViewPKLPhotos={() => setCurrentView('pkl-gallery')}
      onViewWorkPhotos={() => setCurrentView('work-gallery')}
    />
  );
}