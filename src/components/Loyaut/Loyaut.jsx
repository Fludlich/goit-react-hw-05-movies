import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div>
      <AppBar></AppBar>
      <Outlet></Outlet>
    </div>
  );
}
