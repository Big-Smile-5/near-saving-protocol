import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('./components/layouts/MainLayout'));

const Dashboard = lazy(() => import('./views/Dashboard'));
const MyPage = lazy(() => import('./views/MyPage'));
const Earn = lazy(() => import('./views/Earn'));
const Utility = lazy(() => import('./views/Utility'));
const Terms = lazy(() => import('./views/Terms'));

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/utility" element={<Utility />} />
        <Route path="/terms" element={<Terms />} />
      </Route>
    </Routes>
  );
}
