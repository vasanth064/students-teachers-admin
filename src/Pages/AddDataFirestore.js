import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useFirestore } from '../Context/FirestoreContext';

const AddDataFirestore = () => {
  let navigate = useNavigate();
  const { addData } = useFirestore();
  return (
    <section>
      <Formik
        initialValues={{
          tableName: '',
          data: '',
        }}
        onSubmit={async (values) => {
          const table = values.tableName;
          const data = JSON.parse(values.data);
          const dataAddRef = await addData(table, data);
          alert(dataAddRef);
          await document.querySelector('#tableData').reset();
          navigate('/');
        }}>
        {({ isSubmitting }) => (
          <Form id='tableData' autoComplete='off'>
            <h1>Add Data</h1>
            <label>Table Name :</label>
            <Field type='text' name='tableName' required />
            <label>Data :</label>
            <Field type='text' name='data' required as='textarea' rows='20' />
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default AddDataFirestore;
