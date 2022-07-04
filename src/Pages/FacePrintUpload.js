import { arrayUnion, where } from 'firebase/firestore';
import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useFirestore } from '../Context/FirestoreContext';
import { loadModels, getFullFaceDescription } from './../api/faceapi';

const FacePrintUpload = () => {
  const { addData, getData, updateData } = useFirestore();
  useEffect(() => {
    loadModels();
  }, []);
  return (
    <>
      <section>
        <h2>Face Data Upload</h2>
      </section>
      <section>
        <Formik
          initialValues={{
            batch: '',
            department: '',
            photo: '',
            rollno: '',
          }}
          onSubmit={async (values) => {
            const fullFaceDescription = await getFullFaceDescription(
              values.photo
            );

            if (fullFaceDescription.length > 1) {
              alert('Upload a Image 1 face within it or Try Cropping the face');
              document.querySelector('#facePrintForm').reset();
              document.querySelector('#facePrintUpload').value = '';
            } else if (fullFaceDescription.length === 0) {
              alert('Upload a Image with a face');
              document.querySelector('#facePrintForm').reset();
              document.querySelector('#facePrintUpload').value = '';
            } else if (fullFaceDescription.length === 1) {
              let des = new Array(...fullFaceDescription[0].descriptor);
              const faceData = {
                rollno: values.rollno.toUpperCase(),
                batch: values.batch,
                department: values.department,
                face_data: [{ des, date: new Date().toLocaleString() }],
              };
              const data = await getData(
                'faceData',
                [where('rollno', '==', values.rollno)],
                true
              );
              console.log(data);
              if (data) {
                await updateData('faceData', data[0].uid, {
                  face_data: arrayUnion({
                    des,
                    date: new Date().toLocaleString(),
                  }),
                });
                document.querySelector('#facePrintForm').reset();
                document.querySelector('#facePrintUpload').value = '';
              } else {
                await addData('faceData', faceData);
                document.querySelector('#facePrintForm').reset();
                document.querySelector('#facePrintUpload').value = '';
              }
            }
          }}>
          {({ isSubmitting, setFieldValue }) => (
            <Form id='facePrintForm' autoComplete='off'>
              <label>Photo :</label>
              <input
                id='facePrintUpload'
                type='file'
                name='photo'
                onChange={(e) =>
                  setFieldValue(
                    'photo',
                    URL.createObjectURL(e.currentTarget.files[0])
                  )
                }
                required
              />
              <label>Roll No :</label>
              <Field type='text' name='rollno' required />
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

export default FacePrintUpload;
