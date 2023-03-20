import {
  faCircleUser,
  faRightFromBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import styled from "styled-components";

export default function UserInfo({ showUserInfoPanel, hideUserInfoPanel }) {
  const userInfoPanelRef = useRef();
  function hide(e) {
    if (!userInfoPanelRef.current.contains(e.target) && showUserInfoPanel) {
      hideUserInfoPanel(e);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", hide);
  });
  return (
    <UserInfoContainer
      ref={userInfoPanelRef}
      showUserInfoPanel={showUserInfoPanel}
    >
      <span>This account is managed by gmail.com</span>
      <Container>
        <AccountContainer>
          <UserPicture>
            <AvatarIcon icon={faCircleUser} />
          </UserPicture>
          <EmailAndUserNameContainer>
            <UserName>Google Drive</UserName>
            <Email>google.drive@gmail.com</Email>
          </EmailAndUserNameContainer>
        </AccountContainer>
        <ManagerAccount>Manage your Google Account</ManagerAccount>
        <hr />
        <AddAnAccount>
          <AddAccountIcon icon={faUserPlus} />
          <span>Add another account</span>
        </AddAnAccount>
      </Container>
      <SignOutButton>
        <SignOutIcon icon={faRightFromBracket} />
        <span>Sign out</span>
      </SignOutButton>
      <hr />
      <TermsAndPrivacy>
        <Privacy>Privacy Policy</Privacy>
        <Terms>Terms of Service</Terms>
      </TermsAndPrivacy>
    </UserInfoContainer>
  );
}

const UserInfoContainer = styled.div`
  position: fixed;
  width: 400px;
  background-color: var(--mainDarkBgColor);
  right: 20px;
  top: 60px;
  border-radius: 16px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2), -2px 2px 6px rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.showUserInfoPanel ? "block" : "none")};
  flex-direction: column;
  > span {
    display: block;
    text-align: center;
    font-size: 12px;
    color: var(--secondaryTextColor);
    padding: 5px;
  }
  > hr {
    border: 1px solid var(--lightsecondaryBgColor);
  }
`;
const AccountContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 16px 16px 0 0;
`;
const UserPicture = styled.div`
  background-color: white;
`;
const EmailAndUserNameContainer = styled.div``;
const Email = styled.div`
  font-size: 14px;
  color: var(--secondaryTextColor);
`;
const UserName = styled.div`
  font-size: 18px;
  color: var(--mainTextColor);
  margin-bottom: 5px;
`;

const AvatarIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 60px;
  color: green;
`;

const ManagerAccount = styled.button`
  cursor: pointer;
  padding: 5px 0;
  width: 60%;
  margin-left: 90px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: none;
  border: 1px solid var(--mainIconColor);
  outline: none;
`;
const AddAnAccount = styled.button`
  display: flex;
  cursor: pointer;
  padding: 10px 20px;
  width: 100%;
  font-size: 14px;
  border-radius: 0 0 8px 8px;
  border: none;
  background-color: transparent;
  outline: none;
  color: var(--secondaryTextColor);
  transition: var(--mainTransition);
  &:hover {
    background-color: var(--activeBgColor);
  }
`;
const AddAccountIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin-right: 30px;
  color: var(--mainIconColor);
  margin-left: 10px;
`;

const Container = styled.div`
  margin: 0 10px;
  border-radius: 16px;
  background-color: white;
  > hr {
    border: 1px solid var(--lightsecondaryBgColor);
  }
`;

const SignOutButton = styled.button`
  display: flex;
  cursor: pointer;
  padding: 15px 40px;
  width: 100%;
  font-size: 14px;
  border: none;
  background-color: transparent;
  outline: none;
  color: var(--secondaryTextColor);
  transition: var(--mainTransition);
  &:hover {
    background-color: var(--activeBgColor);
  }
`;

const SignOutIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin-right: 30px;
  color: var(--mainIconColor);
`;

const TermsAndPrivacy = styled.div`
  padding: 20px;
  margin: 0 auto;
`;

const Terms = styled.button`
  border: none;
  outline: none;
  font-size: 11px;
  font-weight: lighter;
  background-color: transparent;
  color: var(--secondaryTextColor);
  padding: 5px;
  border-radius: 4px;
  &:hover {
    background-color: var(--activeBgColor);
  }
`;
const Privacy = styled.button`
  border: none;
  outline: none;
  font-size: 11px;
  font-weight: lighter;
  background-color: transparent;
  color: var(--secondaryTextColor);
  padding: 5px;
  border-radius: 4px;
  &:hover {
    background-color: var(--activeBgColor);
  }
`;
