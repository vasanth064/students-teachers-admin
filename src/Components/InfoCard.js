import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: none;
  justify-content: center;
  text-align: center;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  text-decoration: none;
  color: black;
  display: block;
  min-width: 20rem;
  padding: 0.5rem;
  overflow: hidden;
`;
const NameContainer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.04em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Name = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  text-align: center;
  width: min-content;
  word-wrap: break-word;
  letter-spacing: 0.07em;
`;

const Department = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  text-align: center;
  letter-spacing: 0.01em;
`;

const ProfileImage = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  object-fit: cover;
  vertical-align: middle;
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  backdrop-filter: blur(240px);
  border-radius: 50%;
`;

const InfoCard = ({ image, name, department, phoneNumber, email }) => {
  return (
    <Container>
      <ProfileImage alt={name} src={image} />
      <NameContainer>
        <Name>{name}</Name>
      </NameContainer>
      <Department>{department}</Department>
    </Container>
  );
};

export default InfoCard;
