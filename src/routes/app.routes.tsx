import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, ClothesLine, Clothing, Bag } from '../pages';
import PATHS_ROUTES from './paths';
import { AppContainer } from '../containers';

function AppRoutes() {
  return (
    <AppContainer>
      <Routes>
        <Route
          path={PATHS_ROUTES.APP.DASHBOARD.DEFAULT}
          element={<Dashboard />}
        />
        <Route
          path={PATHS_ROUTES.APP.CLOTHESLINE.DEFAULT}
          element={<ClothesLine />}
        />
        <Route
          path={PATHS_ROUTES.APP.CLOTHING.DEFAULT}
          element={<Clothing />}
        />
        <Route path={PATHS_ROUTES.APP.BAG.DEFAULT} element={<Bag />} />
        <Route
          path="*"
          element={<Navigate to={PATHS_ROUTES.APP.DASHBOARD.DEFAULT} replace />}
        />
      </Routes>
    </AppContainer>
  );
}

export default AppRoutes;
