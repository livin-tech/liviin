import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { SidebarProvider } from '../src/contexts/SidebarContext';
import * as serviceWorker from '../src/serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import './i18n';

const container: any = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <HelmetProvider>
    <Provider store={store}>
      <SidebarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SidebarProvider>
    </Provider>
  </HelmetProvider>
);

serviceWorker.unregister();
