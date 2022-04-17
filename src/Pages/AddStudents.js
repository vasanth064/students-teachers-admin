import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useAuth } from '../Context/AuthContext';

const AddStudents = () => {
  const { signUpWithEmail } = useAuth();
  const studentUserInitialValues = {
    name: '',
    rollno: '',
    email: '',
    password: '',
    fatherName: '',
    phoneNumber: '',
    district: '',
    state: '',
    country: '',
    address: '',
    department: '',
    batch: '',
    programeCoordinator: '',
    tutor: '',
    tutorID: '',
  };
  return (
    <section>
      <Formik
        initialValues={studentUserInitialValues}
        onSubmit={(values) => {
          let userData = values;
          signUpWithEmail(userData);
          document.querySelector('#studentsUserData').reset();
        }}>
        <Form id='studentsUserData'>
          <header>
            <h1>Add Students</h1>
          </header>

          <label>Name :</label>
          <Field type='text' name='name' />

          <label>Roll No :</label>
          <Field type='text' name='rollno' />

          <label>Email :</label>
          <Field type='email' name='email' />

          <label>Password :</label>
          <Field type='password' name='password' />

          <label>DoB :</label>
          <Field type='date' name='dob' />

          <label>Father's Name :</label>
          <Field type='text' name='fatherName' />

          <label>Phone Number :</label>
          <Field type='text' name='phoneNumber' />

          <label>District :</label>
          <Field type='text' name='district' />

          <label>State :</label>
          <Field type='text' name='state' />

          <label>Country :</label>
          <Field type='text' name='country' />

          <label>Address :</label>
          <Field as='textarea' name='address' />

          <label>Department :</label>
          <Field as='select' name='department'>
            <option selected disabled>
              Select
            </option>
            <option value='Department of Computer Engneering'>DCE</option>
            <option value='Department of Mechanical Engneering'>DME</option>
            <option value='Department of Electrical Engneering'>DCE</option>
          </Field>

          <label>Batch :</label>
          <Field type='text' name='batch' />

          <label>Program Co-ordinator :</label>
          <Field type='text' name='programeCoordinator' />

          <label>Tutor :</label>
          <Field type='text' name='tutor' />

          <label>Tutor ID :</label>
          <Field type='text' name='tutorID' />

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </section>
  );
};

export default AddStudents;
