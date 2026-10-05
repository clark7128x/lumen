// Хеш-маршрутизація: /#/dan, /#/leo, /#/mina, /#/sofia

import { useState, useEffect } from 'react';
import type { CreatorId } from '../types';
import { creators } from '../data/creators';

export function useHashRoute() {
  const [hash, setHash] = useState(() => 
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const creatorId = hash.replace('#/', '') as CreatorId;
  const isValidCreator = creators.some(c => c.id === creatorId);

  return {
    creatorId: isValidCreator ? creatorId : null,
    navigate: (id: CreatorId) => {
      window.location.hash = `#/${id}`;
    },
    clear: () => {
      window.location.hash = '';
    },
  };
}