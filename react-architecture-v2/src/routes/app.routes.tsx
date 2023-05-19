import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, ClothesLine, Clothing } from '../pages';
import PATHS_ROUTES from './paths';

function AppRoutes() {
  return (
    <Routes>
      <Route
        path={PATHS_ROUTES.APP.DASHBOARD.DEFAULT}
        element={<Dashboard />}
      />
      <Route
        path={PATHS_ROUTES.APP.CLOTHESLINE.DEFAULT}
        element={<ClothesLine />}
      />
      <Route path={PATHS_ROUTES.APP.CLOTHING.DEFAULT} element={<Clothing />} />
      <Route
        path="*"
        element={<Navigate to={PATHS_ROUTES.APP.DASHBOARD.DEFAULT} replace />}
      />
    </Routes>
  );
}

export default AppRoutes;
