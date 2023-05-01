import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faFileLines,
  faFilm,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { addfiles, removeFiles } from "../../store/selectSlice";
import { useDispatch } from "react-redux";
import View from "./View";

export default function File({ childrenFiles }) {
  const [isChecked, setIsChecked] = useState(false);
  const [showViewFile, setShowViewFile] = useState(false);
  const dispatch = useDispatch();
  function checkAction(e) {
    e.stopPropagation();
    setIsChecked(!isChecked);
  }

  const extention = childrenFiles.name.split(".")[1];
  let format = "";
  let file = "";
  if (
    childrenFiles.name.includes(".png") ||
    childrenFiles.name.includes(".jpeg") ||
    childrenFiles.name.includes(".jpg") ||
    childrenFiles.name.includes(".svg")
  ) {
    format = <MediaIcon icon={faImage} />;
    file = (
      <img
        src={childrenFiles.url}
        alt={childrenFiles.name}
        extention={extention}
      />
    );
  } else if (
    childrenFiles.name.includes(".mp4") ||
    childrenFiles.name.includes(".avi") ||
    childrenFiles.name.includes(".mkv") ||
    childrenFiles.name.includes(".mov") ||
    childrenFiles.name.includes(".webm") ||
    childrenFiles.name.includes(".ogg") ||
    childrenFiles.name.includes(".mp4")
  ) {
    format = <MediaIcon icon={faFilm} />;
    file = (
      <video
        src={childrenFiles.url}
        alt={childrenFiles.name}
        extention={extention}
      />
    );
  } else if (childrenFiles.name.includes(".pdf")) {
    format = <MediaIcon icon={faFilePdf} />;
    file = (
      <iframe
        src={`${childrenFiles.url}&embedded=true`}
        alt={childrenFiles.name}
        extention={extention}
      ></iframe>
    );
  } else {
    format = (
      <MediaIcon icon={faFileLines} style={{ color: "var(--mainColor)" }} />
    );
    file = (
      <iframe
        src={`${childrenFiles.url}&embedded=true`}
        alt={childrenFiles.name}
        extention={extention}
      ></iframe>
    );
  }

  useEffect(() => {
    if (isChecked) {
      dispatch(addfiles(childrenFiles));
    } else {
      dispatch(removeFiles(childrenFiles));
    }
  }, [isChecked]);
  function handelDubleClick() {
    setShowViewFile(true);
  }
  function hideView() {
    setShowViewFile(false);
  }
  return (
    <Files state={isChecked} onClick={handelDubleClick}>
      <FileHeader>
        <CheckBoxContainer>
          <CheckBox type="checkbox" checked={isChecked} onClick={checkAction} />
        </CheckBoxContainer>
        <>{format}</>
        <Title>
          {childrenFiles.name.length > 15
            ? childrenFiles.name.substring(0, 15) + "..."
            : childrenFiles.name}
        </Title>
      </FileHeader>
      <ImageContainer>{file}</ImageContainer>
      {childrenFiles && (
        <View file={childrenFiles} show={showViewFile} hideView={hideView} />
      )}
    </Files>
  );
}

const MediaIcon = styled(FontAwesomeIcon)`
  color: red;
  padding: 7.5px;
  font-size: 20px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  transition: var(--mainTransition);
  &:hover {
    background-color: var(--mainBgColor);
  }
`;
const CheckBox = styled.input`
  border-width: 2px;
  border-radius: 2px;
  height: 14px;
  width: 14px;
`;
const Files = styled.div`
  cursor: pointer;
  height: 250px;
  background-color: ${(props) =>
    props.state ? " var(--activeBgColor)" : "var(--mainDarkBgColor)"};
  border-radius: 16px;
  padding: 10px;
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
const FileHeader = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  height: 20%;
`;

const Title = styled.div`
  font-weight: lighter;
  color: var(--mainTextColor);
  font-size: 12px;
  pointer-events: none;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 80%;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  > img,
  iframe,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    pointer-events: none;
  }
  > iframe {
    width: 106%;
    height: 100%;
    pointer-events: none;
  }
`;
