import React from "react";
import styled from "styled-components/macro";
import Breadcrumb from "./Breadcrumb";
import { useSelector } from "react-redux";
import Options from "./Options";
export default function Navigation() {
  const isSidebarHided = useSelector((state) => state.sidebar.isSidebarHided);
  const count = useSelector((state) => state.select.count);
  return (
    <NavigationContainer isSidebarHided={isSidebarHided}>
      {count > 0 ? <Options /> : <Breadcrumb />}
    </NavigationContainer>
  );
}

const NavigationContainer = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  height: 60px;
  width: ${(props) => (props.isSidebarHided ? "100%" : "calc(100% - 220px)")};
  margin-left: ${(props) => (props.isSidebarHided ? "0px" : " 200px")};
  top: 60px;
  transition: 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  padding: 20px;
  background-color: white;
  border-radius: 16px 16px 0 0;
  @media (max-width: 992px) {
    width: 100%;
    margin-left: 0;
  }
`;
