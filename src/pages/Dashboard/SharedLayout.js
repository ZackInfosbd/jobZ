import React from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { Navbar, SmallSidebar, BigSidebar } from '../../components';

const SharedLayout = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </React.Fragment>
  );
};

export default SharedLayout;
