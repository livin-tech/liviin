import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';
import App from './App';
import { SidebarProvider } from '../src/contexts/SidebarContext';
import * as serviceWorker from '../src/serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import './i18n';

ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <SidebarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SidebarProvider>
    </Provider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
