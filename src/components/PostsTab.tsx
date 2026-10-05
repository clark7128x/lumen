// Posts tab: grid of 3 publications (2 image + 1 text)

import { useState } from 'react';
import { track } from '../lib/track';
import type { Creator, Post } from '../types';

interface PostsTabProps {
  creator: Creator;
}

export function PostsTab({ creator }: PostsTabProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    track('post_open', { creator_id: creator.id, post_id: post.id });
  };

  const handleClose = () => {
    setSelectedPost(null);
  };

  const formatCount = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  if (selectedPost) {
    return (
      <div className="p-6">
        <button
          type="button"
          onClick={handleClose}
          className="mb-4 flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to feed
        </button>

        {selectedPost.type === 'image' && (
          <div className="mb-4 overflow-hidden rounded-2xl">
            <img
              src={selectedPost.image}
              alt={selectedPost.alt}
              className="w-full object-cover"
              style={{ aspectRatio: '4/5', objectPosition: 'center' }}
            />
          </div>
        )}

        {selectedPost.type === 'text' && (
          <div
            className="mb-4 rounded-2xl p-6"
            style={{ backgroundColor: creator.surface }}
          >
            <p className="whitespace-pre-line text-text-primary">{selectedPost.text}</p>
          </div>
        )}

        {selectedPost.type === 'image' && (
          <p className="mb-4 text-text-primary">{selectedPost.caption}</p>
        )}

        <div className="flex items-center gap-6 text-sm text-text-muted">
          <span>{formatCount(selectedPost.likes)} likes</span>
          <span>{formatCount(selectedPost.comments)} comments</span>
          <span>{selectedPost.time} ago</span>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-1 p-1">
      {creator.posts.map((post) => (
        <button
          key={post.id}
          type="button"
          onClick={() => handlePostClick(post)}
          className="group relative aspect-square overflow-hidden bg-base-border"
          aria-label={`View post: ${post.type === 'image' ? post.caption.slice(0, 50) : post.text.slice(0, 50)}`}
        >
          {post.type === 'image' && (
            <img
              src={post.image}
              alt={post.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
              style={{ objectPosition: 'center' }}
            />
          )}

          {post.type === 'text' && (
            <div
              className="flex h-full w-full items-center justify-center p-3"
              style={{ backgroundColor: creator.surface }}
            >
              <p className="line-clamp-4 text-xs text-text-primary">
                {post.text}
              </p>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="flex items-center gap-1 text-sm font-medium text-white">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              {formatCount(post.likes)}
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-white">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
              </svg>
              {formatCount(post.comments)}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}