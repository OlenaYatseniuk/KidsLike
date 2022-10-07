import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './modules/Header';

import Container from 'shared/components/Container';
import Loader from 'shared/components/Loader';

import PublicRoute from 'shared/components/PublicRoute';
import PrivateRoute from 'shared/components/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const MainPage = lazy(() => import('pages/MainPage'));

const ClientsRoutes = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<PublicRoute redirectTo="/" />}>
              <Route index element={<HomePage />} />
            </Route>

            <Route path="/main" element={<PrivateRoute redirectTo="/" />}>
              <Route index element={<MainPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};

export default ClientsRoutes;