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
          <Form id='teachersUserData' autoComplete='off'>
            <h1>Add Teachers</h1>

            <label>Name :</label>
            <Field type='text' name='name' required />

            <label>Staff ID :</label>
            <Field type='text' name='staffID' required />

            <label>Email :</label>
            <Field type='email' name='email' required />

            <label>Password :</label>
            <Field type='password' name='password' required />

            <label>Department :</label>
            <Field as='select' name='department' required>
              <option selected disabled>
                Select
              </option>
              <option value='Apparel Technology'>DAT</option>
              <option value='Automobile Engneering'>DAE</option>
              <option value='Computer Engneering'>DCE</option>
              <option value='Computer Networking'>DCN</option>
              <option value='Electrical and Electronics Engneering'>
                DEEE
              </option>
              <option value='Electronics and Communication Engneering'>
                DECE
              </option>
              <option value='Foundary Technology'>DFT</option>
              <option value='Information Technology'>DIT</option>
              <option value='Mechanical Engneering'>DME</option>
              <option value='Mechatronics Engneering'>DMT</option>
              <option value='Textile Technology'>DFT</option>
            </Field>

            <label>Landline :</label>
            <Field type='text' name='landline' required />

            <label>Year of Joining :</label>
            <Field type='text' name='yearOfJoining' required />

            <label>Designation :</label>
            <Field type='text' name='designation' required />

            <label>Qualification :</label>
            <Field type='text' name='qualification' required />

            <label>Area Of Specialization :</label>
            <Field type='text' name='areaOfSpecialization' required />

            <label>Courses Handled :</label>
            <Field type='text' name='coursesHandled' required />

            <label>Photo :</label>
            <input
              type='file'
              name='photo'
              onChange={(e) => setFieldValue('photo', e.currentTarget.files[0])}
              required
            />

            <label>Phone Number :</label>
            <Field type='text' name='phoneNumber' required />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default AddTeachers;
