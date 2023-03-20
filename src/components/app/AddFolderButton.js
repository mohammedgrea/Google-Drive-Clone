import { memo, useState } from "react";
import styled from "styled-components/macro";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewFolder from "./NewFolder";

function AddFolderButton() {
  const [Folderstate, setFolderState] = useState(false);

  function showCreateFolderModal() {
    setFolderState(false);
  }
  return (
    <AddFolderContainer>
      <AddButton onClick={() => setFolderState(true)}>
        <Icon icon={faFolderPlus} />
        <span>Create folder</span>
      </AddButton>

      <NewFolder
        isCreateFolderAppeared={Folderstate}
        showCreateFolderModal={showCreateFolderModal}
      />
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
    pointer-events: none;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: var(--mainIconColor);
  pointer-events: none;
`;
