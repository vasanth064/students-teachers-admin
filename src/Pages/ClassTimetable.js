import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirestore } from './../Context/FirestoreContext';

const ClassTimetable = () => {
  let navigate = useNavigate();
  const [timeTable, setTimetable] = useState([]);
  const { addData } = useFirestore();

  return (
    <>
      <section>
        <h2>Class TimeTable</h2>
      </section>
      <section>
        <Formik
          initialValues={{
            weekDay: '',
            hour: '',
            fromTime: '',
            toTime: '',
            courseCode: '',
            courseTitle: '',
            faculty: '',
          }}
          onSubmit={async (values) => {
            setTimetable((prevData) => [...prevData, values]);
            await document.querySelector('#addSubjects').reset();
          }}>
          {() => (
            <Form id='addSubjects'>
              <label>Day</label>
              <Field as='select' name='weekDay' required>
                <option>Select</option>
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='ThursDay'>ThursDay</option>
                <option value='Friday'>Friday</option>
              </Field>
              <label>Hour</label>
              <Field as='select' name='hour' required>
                <option>Select</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
              </Field>
              <label>From</label>
              <Field type='time' name='fromTime' required />
              <label>To</label>
              <Field type='time' name='toTime' required />
              <label>Course Code</label>
              <Field type='text' name='courseCode' required />
              <label>Course Title</label>
              <Field type='text' name='courseTitle' required />
              <label>Faculty InCharge</label>
              <Field type='text' name='faculty' required />
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
              <th>Week Day</th>
              <th>Hour</th>
              <th>From Time</th>
              <th>To Time</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Faculty InCharge</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {timeTable.map((item, index) => (
              <tr key={index}>
                <td>{item.weekDay}</td>
                <td>{item.hour}</td>
                <td>{item.fromTime}</td>
                <td>{item.toTime}</td>
                <td>{item.courseCode}</td>
                <td>{item.courseTitle}</td>
                <td>{item.faculty}</td>
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
          }}
          onSubmit={async (values) => {
            const data = {
              ...values,
              timeTable,
            };
            await addData('classTimetable', data);
            await document.querySelector('#examTimetable').reset();
            navigate('/');
          }}>
          {({ isSubmitting }) => (
            <Form id='examTimetable' autoComplete='off'>
              <label>Batch :</label>
              <Field as='select' name='batch' required>
                <option disabled>Select</option>
                <option value='2019'>2018</option>
                <option value='2019'>2019</option>
                <option value='2019'>2020</option>
                <option value='2019'>2021</option>
                <option value='2019'>2022</option>
              </Field>
              <label>Department :</label>
              <Field as='select' name='department' required>
                <option disabled>Select</option>
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
                <option disabled>Select</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
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

export default ClassTimetable;
