import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Products } from '../pages';
import PATHS_ROUTES from './paths';

function AppRoutes() {
  return (
    <Routes>
      <Route
        path={PATHS_ROUTES.APP.DASHBOARD.DEFAULT}
        element={<Dashboard />}
      />
      <Route path={PATHS_ROUTES.APP.PRODUCTS.DEFAULT} element={<Products />} />
      <Route
        path="*"
        element={<Navigate to={PATHS_ROUTES.APP.DASHBOARD.DEFAULT} replace />}
      />
    </Routes>
  );
}

export default AppRoutes;
