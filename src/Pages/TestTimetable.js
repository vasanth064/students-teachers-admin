import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirestore } from './../Context/FirestoreContext';

const TestTimetable = () => {
  let navigate = useNavigate();
  const [timeTable, setTimetable] = useState([]);
  const { addData } = useFirestore();
  return (
    <>
      <section>
        <h2>Test TimeTable</h2>
      </section>
      <section>
        <Formik
          initialValues={{
            date: '',
            slot: '',
            courseCode: '',
            courseTitle: '',
          }}
          onSubmit={async (values) => {
            setTimetable((prevData) => [...prevData, values]);
            await document.querySelector('#addSubjects').reset();
          }}>
          {() => (
            <Form id='addSubjects'>
              <label>Date</label>
              <Field type='date' name='date' required />
              <label>Course Code</label>
              <Field type='text' name='courseCode' required />
              <label>Course Title</label>
              <Field type='text' name='courseTitle' required />
              <label>Slot</label>
              <Field as='select' name='slot' required>
                <option>Select</option>
                <option value='F1'>F1</option>
                <option value='F2'>F2</option>
                <option value='F3'>F3</option>
                <option value='A1'>A1</option>
                <option value='A2'>A2</option>
                <option value='A3'>A3</option>
              </Field>
              <button type='submit'>ADD</button>
            </Form>
          )}
        </Formik>
      </section>
      <br />
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Slot</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {timeTable.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.slot}</td>
                <td>{item.courseCode}</td>
                <td>{item.courseTitle}</td>
                <td>
                  <button
                    onClick={() =>
                      setTimetable(timeTable.filter((i, sno) => sno !== index))
                    }>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <br />
      <section>
        <Formik
          initialValues={{
            batch: '',
            department: '',
            semester: '',
            testNo: '',
          }}
          onSubmit={async (values) => {
            const data = {
              ...values,
              timeTable,
            };
            await addData('testTimetable', data);
            await document.querySelector('#testTimetable').reset();
            navigate('/');
          }}>
          {({ isSubmitting }) => (
            <Form id='testTimetable' autoComplete='off'>
              <label>Batch :</label>
              <Field as='select' name='batch' required>
                <option>Select</option>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2019</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
              </Field>
              <label>Department :</label>
              <Field as='select' name='department' required>
                <option>Select</option>
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
              <label>Semester :</label>
              <Field as='select' name='semester' required>
                <option>Select</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
              </Field>
              <label>Test No :</label>
              <Field as='select' name='testNo' required>
                <option>Select</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </Field>
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default TestTimetable;
