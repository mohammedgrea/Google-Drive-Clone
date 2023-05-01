import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { deleteElement } from "../../store/selectSlice";
export default function Option({ icon, action }) {
  const value = useSelector((state) => state.select.files);
  const folders = useSelector((state) => state.select.folders);
  const count = useSelector((state) => state.select.count);
  const dispatch = useDispatch();
  function handelClick() {
    if (action === "delete") {
      dispatch(deleteElement([]));
    }
    if (action === "download") {
      // <a href={value[0].url} download></a>;
    }
  }
  return (
    <OptionContainer
      onClick={handelClick}
      style={{
        pointerEvents:
          action === "download" && folders.length > 0 ? "none" : "auto",
      }}
    >
      {action === "download" ? (
        <a href={value[0]?.url} target="_blank" download={value[0]?.name}>
          <Icon icon={icon} />
        </a>
      ) : (
        <Icon
          icon={icon}
          style={{
            color:
              action === "download" && folders.length > 0
                ? "var(--secondaryBgColor)"
                : "var(--mainIconColor)",
          }}
        />
      )}
    </OptionContainer>
  );
}

const OptionContainer = styled.button`
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
const Icon = styled(FontAwesomeIcon)`
  padding: 13px;
  color: var(--mainIconColor);
`;
