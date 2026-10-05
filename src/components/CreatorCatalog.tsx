// Creator catalog: scroll-snap on mobile, grid on desktop

import { useRef, useState, useEffect, useCallback } from 'react';
import { creators } from '../data/creators';
import { CreatorCard } from './CreatorCard';
import type { CreatorId } from '../types';

interface CreatorCatalogProps {
  onOpenProfile: (id: CreatorId) => void;
}

export function CreatorCatalog({ onOpenProfile }: CreatorCatalogProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>('[data-creator-card]');
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!Number.isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleDotClick = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>(`[data-index="${index}"]`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, []);

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-text-primary md:text-4xl">
          Choose your AI blogger
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 md:hidden [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {creators.map((creator, index) => (
            <div
              key={creator.id}
              data-creator-card
              data-index={index}
              className="w-[85vw] flex-none snap-center sm:w-[70vw]"
            >
              <CreatorCard creator={creator} onOpenProfile={onOpenProfile} />
            </div>
          ))}
        </div>

        <div className="hidden grid-cols-2 gap-6 md:grid lg:grid-cols-4">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} onOpenProfile={onOpenProfile} />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
          {creators.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? 'w-8 bg-telegram'
                  : 'w-2 bg-base-border hover:bg-text-muted'
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}