import { Link } from 'react-router-dom';
import { routes } from '../routes';

const Layout = ({ children }) => {
  return (
    <div className='App'>
      <header>
        <nav>
          <h1>ADMIN DASHBOARD</h1>
          <ul>
            {routes.map((route, index) => (
              <li key={index}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
