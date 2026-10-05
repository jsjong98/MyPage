import {createContext, useContext} from 'react';

import type {Content} from './types';

export const ContentContext = createContext<Content | null>(null);

export function useContent(): Content {
  const content = useContext(ContentContext);
  if (!content) throw new Error('useContent must be used inside ContentContext');
  return content;
}
