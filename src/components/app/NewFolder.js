import styled from "styled-components/macro";
import { useEffect, useState, useRef } from "react";
import { addDoc } from "firebase/firestore";
import { collRef } from "../../firebase";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFolder, { ROOT_FOLDER } from "../../hooks/useFolder";
export default function NewFolder({
  isCreateFolderAppeared,
  showCreateFolderModal,
}) {
  const { folderId } = useParams();
  const { folder } = useFolder(folderId);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [stateFolder, setStateFolder] = useState(false);
  const [folderName, setFolderName] = useState("");
  const inputRef = useRef();

  function hideModal(e) {
    if (!inputRef.current?.contains(e.target)) {
      showCreateFolderModal();
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", hideModal);
  });
  useEffect(() => {
    setStateFolder(isCreateFolderAppeared);
  }, [isCreateFolderAppeared]);

  //Add New Folder
  if (folder === null) return;
  let path = [...folder?.path];
  if (folder !== ROOT_FOLDER) {
    path.push({ pathId: folder?.id, folderName: folder?.folderName });
  }
  function AddNewFolder(e) {
    e.preventDefault();
    addDoc(collRef, {
      folderName: folderName,
      userId: currentUser.uid,
      parentId: folder?.id,
      path: path,
    });
    setFolderName("");
    showCreateFolderModal();
  }
  return (
    <NewFolderContainer stateFolder={stateFolder}>
      <InputContainer onSubmit={AddNewFolder} ref={inputRef}>
        <FolderTitle>new folder</FolderTitle>
        <Input
          type="txt"
          value={folderName}
          placeholder="Untitled folder"
          onChange={({ target }) => setFolderName(target.value)}
        />
        <Btns>
          <Cancel type="button" onClick={showCreateFolderModal}>
            cancel
          </Cancel>
          <FolderCreate type="submit">create</FolderCreate>
        </Btns>
      </InputContainer>
    </NewFolderContainer>
  );
}

const NewFolderContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0px;
  top: 0px;
  background-color: var(--overlayColor);
  display: ${(props) => (props.stateFolder ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const InputContainer = styled.form`
  padding: 20px;
  background-color: white;
  border-radius: 8px;
`;
const Input = styled.input`
  width: 300px;
  height: 40px;
  font-size: 15px;
  padding-left: 15px;
  border-radius: 8px;
  margin-bottom: 30px;
  border: 1px solid var(--mainColor);
`;
const FolderTitle = styled.h3`
  font-weight: normal;
  text-transform: capitalize;
  margin-bottom: 20px;
`;
const Btns = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const FolderCreate = styled.button`
  cursor: pointer;
  border: none;
  font-size: 16px;
  background-color: transparent;
  text-transform: capitalize;
  color: var(--mainDarkColor);
  margin-left: 20px;
  transition: var(--main-transition);
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: var(--activeBgColor);
  }
`;
const Cancel = styled.button`
  cursor: pointer;
  border: none;
  font-size: 15px;
  background-color: transparent;
  text-transform: capitalize;
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  transition: var(--main-transition);
  &:hover {
    background-color: var(--activeBgColor);
  }
`;
