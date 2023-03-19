import styled from "styled-components/macro";
import { useEffect, useState, useRef } from "react";
export default function NewFolder({ isAppeared, showModal }) {
  const [state, setState] = useState(false);
  const inputRef = useRef();

  function hideModal(e) {
    e.stopPropagation();
    if (!e.target.contains(inputRef.current)) {
      showModal(true);
    }
  }
  useEffect(() => {
    document.addEventListener("click", hideModal);
  });
  useEffect(() => {
    setState(isAppeared);
  }, [isAppeared]);
  return (
    <NewFolderContainer state={state}>
      <InputContainer ref={inputRef}>
        <FolderTitle>new folder</FolderTitle>
        <Input type="text" placeholder="Untitled folder" />
        <Btns>
          <Cancel>cancel</Cancel>
          <FolderCreate>create</FolderCreate>
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
  display: ${(props) => (props.state ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;
const InputContainer = styled.div`
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
