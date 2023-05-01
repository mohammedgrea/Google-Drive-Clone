import { useEffect, useState, useRef } from "react";
import styled from "styled-components/macro";
import AddFileButton from "./AddFileButton";
import AddFolderButton from "./AddFolderButton";
import useFolder from "../../hooks/useFolder";
import { useParams } from "react-router-dom";
export default function AddModal({ stateModal, showModal }) {
  const { folderId } = useParams();
  const { folder } = useFolder(folderId);
  const [state, setState] = useState(false);
  const modalRef = useRef();
  function hideModal(e) {
    if (!modalRef.current?.contains(e.target)) {
      showModal();
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", hideModal);
  });
  useEffect(() => {
    setState(stateModal);
  }, [stateModal]);
  return (
    <ModalContainer state={state} ref={modalRef}>
      <AddFolderButton />
      <hr />
      {folder && <AddFileButton currentFolder={folder} />}
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 300px;
  display: ${(props) => (props.state ? "block" : "none")};
  padding: 10px 0;
  border-radius: 8px;
  box-shadow: 1px -1px 20px 1px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  background-color: white;
  > hr {
    border: 1px solid var(--lightsecondaryBgColor);
  }
`;
