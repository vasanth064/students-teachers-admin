import { PrivateRoute } from './Components/PrivateRoute';
import AddStudents from './Pages/AddStudents';
import AddTeachers from './Pages/AddTeachers';
import Home from './Pages/Home';
import Login from './Pages/Login';
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: '/addStudents',
    name: 'Add Students',
    component: (
      <PrivateRoute>
        <AddStudents />
      </PrivateRoute>
    ),
  },
  {
    path: '/addTeachers',
    name: 'Add Teachers',
    component: (
      <PrivateRoute>
        <AddTeachers />
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    name: 'Login',
    component: <Login />,
  },
];
