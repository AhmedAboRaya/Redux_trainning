import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import store from './app/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
