import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import styled from 'styled-components';

const Header = styled.header`
padding: 20px 0;
border-bottom: 2px solid #0070ba;
`

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;


