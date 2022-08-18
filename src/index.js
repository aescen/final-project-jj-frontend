import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// context
import ContextProvidersHelper from './contexts/ContextProvidersHelper';
import AuthContextProvider from './contexts/AuthContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ContextProvidersHelper providers={[<AuthContextProvider />]}>
      <App />
    </ContextProvidersHelper>
  </StrictMode>,
);

reportWebVitals();
