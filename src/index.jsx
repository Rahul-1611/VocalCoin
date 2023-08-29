import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SpeechProvider appId="52ff96a2-dc7e-4337-8c18-4a65738d4827" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>
)
