import React from "react";
import styled from "styled-components/macro";

export default function UploadOption() {
  return (
    <UploadOptionContainer>
      <Block>
        <Title>Uploading Options</Title>
        <Disc>
          spidy.jpeg already exists in this location. Do you want to replace the
          existing file with a new version or keep both files? Replacing the
          file won't change sharing settings.
        </Disc>
        <Inputs>
          <InputContainer>
            <Input type="radio" />
            <Label>Replace existing file</Label>
          </InputContainer>
          <InputContainer>
            <Input type="radio" />
            <Label>Keep both files</Label>
          </InputContainer>
        </Inputs>
        <Btns>
          <UploadButton>Upload</UploadButton>
          <CancelButton>Cancel</CancelButton>
        </Btns>
      </Block>
    </UploadOptionContainer>
  );
}

const UploadOptionContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0px;
  top: 0px;
  background-color: var(--overlayColor);
  /* display: ${(props) => (props.stateFolder ? "flex" : "none")}; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const Block = styled.div`
  background-color: white;
  height: 350px;
  width: 500px;
  padding: 20px;
  border-radius: 8px;
`;
const Title = styled.h2`
  font-weight: normal;
  padding-block: 10px;
`;
const Disc = styled.p`
  line-height: 1.5;
`;
const Inputs = styled.div`
  margin-block: 20px;
`;
const InputContainer = styled.div`
  margin-block: 10px;
  display:flex:
  align-items:center;
`;
const Input = styled.input`
  background-color: red;
  height: 20px;
  width: 20px;
`;
const Label = styled.label`
  margin-left: 20px;
`;
const Btns = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const UploadButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: var(--mainDarkColor);
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
  transition: var(--mainTransition);
  &:hover {
    background-color: var(--mainColor);
  }
`;
const CancelButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
  background-color: white;
  color: var(--mainDarkColor);
  padding: 10px 20px;
  border-radius: 20px;
  transition: var(--mainTransition);
  &:hover {
    background-color: var(--mainBgColor);
  }
`;
