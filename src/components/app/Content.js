import React from "react";
import styled from "styled-components";
import File from "./File";
import Folder from "./Folder";
import { useSideBarContext } from "../../context/SidebarContext";
export default function Content() {
  const { isSidebarHided } = useSideBarContext();

  return (
    <ContentContainer isSidebarHided={isSidebarHided}>
      <Folder />
      <File />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  width: ${(props) => (props.isSidebarHided ? "100%" : "calc(100% - 200px)")};
  margin-left: ${(props) => (props.isSidebarHided ? "2px" : " 200px")};
  transition: 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  padding: 20px;
  margin-top: 140px;
  background-color: white;
  border-radius: 0 0 16px 16px;
  @media (max-width: 992px) {
    width: 100%;
    margin-left: 0;
  }
`;
