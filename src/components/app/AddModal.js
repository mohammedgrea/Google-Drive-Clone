import { useEffect, useState, useRef } from "react";
import styled from "styled-components/macro";

import AddFolderButton from "./AddFolderButton";

export default function AddModel({ stateModal, showModal }) {
  const [state, setState] = useState(false);
  const modalRef = useRef();
  function hideModal(e) {
    if (!modalRef.current.contains(e.target)) {
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
      <AddFolderButton />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  background-color: white;
  width: 120%;
  display: ${(props) => (props.state ? "block" : "none")};
  padding: 10px 0;
  border-radius: 8px;
  box-shadow: 1px -1px 20px 1px rgba(0, 0, 0, 0.2);
  z-index: 100;
  > hr {
    border: 1px solid var(--lightsecondaryBgColor);
  }
`;
