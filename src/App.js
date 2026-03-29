import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';

// Auth Pages
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Hero from './pages/Auth/Hero';

// Layouts
import PlayerLayout from './layouts/PlayerLayout';
import ProviderLayout from './layouts/ProviderLayout';

// Player Pages
import PlayerDashboard from './pages/Player/PlayerDashboard';
import TurfDiscovery from './pages/Player/TurfDiscovery';
import TurfDetail from './pages/Player/TurfDetail';
import MyBookings from './pages/Player/MyBookings';
import Matchmaking from './pages/Player/Matchmaking';
import PlayerChat from './pages/Player/PlayerChat';

// Provider Pages
import ProviderDashboard from './pages/Provider/ProviderDashboard';
import TurfManagement from './pages/Provider/TurfManagement';
import SlotManagement from './pages/Provider/SlotManagement';

// Styles
import './styles/global.css';
import './styles/themes.css';
import './styles/layouts.css';
import './styles/components.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* --- Public Auth Routes --- */}
<Route element={<AuthLayout />}>
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/forgot-password" element={<ForgotPassword />} />
</Route>

        
        {/* --- Player Section --- */}
        <Route path="/p" element={<PlayerLayout />}>
          <Route path="dashboard" element={<PlayerDashboard />} />
          <Route path="discovery" element={<TurfDiscovery />} />
          <Route path="discovery/detail" element={<TurfDetail />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="matchmaking" element={<Matchmaking />} />
          <Route path="chat" element={<PlayerChat />} />
          {/* Redirect /p to /p/dashboard */}
          <Route index element={<Navigate to="dashboard" />} />
        </Route>

        {/* --- Provider Section --- */}
        <Route path="/v" element={<ProviderLayout />}>
          <Route path="dashboard" element={<ProviderDashboard />} />
          <Route path="manage" element={<TurfManagement />} />
          <Route path="slots" element={<SlotManagement />} />
          {/* Redirect /v to /v/dashboard */}
          <Route index element={<Navigate to="dashboard" />} />
        </Route>

        {/* Root Redirect */}
        <Route path="/" element={<Hero />} />
        
        {/* 404 Redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
