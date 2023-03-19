import React from "react";
import styled from "styled-components/macro";
import Breadcrumb from "./Breadcrumb";
import { useSideBarContext } from "../../context/SidebarContext";
export default function Navigation() {
  const { isSidebarHided } = useSideBarContext();
  console.log(isSidebarHided);

  return (
    <NavigationContainer isSidebarHided={isSidebarHided}>
      <Breadcrumb></Breadcrumb>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.div`
  position: fixed;
  height: 80px;
  width: ${(props) => (props.isSidebarHided ? "100%" : "calc(100% - 200px)")};
  top: 60px;
  margin-left: ${(props) => (props.isSidebarHided ? "2px" : "200px")};
  transition: 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  padding: 20px;
  background-color: white;
  border-radius: 16px 16px 0 0;
  @media (max-width: 992px) {
    width: 100%;
    margin-left: 0;
  }
`;
