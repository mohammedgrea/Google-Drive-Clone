import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components/macro";
import AuthContainer from "../../components/auth/AuthContainer";

export default function Signin() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [errors, setErros] = useState({});
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  function handelDemoMode() {
    dispatch(
      login({
        email: process.env.REACT_APP_DEMO_EMAIL,
        password: process.env.REACT_APP_DEMO_PASSWORD,
      })
    );
  }
  function hundelSubmit(e) {
    e.preventDefault();
    setErros(emailRef.current.value, passwordRef.current.value);
    dispatch(
      login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
  }

  return (
    <>
      <AuthContainer>
        <SignContainer onSubmit={hundelSubmit}>
          <DriveLogo>
            <img src="/images/google-drive-logo.png" alt="google drive" />
            <span>google drive</span>
          </DriveLogo>
          <InputContainer>
            <Input type="emial" ref={emailRef} required />
            {errors.email && <p>{errors.email}</p>}
            <Label>adress email</Label>
          </InputContainer>
          <InputContainer>
            <Input type="password" ref={passwordRef} required />
            {errors.password && <p>{errors.password}</p>}
            <Label>enter your password</Label>
          </InputContainer>
          <SubmitButton type="submit">Sign in</SubmitButton>
          <DemoButton type="button" onClick={handelDemoMode}>
            Use without sign in
          </DemoButton>
          <HaveAnAccount>
            Don't have an account ? <Link to="/signup">sign up</Link>
          </HaveAnAccount>
        </SignContainer>
        {currentUser && <Navigate to="/" />}
      </AuthContainer>
    </>
  );
}

const SignContainer = styled.form`
  cursor: pointer;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--lightsecondaryBgColor);
  background-color: var(--mainBgColor);
  padding: 24px 20px;
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
  color: var(--mainTextColor);
  > img {
    width: 50px;
  }
  > span {
    margin-right: 20px;
  }
`;
const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  text-transform: capitalize;
  color: var(--secondaryBgColor);
  pointer-events: none;
  transition: 0.07s cubic-bezier(0.17, 0.67, 0.83, 0.67);
`;
const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  height: 50px;
  width: 400px;
  border: 1px solid var(--secondaryBgColor);
  border-radius: 8px;
  outline: var(--mainColor);
  padding-left: 20px;
  font-size: 18px;
  &:focus ~ label,
  &:valid ~ label {
    transform: translateY(-35px);
    background-color: var(--mainBgColor);
    padding: 3px 5px;
    font-size: 14px;
    color: var(--mainColor);
    font-weight: 400;
  }
  @media (max-width: 768px) {
    height: 40px;
    width: 300px;
  }
`;
const SubmitButton = styled.button`
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
const DemoButton = styled.button`
  cursor: pointer;
  height: 60px;
  width: 400px;
  background-color: transparent;
  border: 1px solid var(--mainDarkColor);
  border-radius: 8px;
  font-size: 18px;
  color: var(--mainDarkColor);
  text-transform: capitalize;
  font-weight: 400;
  transition: var(--mainTransition);

  &:hover {
    background-color: var(--mainDarkColor);
    color: white;
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
    color: var(--mainColor);
  }
`;
