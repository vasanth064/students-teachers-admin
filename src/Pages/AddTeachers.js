import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useAuth } from '../Context/AuthContext';

const AddTeachers = () => {
  const { signUpWithEmail } = useAuth();

  const teacherUserInitialValues = {
    name: '',
    staffID: '',
    photo: null,
    email: '',
    password: '',
    phoneNumber: '',
    department: '',
    landline: '',
    yearOfJoining: '',
    designation: '',
    qualification: '',
    areaOfSpecialization: '',
    coursesHandled: '',
  };

  return (
    <section>
      <Formik
        initialValues={teacherUserInitialValues}
        onSubmit={(values) => {
          let photo = values.photo;
          let userData = values;
          delete userData.photo;
          signUpWithEmail(userData, photo, 'teachers');
          alert(JSON.parse(values));
          document.querySelector('#studentsUserData').reset();
        }}>
        {({ setFieldValue }) => (
          <Form id='teachersUserData'>
            <h1>Add Teachers</h1>

            <label>Name :</label>
            <Field type='text' name='name' />

            <label>ID :</label>
            <Field type='text' name='rollno' />

            <label>Department :</label>
            <Field as='select' name='department'>
              <option selected disabled>
                Select
              </option>
              <option value='Department of Computer Engneering'>DCE</option>
              <option value='Department of Mechanical Engneering'>DME</option>
              <option value='Department of Electrical Engneering'>DCE</option>
            </Field>

            <label>Landline :</label>
            <Field type='text' name='landline' />

            <label>Year of Joining :</label>
            <Field type='text' name='yearOfJoining' />

            <label>Designation :</label>
            <Field type='text' name='designation' />

            <label>Qualification :</label>
            <Field type='text' name='qualification' />

            <label>Area Of Specialization :</label>
            <Field type='text' name='areaOfSpecialization' />

            <label>Courses Handled :</label>
            <Field type='text' name='coursesHandled' />

            <label>Photo :</label>
            <input
              type='file'
              name='photo'
              onChange={(e) => setFieldValue('photo', e.currentTarget.files[0])}
            />

            <label>Email :</label>
            <Field type='email' name='email' />

            <label>Password :</label>
            <Field type='password' name='password' />

            <label>Phone Number :</label>
            <Field type='text' name='phoneNumber' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default AddTeachers;
