import React from "react";
import styled from "styled-components";
import File from "./File";
import Folder from "./Folder";
import { useSideBarContext } from "../../context/SidebarContext";
export default function Content() {
  const { isSidebarHided } = useSideBarContext();
  const arr = [
    { folderName: "mohammed", id: 1 },
    { folderName: "new folder", id: 2 },
    { folderName: "movies", id: 2 },
  ];
  const folders = arr.map((folder) => (
    <Folder folderName={folder.folderName} key={folder.id} />
  ));
  return (
    <ContentContainer isSidebarHided={isSidebarHided}>
      <FoldersContainer>{folders}</FoldersContainer>
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
const FoldersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 32px;
  @media (max-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
