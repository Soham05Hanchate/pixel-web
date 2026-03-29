import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';

const ProviderLayout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="layout-body">
        <Sidebar role="provider" />
        <main className="content-area">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProviderLayout;