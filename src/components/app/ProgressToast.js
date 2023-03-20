import {
  faCircleCheck,
  faClose,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function ProgressToast() {
  const [test, setTest] = useState(90);
  const [complet, setComplet] = useState(0);
  useEffect(() => {
    setComplet(test);
  }, [test]);

  return (
    <ProgressToastContainer>
      {/* <button onClick={() => setTest(test + 1)}>Increase</button> */}
      <HeaderProgressToast>
        {complet >= 100 ? (
          <HeaderLeftProgressToast>upload complete</HeaderLeftProgressToast>
        ) : (
          <HeaderLeftProgressToast>Uploading item</HeaderLeftProgressToast>
        )}
        <HeaderRightProgressToast>
          <CancelIcon icon={faClose} />
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
            <MediaIcon icon={faImage} />
            <Title>Google Drive</Title>
          </FileInfo>
          {complet >= 100 ? (
            <SuccessUploadIcon icon={faCircleCheck} />
          ) : (
            <ProgressCircle progress={test}></ProgressCircle>
          )}
        </ProgressContainer>
      </BodyProgressToast>
    </ProgressToastContainer>
  );
}

const ProgressToastContainer = styled.div`
  background-color: white;
  border-color: var(--mainColor) var(--mainColor) transparent var(--mainColor);
  border-width: 2px;
  border-style: solid;
  width: 350px;
  position: fixed;
  right: 0;
  bottom: 0;
  border-radius: 16px 16px 0 0;
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
    var(--mainColor) ${props.progress * 3.6}deg,
    var(--secondaryBgColor) ${props.progress * 3.6}deg
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
