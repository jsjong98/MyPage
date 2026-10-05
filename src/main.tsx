import './app.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './App';
import {ContentContext} from './content/context';
import type {Content} from './content/types';

export function mount(content: Content) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode><ContentContext.Provider value={content}><App /></ContentContext.Provider></StrictMode>,
  );
}
