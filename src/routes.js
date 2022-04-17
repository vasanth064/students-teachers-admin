import AddStudents from './Pages/AddStudents';
import AddTeachers from './Pages/AddTeachers';
export const routes = [
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
