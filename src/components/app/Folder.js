import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addFolders, removeFolders, resetState } from "../../store/selectSlice";
import { useDispatch } from "react-redux";
export default function Folder({ childernFolder }) {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const folderRef = useRef();
  const navigate = useNavigate();
  function checkAction(e) {
    e.stopPropagation();
    setIsChecked(!isChecked);
  }

  useEffect(() => {
    if (isChecked) {
      dispatch(addFolders(childernFolder));
    } else {
      dispatch(removeFolders(childernFolder));
    }
  }, [isChecked, childernFolder]);
  function handelDubleClick() {
    navigate(`/folder/${childernFolder.id}`);
    dispatch(resetState({ count: 0, emptyArray: [] }));
  }
  return (
    <FolderContainer
      key={childernFolder.id}
      state={isChecked}
      onDoubleClick={handelDubleClick}
      ref={folderRef}
    >
      <CheckBoxContainer>
        <CheckBox type="checkbox" checked={isChecked} onChange={checkAction} />
      </CheckBoxContainer>
      <MediaIcon icon={faFolder} />
      <Title>
        {childernFolder.folderName?.length > 15
          ? childernFolder.folderName.substring(0, 15) + "..."
          : childernFolder.folderName}
      </Title>
    </FolderContainer>
  );
}

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 20px;
  width: 20px;
  padding: 20px;
  border-radius: 50%;
  transition: var(--mainTransition);
  display: none;
  &:hover {
    background-color: var(--mainBgColor);
  }
`;
const MediaIcon = styled(FontAwesomeIcon)`
  color: var(--mainIconColor);
  padding: 10px;
  font-size: 18px;
`;

const FolderContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${(props) =>
    props.state ? " var(--activeBgColor)" : "var(--mainDarkBgColor)"};
  border-radius: 8px;
  height: 60px;
  padding-left: 10px;
  transition: var(--mainTransition);

  ${CheckBoxContainer} {
    display: ${(props) => (props.state ? "flex" : "none")};
  }
  ${MediaIcon} {
    display: ${(props) => (props.state ? "none" : "flex")};
  }
  &:hover {
    background-color: ${(props) =>
      props.state ? " var(--activeBgColor)" : "var(--hoverBgColor)"};
  }
  &:hover ${CheckBoxContainer} {
    display: flex;
  }
  &:hover ${MediaIcon} {
    display: none;
  }
`;

const CheckBox = styled.input`
  border-width: 2px;
  border-radius: 2px;
  height: 14px;
  width: 14px;
`;

const Title = styled.div`
  font-weight: bold;
  color: var(--mainTextColor);
  font-size: 13px;
  pointer-events: none;
`;
