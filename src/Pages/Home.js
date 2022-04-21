import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../Config/firebaseConfig';
import InfoCard from '../Components/InfoCard';

const Home = styled.div``;
const SearchResultsContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  flex-wrap: wrap;
  gap: 6rem;
  justify-content: center;
`;

const SearchCard = () => {
  const [teachers, setTeachers] = useState();
  const [students, setStudents] = useState();

  useEffect(() => {
    async function getData(table) {
      const dataRef = collection(db, table);
      const querySnapshot = await getDocs(dataRef);
      setTeachers(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    }
    getData('teachers');
  }, []);
  useEffect(() => {
    async function getData(table) {
      const dataRef = collection(db, table);
      const querySnapshot = await getDocs(dataRef);
      setStudents(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    }
    getData('students');
  }, []);
  return (
    <Home>
      <br />
      <header>
        <h1>Students</h1>
      </header>
      <SearchResultsContainer>
        {students &&
          students.map((item, index) => (
            <InfoCard
              key={index}
              image={item.photo}
              name={item.name}
              department={item.department}
              phoneNumber={item.phoneNumber}
              email={item.email}
            />
          ))}
      </SearchResultsContainer>
      <br />
      <header>
        <h1>Teachers</h1>
      </header>
      <SearchResultsContainer>
        {teachers &&
          teachers.map((item, index) => {
            return (
              <InfoCard
                key={index}
                image={item.photo}
                name={item.name}
                department={item.department}
                phoneNumber={item.phoneNumber}
                email={item.email}
              />
            );
          })}
      </SearchResultsContainer>
    </Home>
  );
};

export default SearchCard;
