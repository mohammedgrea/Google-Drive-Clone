import { memo, useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc } from "firebase/firestore";
import { storage, fileColRef } from "../../firebase";
import { ROOT_FOLDER } from "../../hooks/useFolder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setProgress, showTaost, getFileInfo } from "../../store/progressSlice";
import styled from "styled-components";

function AddFileButton({ currentFolder }) {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const newPath = [];
  const [isActive, setIsActive] = useState(true);
  const [changeFile, setChangeFile] = useState(true);
  useEffect(() => {
    if (!isActive) {
      document.querySelector(".btn").click();
    }
    setIsActive(false);
  }, [changeFile]);

  for (let path of currentFolder.path) {
    const { name } = path;
    newPath.push(name);
  }

  function addFile(e) {
    e.preventDefault();
    const file = e.target[0].files[0];
    upload(file);
  }

  function upload(file) {
    if (!file) return;

    dispatch(getFileInfo(file.name));
    dispatch(showTaost(true));
    const filePath =
      currentFolder === ROOT_FOLDER
        ? `${newPath.join("/")}`
        : `${newPath.join("/")}/${currentFolder.name}`;
    const storageRef = ref(storage, `files/${filePath}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        dispatch(setProgress(prog));
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          try {
            addDoc(fileColRef, {
              url: url,
              name: file.name,
              parentId: currentFolder.id,
              userId: currentUser.uid,
              path: filePath,
            });
          } catch (error) {
            alert(error.message);
          }
        });
      }
    );
  }

  return (
    <AddFileContainer>
      <form onSubmit={addFile}>
        <FileInput
          type="file"
          hidden
          className="input-file"
          onChange={() => setChangeFile(!changeFile)}
        />
        <AddButton
          type="submit"
          className="btn"
          disabled={isActive}
          onClick={() => document.querySelector(".input-file").click()}
        >
          <Icon icon={faFileArrowUp} />
          <span>Upload file</span>
        </AddButton>
      </form>
    </AddFileContainer>
  );
}

export default memo(AddFileButton);

const AddFileContainer = styled.div``;

const AddButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
  outline: none;
  border: none;
  padding: 5px 20px;
  transition: var(--mainTransition);
  &:hover {
    background-color: var(--lightsecondaryBgColor);
  }
  > span {
    margin-left: 10px;
    pointer-events: none;
  }
`;

const FileInput = styled.input``;
const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: var(--mainIconColor);
  pointer-events: none;
`;
