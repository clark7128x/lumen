// Chat tab: greeting, chips, typing indicator, fallback

import { useState, useRef, useEffect } from 'react';
import { track } from '../lib/track';
import { buildTelegramUrl } from '../lib/telegram';
import type { Creator, ChatQA } from '../types';

interface ChatTabProps {
  creator: Creator;
}

interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
}

export function ChatTab({ creator }: ChatTabProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasGreeted, setHasGreeted] = useState(false);

  useEffect(() => {
    if (hasGreeted) return;

    setIsTyping(true);
    const timer = setTimeout(() => {
      setMessages([{ id: 'greeting', role: 'bot', text: creator.greeting }]);
      setIsTyping(false);
      setHasGreeted(true);
    }, 700);

    return () => clearTimeout(timer);
  }, [creator.greeting, hasGreeted]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleChipClick = (qa: ChatQA) => {
    track('chat_question', { creator_id: creator.id, kind: 'chip', scripted: true });

    setMessages((prev) => [...prev, { id: `user-${Date.now()}`, role: 'user', text: qa.chip }]);

    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { id: `bot-${Date.now()}`, role: 'bot', text: qa.answer }]);
      setIsTyping(false);
    }, 800);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    track('chat_question', { creator_id: creator.id, kind: 'free', scripted: false });

    setMessages((prev) => [...prev, { id: `user-${Date.now()}`, role: 'user', text: inputValue }]);
    setInputValue('');

    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { id: `bot-${Date.now()}`, role: 'bot', text: creator.fallback }]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                  msg.role === 'user'
                    ? 'bg-telegram text-white'
                    : 'bg-base text-text-primary'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-base px-4 py-3">
                <div className="flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-text-muted" style={{ animationDelay: '0ms' }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-text-muted" style={{ animationDelay: '150ms' }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-text-muted" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {messages.length <= 1 && (
        <div className="border-t border-base-border p-4">
          <p className="mb-3 text-xs text-text-muted">Ask me about:</p>
          <div className="flex flex-wrap gap-2">
            {creator.qa.map((qa, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleChipClick(qa)}
                className="rounded-full border border-base-border px-4 py-2 text-sm text-text-primary transition-colors hover:border-telegram hover:text-telegram"
              >
                {qa.chip}
              </button>
            ))}
          </div>
        </div>
      )}

      {messages.some((msg) => msg.text === creator.fallback) && (
        <div className="border-t border-base-border p-4">
          <button
            type="button"
            onClick={() => {
              const url = buildTelegramUrl(creator, 'chat_fallback');
              window.open(url, '_blank', 'noopener,noreferrer');
            }}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-telegram px-6 py-3 font-semibold text-white transition-all hover:bg-telegram/90"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
            </svg>
            Go to Telegram
          </button>
        </div>
      )}

      <form
        onSubmit={handleInputSubmit}
        className="border-t border-base-border p-4"
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Ask something..."
            className="flex-1 rounded-full bg-base px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-telegram"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-telegram text-white transition-opacity disabled:opacity-50"
            aria-label="Send message"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}