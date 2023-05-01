import styled from "styled-components/macro";
import File from "./File";
import Folder from "./Folder";
import useFolder from "../../hooks/useFolder";
import { useParams } from "react-router-dom";
import ProgressToast from "../../components/app/ProgressToast";
import { useSelector } from "react-redux";
import useSelectorFileOrFolder from "../../hooks/useSelectorFileOrFolder";
import { useEffect } from "react";
import UploadOption from "./UploadOption";
export default function Content() {
  const { folderId } = useParams();
  const { childernFolder, childrenFiles } = useFolder(folderId);
  const value = useSelector((state) => state.progress.value);
  const isSidebarHided = useSelector((state) => state.sidebar.isSidebarHided);
  const folders = childernFolder?.map((childernFolder) => (
    <Folder childernFolder={childernFolder} key={childernFolder.id} />
  ));
  const file = childrenFiles?.map((childrenFiles) => (
    <File childrenFiles={childrenFiles} key={childrenFiles.id} />
  ));
  useEffect(() => {
    document.addEventListener("click", useSelectorFileOrFolder);
  });
  return (
    <ContentContainer isSidebarHided={isSidebarHided}>
      {/* <UploadOption /> */}
      {folders.length > 0 || file.length > 0 ? (
        <>
          {folders.length > 0 && <Title>Folders</Title>}
          <FoldersContainer>{folders}</FoldersContainer>
          {file.length > 0 && <Title>Files</Title>}
          <FileContainer>{file}</FileContainer>
        </>
      ) : (
        <Empty>
          <img src="/images/empty.png" alt="emepy" />
        </Empty>
      )}
      <ProgressToast progress={value} />
    </ContentContainer>
  );
}

const Empty = styled.div`
  height: calc(100vh - 160px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    pointer-events: none;
    width: 20%;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
const ContentContainer = styled.div`
  min-height: calc(100vh - 160px);
  width: ${(props) => (props.isSidebarHided ? "100%" : "calc(100% - 200px)")};
  margin-left: ${(props) => (props.isSidebarHided ? "0px" : " 200px")};
  transition: 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  padding: 20px;
  margin-top: 50px;
  background-color: white;
  border-radius: 0 0 16px 16px;
  box-sizing: border-box;

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
  @media (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Title = styled.div`
  color: var(--mainTextColor);
  font-size: 15px;
  margin: 0 10px 20px 10px; ;
`;
const FileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
