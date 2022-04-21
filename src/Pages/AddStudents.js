import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './../Config/firebaseConfig';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
const AddStudents = () => {
  const { signUpWithEmail } = useAuth();
  const [teachers, setTeachers] = useState([]);
  const [department, setDepartment] = useState('');
  const [tutor, setTutor] = useState('');
  const [staffID, setStaffID] = useState('');
  const studentUserInitialValues = {
    name: '',
    rollno: '',
    photo: null,
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
    staffID: '',
  };

  useEffect(() => {
    async function getData() {
      const teachersRef = collection(db, 'teachers');
      const q = query(teachersRef, where('department', '==', department));
      const querySnapshot = await getDocs(q);
      setTeachers(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    }
    getData();
  }, [department]);
  return (
    <section>
      <Formik
        initialValues={studentUserInitialValues}
        onSubmit={(values) => {
          let photo = values.photo;
          let userData = values;
          delete userData.photo;
          signUpWithEmail(userData, photo, 'students');
          document.querySelector('#studentsUserData').reset();
        }}>
        {({ setFieldValue }) => (
          <Form id='studentsUserData' autoComplete='off'>
            <h1>Add Student</h1>

            <label>Name :</label>
            <Field type='text' name='name' required />

            <label>Roll No :</label>
            <Field type='text' name='rollno' required />

            <label>Department :</label>
            <Field
              as='select'
              name='department'
              value={department}
              required
              onChange={(e) => {
                setDepartment(e.target.value);
                setFieldValue('department', e.target.value);
              }}>
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

            <label>Photo :</label>
            <input
              type='file'
              name='photo'
              onChange={(e) => setFieldValue('photo', e.currentTarget.files[0])}
              required
            />

            <label>Email :</label>
            <Field type='email' name='email' required />

            <label>Password :</label>
            <Field type='password' name='password' required />

            <label>DoB :</label>
            <Field type='date' name='dob' required />

            <label>Father's Name :</label>
            <Field type='text' name='fatherName' required />

            <label>Phone Number :</label>
            <Field type='text' name='phoneNumber' required />

            <label>District :</label>
            <Field type='text' name='district' required />

            <label>State :</label>
            <Field type='text' name='state' required />

            <label>Country :</label>
            <Field type='text' name='country' required />

            <label>Address :</label>
            <Field as='textarea' name='address' required />

            <label>Batch :</label>
            <Field type='text' name='batch' required />

            <label>Program Co-ordinator :</label>
            <Field type='text' name='programeCoordinator' required />

            {department && (
              <>
                <label>Tutor :</label>
                <Field
                  as='select'
                  name='tutor'
                  onChange={(e) => {
                    setFieldValue('tutor', e.target.value);
                    setTutor(e.target.value);
                  }}
                  required>
                  <option selected>Select</option>
                  {teachers.map(({ name }, index) => (
                    <option value={name} key={index}>
                      {name}
                    </option>
                  ))}
                </Field>
              </>
            )}

            {department && tutor && (
              <>
                <label>Tutor's Staff ID :</label>
                <Field as='select' name='tutorID' disabled required>
                  {teachers.map((teacher, index) => {
                    setStaffID(teacher.name === tutor ? teacher.staffID : null);
                    return (
                      <option defaultValue={staffID} key={index}>
                        {staffID}
                      </option>
                    );
                  })}
                </Field>
              </>
            )}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default AddStudents;
