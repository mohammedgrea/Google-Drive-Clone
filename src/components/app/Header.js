import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCircleUser,
  faCircleXmark,
  faXRay,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <HeaderContainer>
      <LeftHeader>
        <DriveLogo>
          <img src="/images/google-drive-logo.png" alt="google drive" />
          <span>Drive</span>
        </DriveLogo>
      </LeftHeader>
      <MiddleHeader>
        <SearchContainer>
          <SearchIcon icon={faSearch} />
          <SearchInput type="txt" placeholder="Search in Drive" />
          <div>
            <ClearIcon icon={faCircleXmark} />
            <SearchOptionIcon icon={faXRay} />
          </div>
        </SearchContainer>
      </MiddleHeader>
      <RightHeader>
        <AvatarIcon icon={faCircleUser} />
      </RightHeader>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0 20px 0 30px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--mainBgColor);
  box-sizing: border-box;
`;
const LeftHeader = styled.div`
  flex: 0.2;
  margin-left: -20px;
`;
const DriveLogo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--mainTextColor);
  font-size: 22px;
  font-weight: 400;
  opacity: 0.8;
  @media (max-width: 768px) {
    font-size: 18px;
  }

  > img {
    width: 75px;
    @media (max-width: 768px) {
      width: 45px;
      margin-right: 5px;
    }
  }
  > span {
    margin-left: -10px;
  }
  &:hover {
    opacity: 1;
  }
`;
const MiddleHeader = styled.div`
  flex: 0.6;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--mainDarkBgColor);
  border-radius: 30px;
  height: 50px;
  width: 70%;
  padding: 5px;
  margin-inline: 10px;
  > div {
    display: flex;
    justify-content: flex-end;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const SearchInput = styled.input`
  width: 80%;
  font-size: 18px;
  background-color: transparent;
  height: 100%;
  border: none;
  outline: none;
  @media (max-width: 768px) {
    font-size: 15px;
    width: 90%;
  }
`;
const SearchIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  padding: 13px;
  color: var(--mainIconColor);
  font-size: 18px;
  margin-right: 5px;
  border-radius: 50%;
  &:hover {
    background-color: var(--secondaryIconColor);
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const ClearIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  padding: 13px;
  color: var(--mainIconColor);
  font-size: 18px;
  margin-right: 5px;
  border-radius: 50%;
  &:hover {
    background-color: var(--secondaryIconColor);
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const SearchOptionIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  padding: 13px;
  color: var(--mainIconColor);
  font-size: 18px;
  margin-right: 5px;
  border-radius: 50%;
  &:hover {
    background-color: var(--secondaryIconColor);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightHeader = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`;
const AvatarIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
