// Типи даних проєкту Lumen

export type CreatorId = 'dan' | 'leo' | 'mina' | 'sofia';

export type TelegramKind = 'bot' | 'channel';

export interface TelegramLink {
  url: string;
  kind: TelegramKind;
}

export interface PostImage {
  id: string;
  type: 'image';
  image: string;
  caption: string;
  likes: number;
  comments: number;
  time: string;
  alt: string;
}

export interface PostText {
  id: string;
  type: 'text';
  text: string;
  likes: number;
  comments: number;
  time: string;
}

export type Post = PostImage | PostText;

export interface ChatQA {
  chip: string;
  answer: string;
}

export interface Creator {
  id: CreatorId;
  name: string;
  handle: string;
  niche: string;
  tagline: string;
  bio: string;
  portrait: string;
  focus: string;
  accent: string;
  surface: string;
  telegram: TelegramLink;
  greeting: string;
  qa: ChatQA[];
  fallback: string;
  posts: Post[];
}

export type Theme = 'system' | 'light' | 'dark';

export type ResolvedTheme = 'light' | 'dark';

export type ProfileSource = 'card' | 'deeplink' | 'swipe';

export type TabId = 'posts' | 'chat';