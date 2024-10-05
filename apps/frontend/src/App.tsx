import { useRoutes } from 'react-router-dom';
import { Router } from './routes';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';

function App() {
  const content = useRoutes(Router);

  return (
    <ThemeProvider>
      <CssBaseline />
      {content}
    </ThemeProvider>
  );
}
export default App;
