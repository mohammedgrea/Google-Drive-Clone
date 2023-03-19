import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components/macro";
export default function SliderOption({ icon, option }) {
  return (
    <SliderOptionContainer>
      <Option>
        <SideBarIcon icon={icon} />
        <span>{option}</span>
      </Option>
    </SliderOptionContainer>
  );
}

const SliderOptionContainer = styled.div`
  margin: 5px 0;
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  border-radius: 0 20px 20px 0;
  transition: var(--main-transition);
  &:hover {
    background-color: var(--light-gray);
  }
  > span {
    font-size: 13px;
    color: var(--dark-gray);
    font-weight: liq;
    text-transform: capitalize;
    margin-left: 15px;
  }
`;
const SideBarIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
`;
