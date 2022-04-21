import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { routes } from '../routes';

const Layout = ({ children }) => {
  const { currentUser, logOut } = useAuth();
  return (
    <div className='App'>
      <header>
        <nav>
          <h1>ADMIN DASHBOARD</h1>
          {currentUser ? (
            <ul>
              {routes.map((route, index) =>
                route.name !== 'Login' ? (
                  <li key={index}>
                    <Link to={route.path}>{route.name}</Link>
                  </li>
                ) : currentUser ? (
                  <li key={index}>
                    <button
                      onClick={() => logOut()}
                      style={{ display: 'inline' }}>
                      Logout
                    </button>
                  </li>
                ) : (
                  <li key={index}>
                    <Link to={route.path}>{route.name}</Link>
                  </li>
                )
              )}
            </ul>
          ) : null}
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
