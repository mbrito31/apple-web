import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://897aceacc02fa5ac34f2b3606c0ee754@o4508287647547392.ingest.us.sentry.io/4508287651741696',
  integrations: [
    Sentry.browserTracingIntegration(),
    
    Sentry.replayIntegration({
     
    }),
  ],

  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
