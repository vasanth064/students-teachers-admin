import AddStudents from './Pages/AddStudents';
import AddTeachers from './Pages/AddTeachers';
import Home from './Pages/Home';
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: <Home />,
  },
  {
    path: '/addStudents',
    name: 'Add Students',
    component: <AddStudents />,
  },
  {
    path: '/addTeachers',
    name: 'Add Teachers',
    component: <AddTeachers />,
  },
];
