import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createClient } from '@supabase/supabase-js';
import {SessionContextProvider} from '@supabase/auth-helpers-react';

const supabase = createClient('https://llmjvymxjekgyoxcrems.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbWp2eW14amVrZ3lveGNyZW1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0Mzk3OTgsImV4cCI6MjA1MzAxNTc5OH0.nPehZb14_uujdaiAu3wBJ3dpjLRte4mFr-nZtK-Fzgc');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);

reportWebVitals();
