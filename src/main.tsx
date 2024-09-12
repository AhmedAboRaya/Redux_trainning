// index.tsx
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
