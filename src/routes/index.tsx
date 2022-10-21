import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { MainLayout } from '../components/MainLayout';
import { routesList } from './consts';

const MainRoutes = () => (
  <MainLayout>
    <Suspense fallback={'Loading...'}>
      <Routes>
        {Object.values(routesList).map((route) => {
          const Component = React.lazy(() => import(`../pages/${route.componentPath}`));

          return <Route key={route.path} path={route.path} element={<Component />} />;
        })}
        {/* <Route path="*" element={<Navigate to={routesList.home.path} replace />} /> */}
      </Routes>
    </Suspense>
  </MainLayout>
);

export default MainRoutes;
