import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export default function File() {
  const [isChecked, setIsChecked] = useState(false);
  function checkAction(e) {
    e.stopPropagation();
    setIsChecked(!isChecked);
  }
  return (
    <FileContainer>
      <Files onClick={() => setIsChecked(true)} state={isChecked}>
        <FileHeader>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={checkAction}
            />
          </CheckBoxContainer>
          <MediaIcon icon={faImage} />
          <Title>Google Draive</Title>
        </FileHeader>
        <ImageContainer>
          <img src="/images/image.jpeg" alt="google drive" />
        </ImageContainer>
      </Files>
      <Files onClick={() => setIsChecked(true)} state={isChecked}>
        <FileHeader>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={checkAction}
            />
          </CheckBoxContainer>
          <MediaIcon icon={faImage} />
          <Title>Google Draive</Title>
        </FileHeader>
        <ImageContainer>
          <img src="/images/image.jpeg" alt="google drive" />
        </ImageContainer>
      </Files>
      <Files onClick={() => setIsChecked(true)} state={isChecked}>
        <FileHeader>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={checkAction}
            />
          </CheckBoxContainer>
          <MediaIcon icon={faImage} />
          <Title>Google Draive</Title>
        </FileHeader>
        <ImageContainer>
          <img src="/images/image.jpeg" alt="google drive" />
        </ImageContainer>
      </Files>
      <Files onClick={() => setIsChecked(true)} state={isChecked}>
        <FileHeader>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={checkAction}
            />
          </CheckBoxContainer>
          <MediaIcon icon={faImage} />
          <Title>Google Draive</Title>
        </FileHeader>
        <ImageContainer>
          <img src="/images/image.jpeg" alt="google drive" />
        </ImageContainer>
      </Files>
      <Files onClick={() => setIsChecked(true)} state={isChecked}>
        <FileHeader>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={checkAction}
            />
          </CheckBoxContainer>
          <MediaIcon icon={faImage} />
          <Title>Google Draive</Title>
        </FileHeader>
        <ImageContainer>
          <img src="/images/image.jpeg" alt="google drive" />
        </ImageContainer>
      </Files>
      <Files onClick={() => setIsChecked(true)} state={isChecked}>
        <FileHeader>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={checkAction}
            />
          </CheckBoxContainer>
          <MediaIcon icon={faImage} />
          <Title>Google Draive</Title>
        </FileHeader>
        <ImageContainer>
          <img src="/images/image.jpeg" alt="google drive" />
        </ImageContainer>
      </Files>
      <Files onClick={() => setIsChecked(true)} state={isChecked}>
        <FileHeader>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={checkAction}
            />
          </CheckBoxContainer>
          <MediaIcon icon={faImage} />
          <Title>Google Draive</Title>
        </FileHeader>
        <ImageContainer>
          <img src="/images/image.jpeg" alt="google drive" />
        </ImageContainer>
      </Files>
      <Files onClick={() => setIsChecked(true)} state={isChecked}>
        <FileHeader>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={checkAction}
            />
          </CheckBoxContainer>
          <MediaIcon icon={faImage} />
          <Title>Google Draive</Title>
        </FileHeader>
        <ImageContainer>
          <img src="/images/image.jpeg" alt="google drive" />
        </ImageContainer>
      </Files>
      <Files onClick={() => setIsChecked(true)} state={isChecked}>
        <FileHeader>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={checkAction}
            />
          </CheckBoxContainer>
          <MediaIcon icon={faImage} />
          <Title>Google Draive</Title>
        </FileHeader>
        <ImageContainer>
          <img src="/images/image.jpeg" alt="google drive" />
        </ImageContainer>
      </Files>
      <Files onClick={() => setIsChecked(true)} state={isChecked}>
        <FileHeader>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={checkAction}
            />
          </CheckBoxContainer>
          <MediaIcon icon={faImage} />
          <Title>Google Draive</Title>
        </FileHeader>
        <ImageContainer>
          <img src="/images/image.jpeg" alt="google drive" />
        </ImageContainer>
      </Files>
      <Files onClick={() => setIsChecked(true)} state={isChecked}>
        <FileHeader>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={checkAction}
            />
          </CheckBoxContainer>
          <MediaIcon icon={faImage} />
          <Title>Google Draive</Title>
        </FileHeader>
        <ImageContainer>
          <img src="/images/image.jpeg" alt="google drive" />
        </ImageContainer>
      </Files>
      <Files onClick={() => setIsChecked(true)} state={isChecked}>
        <FileHeader>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={checkAction}
            />
          </CheckBoxContainer>
          <MediaIcon icon={faImage} />
          <Title>Google Draive</Title>
        </FileHeader>
        <ImageContainer>
          <img src="/images/image.jpeg" alt="google drive" />
        </ImageContainer>
      </Files>
    </FileContainer>
  );
}

const FileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  @media (max-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

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
  gap: 10px;
  align-items: center;
  padding-left: 10px;
  height: 20%;
`;

const Title = styled.div`
  font-weight: lighter;
  color: var(--mainTextColor);
  font-size: 16px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 80%;
  background-color: white;
  border-radius: 8px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;
