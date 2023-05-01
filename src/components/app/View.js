import {
  faArrowLeft,
  faImage,
  faFileLines,
  faFilm,
  faFilePd,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components/macro";

export default function View({ file, show, hideView }) {
  const extention = file.name.split(".")[1];
  let format = "";
  let icon = "";
  if (
    file.name.includes(".png") ||
    file.name.includes(".jpeg") ||
    file.name.includes(".jpg") ||
    file.name.includes(".svg")
  ) {
    format = (
      <Container>
        <img src={file.url} alt={file.name} />
      </Container>
    );
    icon = <MediaIcon icon={faImage} />;
  } else if (
    file.name.includes(".mp4") ||
    file.name.includes(".avi") ||
    file.name.includes(".mkv") ||
    file.name.includes(".mov") ||
    file.name.includes(".webm") ||
    file.name.includes(".ogg") ||
    file.name.includes(".mp4")
  ) {
    format = (
      <Container>
        <video src={file.url} alt={file.name} controls className="player" />
      </Container>
    );
    icon = <MediaIcon icon={faFilm} />;
  } else if (file.name.includes(".pdf")) {
    format = (
      <PdfContainer>
        <iframe src={`${file.url}#toolbar=0`}></iframe>
      </PdfContainer>
    );
    icon = <MediaIcon icon={faFilePdf} />;
  } else {
    format = (
      <PdfContainer>
        <iframe src={`${file.url}#toolbar=0`}></iframe>
      </PdfContainer>
    );
    icon = <MediaIcon icon={faFileLines} />;
  }
  function handelBackClick(e) {
    e.stopPropagation();

    hideView();
    if (
      extention === "mp4" ||
      extention === "avi" ||
      extention === "mkv" ||
      extention === "mov" ||
      extention === "webm" ||
      extention === "ogg"
    ) {
      document.querySelector(".player").pause();
    }
  }
  return (
    <ViewContainer show={show}>
      <BackContainer>
        <BackButton onClick={handelBackClick}>
          <BackIcon icon={faArrowLeft} />
        </BackButton>
        <FileNmae>
          {icon}
          {file.name}
        </FileNmae>
      </BackContainer>
      {format}
    </ViewContainer>
  );
}

const ViewContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: var(--overlayColor);
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 90%;
  > img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
  > video {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;

const PdfContainer = styled.div`
  width: 100%;
  height: 100%;

  > iframe {
    border: none;
    width: 100%;
    height: 100%;
  }
`;

const BackButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: 40px;
  width: 40px;
  background-color: transparent;
  outline: none;
  border-radius: 50%;
  &:hover {
    background-color: var(--secondaryTextColor);
  }
`;
const BackContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  color: white;
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 50px;
  padding-left: 10px;
  background-color: var(--overlayColor);
`;
const FileNmae = styled.div`
  align-items: center;
  display: flex;
  pointer-events: none;
`;
const BackIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: white;
`;
const MediaIcon = styled(FontAwesomeIcon)`
  color: red;
  padding: 7.5px;
  font-size: 20px;
`;
