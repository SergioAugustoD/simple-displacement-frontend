import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import RecoilProvider from 'components/providers/RecoilProvider';
import GlobalStyles from 'lib/GlobalStyles';
import {BrowserRouter} from 'react-router-dom';

import LoginRoutes from './routes/Login';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RecoilProvider>
      <GlobalStyles />
      <BrowserRouter>
        <LoginRoutes />
      </BrowserRouter>
      </RecoilProvider>
  </React.StrictMode>,
);
