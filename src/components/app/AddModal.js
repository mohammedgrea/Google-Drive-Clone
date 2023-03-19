import { useEffect, useState, useRef } from "react";
import styled from "styled-components/macro";

import AddFolderButton from "./AddFolderButton";

export default function AddModel({ isAppeared, showModal, buttonRef }) {
  const [state, setState] = useState(false);
  const modalRef = useRef();
  function hideModal(e) {
    e.stopPropagation();
    if (!e.target.contains(modalRef.current) && !e.target.contains(buttonRef)) {
      showModal();
    }
  }
  useEffect(() => {
    document.addEventListener("click", hideModal);
  });
  useEffect(() => {
    setState(isAppeared);
  }, [isAppeared]);
  return (
    <ModalContainer state={state} ref={modalRef}>
      {/* <AddFolderButton /> */}
      <hr />
      {/* <AddFolderButton /> */}
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

const CancelButton = styled.button`
  margin: 20px 15px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: -10px;
  border: none;
  background-color: transparent;
`;
