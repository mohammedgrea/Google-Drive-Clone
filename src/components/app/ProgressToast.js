import {
  faCircleCheck,
  faClose,
  faImage,
  faFileLines,
  faFilm,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { showTaost } from "../../store/progressSlice";

export default function ProgressToast({ progress }) {
  const [complet, setComplet] = useState(0);
  const dispatch = useDispatch();
  const showProgrssTaost = useSelector((state) => state.progress.showTaost);
  const fileInfo = useSelector((state) => state.progress.fileInfo);
  useEffect(() => {
    setComplet(progress);
  }, [progress]);

  function hideProgressToast() {
    dispatch(showTaost(false));
  }

  let format = "";
  if (
    fileInfo.includes(".png") ||
    fileInfo.includes(".jpeg") ||
    fileInfo.includes(".svg")
  ) {
    format = <MediaIcon icon={faImage} />;
  } else if (
    fileInfo.includes(".mp4") ||
    fileInfo.includes(".avi") ||
    fileInfo.includes(".mkv") ||
    fileInfo.includes(".mov") ||
    fileInfo.includes(".webm") ||
    fileInfo.includes(".ogg") ||
    fileInfo.includes(".mp4")
  ) {
    format = <MediaIcon icon={faFilm} />;
  } else if (fileInfo.includes(".pdf")) {
    format = <MediaIcon icon={faFilePdf} />;
  } else {
    format = (
      <MediaIcon icon={faFileLines} style={{ color: "var(--mainColor)" }} />
    );
  }
  return (
    <ProgressToastContainer showProgrssTaost={showProgrssTaost}>
      <HeaderProgressToast>
        {complet >= 100 ? (
          <HeaderLeftProgressToast>upload complete</HeaderLeftProgressToast>
        ) : (
          <HeaderLeftProgressToast>Uploading item</HeaderLeftProgressToast>
        )}
        <HeaderRightProgressToast>
          <CancelIcon icon={faClose} onClick={hideProgressToast} />
        </HeaderRightProgressToast>
      </HeaderProgressToast>
      <BodyProgressToast>
        {complet >= 100 ? null : (
          <StateProgress>
            <span>Starting uploading...</span>
            <CancelButton>Cancel</CancelButton>
          </StateProgress>
        )}
        <ProgressContainer>
          <FileInfo>
            {format}
            <Title>{fileInfo}</Title>
          </FileInfo>
          {complet >= 100 ? (
            <SuccessUploadIcon icon={faCircleCheck} />
          ) : (
            <ProgressCircle prog={progress}></ProgressCircle>
          )}
        </ProgressContainer>
      </BodyProgressToast>
    </ProgressToastContainer>
  );
}

const ProgressToastContainer = styled.div`
  background-color: white;
  border-color: var(--mainColor) var(--mainColor) transparent var(--mainColor);
  border-width: 3px;
  border-style: solid;
  width: 350px;
  position: fixed;
  left: 50%;
  bottom: -5px;
  border-radius: 16px 16px 0 0;
  transform: ${(props) =>
    props.showProgrssTaost ? "translate(-50%,0%)" : "translate(-50%,150%)"};
  transition: 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
`;
const HeaderProgressToast = styled.div`
  border-radius: 16px 16px 0 0;
  background-color: var(--mainBgColor);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const HeaderLeftProgressToast = styled.div``;
const HeaderRightProgressToast = styled.div``;
const CancelIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 20px;
  color: var(--mainIconColor);
`;
const BodyProgressToast = styled.div``;

const StateProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--mainDarkBgColor);
  padding: 10px 20px;
  > span {
    font-size: 13px;
  }
`;

const CancelButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--mainColor);
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const FileInfo = styled.div`
  display: flex;
  align-items: center;
`;

const MediaIcon = styled(FontAwesomeIcon)`
  color: red;
  margin-right: 20px;
  font-size: 18px;
`;
const SuccessUploadIcon = styled(FontAwesomeIcon)`
  color: var(--successColor);
  font-size: 20px;
`;
const Title = styled.div`
  font-weight: lighter;
  color: var(--mainTextColor);
  font-size: 14px;
`;

const ProgressCircle = styled.div`
  height: 20px;
  width: 20px;
  background-color: var(--mainColor);
  background: ${(props) => `conic-gradient(
    var(--mainColor) ${props.prog * 3.6}deg,
    var(--secondaryBgColor) ${props.prog * 3.6}deg
  )`};
  border-radius: 50%;
  position: relative;
  display: grid;
  place-items: center;
  &:after {
    content: "";
    position: absolute;
    height: 70%;
    width: 70%;
    background-color: white;
    border-radius: 50%;
  }
`;
