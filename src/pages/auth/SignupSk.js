import { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components/macro";
import AuthContainer from "../../components/auth/AuthContainer";
import { useDispatch, useSelector } from "react-redux";
import { logup } from "../../store/authSlice";
import { MoonLoader } from "react-spinners";
export default function Signup() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const loading = useSelector((state) => state.auth.loading);
  const load = JSON.parse(localStorage.getItem("loading"));
  const dispatch = useDispatch();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  function handelSubmit(e) {
    e.preventDefault();
    dispatch(
      logup({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
    // setLoading(true);
  }
  useEffect(() => {
    if (loading) localStorage.setItem("loading", JSON.stringify("logged"));
  }, [loading]);
  return (
    <AuthContainer>
      {loading || load === "logged" ? (
        <MoonLoader color="#4688f4" />
      ) : (
        <SignContainer onSubmit={handelSubmit}>
          <DriveLogo>
            <img src="/images/google-drive-logo.png" alt="google drive" />
            <span>google drive</span>
          </DriveLogo>
          <InputContainer>
            <Input type="txt" ref={usernameRef} required />
            <Label>user name</Label>
          </InputContainer>
          <InputContainer>
            <Input type="emial" ref={emailRef} required />
            <Label>adress email</Label>
          </InputContainer>
          <InputContainer>
            <Input type="password" ref={passwordRef} required />
            <Label>enter your password</Label>
          </InputContainer>
          <InputContainer>
            <Input type="password" ref={passwordRef} required />
            <Label>confirm your password</Label>
          </InputContainer>
          <Button type="submit">Create an account</Button>
          <HaveAnAccount>
            Have an account ? <Link to="/signin">sign in</Link>
          </HaveAnAccount>
        </SignContainer>
      )}

      {currentUser && <Navigate to="/" />}
    </AuthContainer>
  );
}

const SignContainer = styled.form`
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
  color: #434343;
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
  outline: var(--mainColor);
  border-radius: 8px;
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
    color: var(--mainColor);
  }
`;
