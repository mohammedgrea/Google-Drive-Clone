import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import AuthContainer from "../../components/auth/AuthContainer";

export default function Signin() {
  return (
    <AuthContainer>
      <SignContainer>
        <DriveLogo>
          <img src="/images/google-drive-logo.png" alt="google drive" />
          <span>google drive</span>
        </DriveLogo>
        <InputContainer>
          <Input type="emial" />
          <Label>adress email</Label>
        </InputContainer>
        <InputContainer>
          <Input type="password" />
          <Label>enter your password</Label>
        </InputContainer>
        <Button>Sign in</Button>
        <HaveAnAccount>
          Don't have an account ? <Link to="/signup">sign up</Link>
        </HaveAnAccount>
      </SignContainer>
    </AuthContainer>
  );
}

const SignContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid var(--secondaryBgColor); */
  background-color: var(--mainBgColor);
  padding: 24px 32px;
  border-radius: 16px;
  font-size: 16px;
`;

const DriveLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 8px;
  text-transform: capitalize;
  color: #434343;
  > img {
    width: 50px;
  }
  > span {
    margin-right: 20px;
  }
`;
const Label = styled.span`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  text-transform: capitalize;
  color: var(--secondaryBgColor);
  pointer-events: none;
  /* top: 0px;
  background-color: var(--mainBgColor);
  padding: 0 5px;
  font-size: 14px;
  color: var(--mainColor);
  font-weight: 400; */
`;
const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  height: 50px;
  width: 400px;
  border: 1px solid var(--secondaryBgColor);
  border-radius: 8px;
  padding-left: 20px;
  font-size: 18px;
  &:focus ${Label} {
    color: red;
  }
  @media (max-width: 768px) {
    height: 40px;
    width: 300px;
  }
`;
const Button = styled.button`
  cursor: pointer;
  height: 60px;
  width: 400px;
  background-color: var(--mainColor);
  border: none;
  border-radius: 8px;
  font-size: 18px;
  color: white;
  text-transform: capitalize;
  font-weight: 400;
  transition: var(--mainTransition);

  &:hover {
    background-color: var(--mainDarkColor);
  }
  @media (max-width: 768px) {
    height: 40px;
    width: 300px;
  }
`;

const HaveAnAccount = styled.div`
  font-size: 14px;

  > a {
    font-weight: bold;
    text-transform: capitalize;
  }
`;
