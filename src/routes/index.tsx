import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app.routes';

function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default Routes;
