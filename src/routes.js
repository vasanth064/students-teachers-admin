import { PrivateRoute } from './Components/PrivateRoute';
import AddDataFirestore from './Pages/AddDataFirestore';
import AddStudents from './Pages/AddStudents';
import AddTeachers from './Pages/AddTeachers';
import ExamTimetable from './Pages/ExamTimetable';
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
    path: '/AddData',
    name: 'Add Data',
    component: (
      <PrivateRoute>
        <AddDataFirestore />
      </PrivateRoute>
    ),
  },
  {
    path: '/ExamTimetable',
    name: 'Exam Timetable',
    component: (
      <PrivateRoute>
        <ExamTimetable />
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    name: 'Login',
    component: <Login />,
  },
];
