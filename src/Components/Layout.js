import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { routes } from '../routes';

const Layout = ({ children }) => {
  const { currentUser, logOut } = useAuth();
  return (
    <div className='App'>
      <aside className='sidebarContainer'>
        <ul className='sidebar'>
          <img
            src='https://www.psgpolytech.ac.in/img/smalllogo.png'
            alt='clgLogo'
            style={{
              width: '11rem',
              height: 'auto',
            }}
          />
          {routes.map((route, index) =>
            route.name !== 'Login' ? (
              <li key={index} className='sidebarItem'>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ) : null
          )}
        </ul>
      </aside>
      <header>
        <nav>
          <h1>ADMIN DASHBOARD</h1>
          {currentUser ? (
            <ul>
              {currentUser ? (
                <li>
                  <button
                    onClick={() => logOut()}
                    style={{ display: 'inline' }}>
                    Logout
                  </button>
                </li>
              ) : null}
            </ul>
          ) : null}
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
