import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

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
  min-width: 25rem;
  padding-top: 2rem;
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
  gap: 1rem;
`;
const Name = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.8rem;
  text-align: center;
  letter-spacing: 0.07em;
`;

const Department = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
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
const Footer = styled.div`
  display: flex;
  width: 100%;
`;
const Email = styled.a`
  text-decoration: none;
  display: block;
  width: 50%;
  color: white;
  background-color: black;
  display: flex;
  place-content: center;
  padding: 0.75rem 0;
  border-right: 1px solid white;
  background: #99add3;
  border-radius: 0px 0px 0px 20px;
`;
const Phone = styled.a`
  text-decoration: none;
  color: white;
  display: block;
  display: flex;
  place-content: center;
  width: 50%;
  background-color: black;
  padding: 0.75rem 0;
  background: #99add3;
`;

const InfoCard = ({ image, name, department, phoneNumber, email }) => {
  return (
    <Container>
      <ProfileImage alt={name} src={image} />
      <NameContainer>
        <Name>{name}</Name>
      </NameContainer>
      <Department>{department}</Department>
      <Footer>
        <Email href={`mailto:${email}`}>
          <IoIosMail size='2.5rem' />
        </Email>
        <Phone href={`tel:${phoneNumber}`}>
          <FaPhoneAlt size='2rem' />
        </Phone>
      </Footer>
    </Container>
  );
};

export default InfoCard;
