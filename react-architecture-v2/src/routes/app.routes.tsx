import { Routes, Route, Navigate } from 'react-router-dom';
import { AppContainer } from '../containers';
import { Dashboard } from '../pages';
import PATHS_ROUTES from './paths';

function AppRoutes() {
  return (
    <AppContainer>
      <Routes>
        <Route
          path={PATHS_ROUTES.APP.DASHBOARD.DEFAULT}
          element={<Dashboard />}
        />
        <Route
          path="*"
          element={<Navigate to={PATHS_ROUTES.APP.DASHBOARD.DEFAULT} replace />}
        />
      </Routes>
    </AppContainer>
  );
}

export default AppRoutes;
