import { Route, Routes } from 'react-router-dom';
import { routes } from '../routes';

const Routing = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} element={route.component} key={index} />
      ))}
    </Routes>
  );
};

export default Routing;
