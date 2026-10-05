import '@astryxdesign/core/reset.css';
import '@astryxdesign/core/astryx.css';
import '@astryxdesign/theme-stone/theme.css';
import './app.css';

import {Theme} from '@astryxdesign/core';
import {stoneTheme} from '@astryxdesign/theme-stone/built';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {App} from './App';
import {ContentContext} from './content/context';
import type {Content} from './content/types';

// The body background lives outside the <Theme> boundary, so pin the document
// color-scheme to the theme mode or light-dark() tokens resolve inconsistently.
document.documentElement.style.colorScheme = 'light';

export function mount(content: Content) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ContentContext.Provider value={content}>
        <Theme theme={stoneTheme} mode="light">
          <App />
        </Theme>
      </ContentContext.Provider>
    </StrictMode>,
  );
}
