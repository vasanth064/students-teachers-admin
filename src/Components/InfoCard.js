import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Container = styled.div`
  border: none;
  justify-content: center;
  text-align: center;
  background: rgba(255, 249, 249, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  text-decoration: none;
  color: black;
  display: block;
  width: 35rem;
  max-width: 35rem;
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
  font-size: 2.4rem;
  line-height: 2.8rem;
  text-align: center;
  letter-spacing: 0.07em;
  margin-top: 1.5rem;
`;

const Department = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
  text-align: center;
  letter-spacing: 0.07em;
  margin: 1rem;
`;

const ProfileImage = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  vertical-align: middle;
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  backdrop-filter: blur(240px);
  border-radius: 75px;
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
  padding: 1.6rem 7rem;
  border-right: 1px solid white;
  background: #99add3;
  border-radius: 0px 0px 0px 20px;
`;
const Phone = styled.a`
  text-decoration: none;
  color: white;
  display: block;
  width: 50%;
  background-color: black;
  padding: 1.6rem 7rem;
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
          <IoIosMail size='3rem' />
        </Email>
        <Phone href={`tel:${phoneNumber}`}>
          <FaPhoneAlt size='2.5rem' />
        </Phone>
      </Footer>
    </Container>
  );
};

export default InfoCard;
