import React from "react";
import styled from "styled-components";

export default function AuthContainer({ children }) {
  return <AuthenticationContainer>{children}</AuthenticationContainer>;
}

const AuthenticationContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
