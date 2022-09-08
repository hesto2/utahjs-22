import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import init from './utils/axiosConfig';
import Providers from './Providers';
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn:
    'https://5c3d5b9c8a934713b08f1b6f4b00015a@o453466.ingest.sentry.io/5442345',
  tracesSampleRate: 0,
});

init();

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
