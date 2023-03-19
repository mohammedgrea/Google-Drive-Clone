import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Breadcrumb() {
  const nav = ["My Drive", "new folder", "New folder"];
  const items = nav?.map((item) => (
    <Items>
      <Link>{item}</Link>
      <GreaterThanIcon icon={faGreaterThan} />
    </Items>
  ));
  return <BreadcrumbContainer>{items}</BreadcrumbContainer>;
}

const GreaterThanIcon = styled(FontAwesomeIcon)`
  font-size: 15px;
  color: var(--mainIconColor);
  @media (max-width: 992px) {
    font-size: 11px;
  }
`;
const BreadcrumbContainer = styled.div`
  font-size: 18px;
  letter-spacing: 1.2px;
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 992px) {
    gap: 5px;
  }
  > div:last-child a {
    color: var(--mainColor);
  }
  > div:last-child ${GreaterThanIcon} {
    display: none;
  }
`;
const Items = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 992px) {
    letter-spacing: 1px;
    font-size: 16px;
    gap: 5px;
  }
  @media (max-width: 768px) {
    letter-spacing: 1px;
    font-size: 13px;
    gap: 5px;
  }
  > a {
    font-weight: 500;
    cursor: pointer;
    padding: 5px 15px;
    color: var(--mainTextColor);
    border-radius: 20px;
    transition: var(--mainTransition);
    &:hover {
      background-color: var(--lightsecondaryBgColor);
    }
  }
`;
