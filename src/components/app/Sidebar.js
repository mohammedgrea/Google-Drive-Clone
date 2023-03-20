import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSquareCheck,
  faHardDrive,
  faUserGroup,
  faClock,
  faStar,
  faTrashCan,
  faCloud,
  faGreaterThan,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import SliderOption from "./SliderOption";
import AddModel from "./AddModal";
import { useState } from "react";
import { useSideBarContext } from "../../context/SidebarContext";
export default function SideBar() {
  const { isSidebarHided, showOrhideSidebar } = useSideBarContext();
  const [stateModal, setModalState] = useState(false);
  function hideModal() {
    setModalState(false);
  }

  return (
    <SideBarContainer isSidebarHided={isSidebarHided}>
      <AddButton onClick={() => setModalState(true)}>
        <PlusIcon icon={faPlus} />
        <span>new</span>
      </AddButton>
      <ToggelButton onClick={showOrhideSidebar}>
        <ToggelButtonIcon icon={isSidebarHided ? faGreaterThan : faLessThan} />
      </ToggelButton>
      <AddModel stateModal={stateModal} showModal={hideModal} />
      <SliderOption icon={faSquareCheck} option="priority" />
      <SliderOption icon={faHardDrive} option="my drive" />
      <SliderOption icon={faDesktop} option="computer" />
      <SliderOption icon={faUserGroup} option="share with me" />
      <SliderOption icon={faClock} option="recent" />
      <SliderOption icon={faStar} option="shared" />
      <SliderOption icon={faTrashCan} option="trash" />
      <SliderOption icon={faCloud} option="storage" />
    </SideBarContainer>
  );
}

const SideBarContainer = styled.div`
  position: fixed;
  height: calc(100% - 60px);
  width: 200px;
  top: 60px;
  transform: ${(props) => (props.isSidebarHided ? "translateX(-200px)" : null)};
  background-color: var(--mainBgColor);
  transition: 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  @media (max-width: 992px) {
    box-shadow: 1px 0px 5px -6px rgba(0, 0, 0, 0.75);
  }
`;

const AddButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background-color: white;
  padding: 20px;
  margin: 20px 0px;
  border-radius: 16px;
  box-shadow: 1px 1px 3px -2px #000000, -1px -1px 3px -2px #000000;
  transition: var(--main-transition);

  &:hover {
    background-color: var(--hoverBgColor);
  }

  > span {
    font-size: 16px;
    text-transform: capitalize;
    margin-left: 15px;
    pointer-events: none;
  }
`;

const PlusIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: var(--mainIconColor);
`;
const ToggelButtonIcon = styled(FontAwesomeIcon)`
  font-size: 14px;
  color: var(--mainIconColor);
`;

const ToggelButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: -15px;
  top: 155px;
  border-radius: 300px;
  background-color: var(--mainBgColor);
  border: none;
  outline: none;
  padding: 20px;
  &:hover {
    transform: scale(1.1);
  }
  &:hover ${ToggelButtonIcon} {
    color: var(--mainDarkColor);
  }
`;
