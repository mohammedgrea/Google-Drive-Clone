import {
  faCloudArrowDown,
  faEllipsisVertical,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import Option from "./Option";
import { useDispatch, useSelector } from "react-redux";
import { checkAll } from "../../store/checkAllSlice";
export default function Options() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.select.count);
  return (
    <OptionContainer>
      <InputContainer>
        <Input type="checkbox" onChange={() => dispatch(checkAll())} />
      </InputContainer>
      <span>{count} selected</span>
      <Option icon={faCloudArrowDown} action="download" />
      <Option icon={faTrashCan} action="delete" />
      <Option icon={faEllipsisVertical} />
    </OptionContainer>
  );
}

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > span {
    font-size: 18px;
    font-weight: 400;
    color: var(--mainIconColor);
    @media (max-width: 769px) {
      font-size: 15px;
    }
  }
`;

const InputContainer = styled.button`
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
    background-color: var(--secondaryIconColor);
  }
`;
const Input = styled.input`
  height: 20px;
  width: 15px;
`;
