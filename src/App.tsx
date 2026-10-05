import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CreatorCatalog } from './components/CreatorCatalog';
import { CreatorProfile } from './components/CreatorProfile';
import { TelegramBlock } from './components/TelegramBlock';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { useHashRoute } from './hooks/useHashRoute';
import type { CreatorId, TabId } from './types';

export default function App() {
  const { creatorId, navigate, clear } = useHashRoute();
  const [activeTab, setActiveTab] = useState<TabId>('posts');

  useEffect(() => {
    setActiveTab('posts');
  }, [creatorId]);

  useEffect(() => {
    if (creatorId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [creatorId]);

  const handleOpenProfile = useCallback(
    (id: CreatorId) => {
      navigate(id);
    },
    [navigate]
  );

  const handleCloseProfile = useCallback(() => {
    clear();
  }, [clear]);

  const handleNavigateProfile = useCallback(
    (id: CreatorId) => {
      navigate(id);
    },
    [navigate]
  );

  return (
    <div className="min-h-screen bg-base text-text-primary transition-colors duration-300">
      <Header />

      <main>
        <Hero />
        <CreatorCatalog onOpenProfile={handleOpenProfile} />
        <TelegramBlock />
        <FinalCTA />
      </main>

      <Footer />

      {creatorId && (
        <CreatorProfile
          creatorId={creatorId}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onClose={handleCloseProfile}
          onNavigate={handleNavigateProfile}
        />
      )}
    </div>
  );
}