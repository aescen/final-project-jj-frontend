import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/custom.css'

// context
import ContextProvidersHelper from './contexts/ContextProvidersHelper';
import { AuthContextProvider, UserContextProvider } from './contexts/Providers';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ContextProvidersHelper
      providers={[<AuthContextProvider />, <UserContextProvider />]}
    >
      <App />
    </ContextProvidersHelper>
  </StrictMode>,
);

reportWebVitals();
