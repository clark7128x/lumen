// Creator profile: dialog with navigation, tabs, swipe-to-close

import { useRef, useEffect, useCallback } from 'react';
import { creators } from '../data/creators';
import { buildTelegramUrl } from '../lib/telegram';
import { track } from '../lib/track';
import { useSwipe } from '../hooks/useSwipe';
import { PostsTab } from './PostsTab';
import { ChatTab } from './ChatTab';
import type { CreatorId, TabId } from '../types';

interface CreatorProfileProps {
  creatorId: CreatorId;
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  onClose: () => void;
  onNavigate: (id: CreatorId) => void;
}

export function CreatorProfile({
  creatorId,
  activeTab,
  onTabChange,
  onClose,
  onNavigate,
}: CreatorProfileProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const creator = creators.find((c) => c.id === creatorId);
  const currentIndex = creators.findIndex((c) => c.id === creatorId);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (creator) {
      if (!dialog.open) {
        dialog.showModal();
        track('profile_open', { creator_id: creatorId, source: 'deeplink' });
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [creator, creatorId]);

  const handleSwipeDown = useCallback(() => {
    track('profile_close', { creator_id: creatorId, source: 'swipe' });
    onClose();
  }, [creatorId, onClose]);

  useSwipe(contentRef, handleSwipeDown);

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      track('profile_close', { creator_id: creatorId, source: 'backdrop' });
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      track('profile_close', { creator_id: creatorId, source: 'escape' });
    }
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + creators.length) % creators.length;
    onNavigate(creators[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % creators.length;
    onNavigate(creators[nextIndex].id);
  };

  if (!creator) return null;

  return (
    <dialog
      ref={dialogRef}
      className="m-0 h-full w-full max-w-none bg-transparent p-0 backdrop:bg-black/60"
      onClick={handleDialogClick}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={contentRef}
        className="relative flex h-full flex-col bg-base-surface md:m-8 md:h-auto md:max-h-[90vh] md:rounded-card"
      >
        <div className="relative flex items-start gap-4 border-b border-base-border p-6">
          <div className="h-20 w-20 flex-none overflow-hidden rounded-full border-2 border-base-border">
            <img
              src={creator.portrait}
              alt={creator.name}
              className="h-full w-full object-cover"
              style={{ objectPosition: creator.focus }}
            />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-text-primary">{creator.name}</h2>
            <p className="text-sm text-text-muted">{creator.handle}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide" style={{ color: creator.accent }}>
              {creator.niche}
            </p>
            <p className="mt-2 text-sm text-text-primary/80">{creator.bio}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-base text-text-muted transition-colors hover:bg-base-border hover:text-text-primary"
            aria-label="Close profile"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute right-20 top-6 hidden gap-2 md:flex">
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-base text-text-muted transition-colors hover:bg-base-border hover:text-text-primary"
              aria-label="Previous blogger"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-base text-text-muted transition-colors hover:bg-base-border hover:text-text-primary"
              aria-label="Next blogger"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="border-b border-base-border p-4">
          <button
            type="button"
            onClick={() => {
              const url = buildTelegramUrl(creator, 'profile');
              window.open(url, '_blank', 'noopener,noreferrer');
            }}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-telegram px-6 py-3 font-semibold text-white transition-colors hover:bg-telegram/90"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
            </svg>
            Message on Telegram
          </button>
        </div>

        <div className="flex border-b border-base-border">
          <button
            type="button"
            onClick={() => {
              onTabChange('posts');
              track('tab_change', { creator_id: creatorId, tab: 'posts' });
            }}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
              activeTab === 'posts'
                ? 'border-b-2 border-telegram text-telegram'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            Posts
          </button>
          <button
            type="button"
            onClick={() => {
              onTabChange('chat');
              track('tab_change', { creator_id: creatorId, tab: 'chat' });
            }}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
              activeTab === 'chat'
                ? 'border-b-2 border-telegram text-telegram'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            Chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {activeTab === 'posts' && <PostsTab creator={creator} />}
          {activeTab === 'chat' && <ChatTab creator={creator} />}
        </div>
      </div>
    </dialog>
  );
}