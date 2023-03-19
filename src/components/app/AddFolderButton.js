import { memo, useEffect, useRef, useState } from "react";
import styled from "styled-components/macro";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewFolder from "./NewFolder";

function AddFolderButton() {
  const [isAppeared, setIsAppeard] = useState(false);
  const [state, setState] = useState(false);

  useEffect(() => {
    setIsAppeard(state);
  }, [state]);

  function showModal() {
    setState(!state);
  }
  return (
    <AddFolderContainer>
      <AddButton onClick={showModal}>
        <Icon icon={faFolderPlus} />
        <span>Create folder</span>
      </AddButton>

      {/* <NewFolder isAppeared={isAppeared} showModal={showModal} /> */}
    </AddFolderContainer>
  );
}

export default memo(AddFolderButton);

const AddFolderContainer = styled.div``;

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
  }
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: var(--mainIconColor);
`;
