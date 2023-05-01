import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useFolder, { ROOT_FOLDER } from "../../hooks/useFolder";

export default function Breadcrumb() {
  const { folderId } = useParams();
  const { folder } = useFolder(folderId);
  let path = folder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (folder) {
    path = [...path, ...folder.path];
  }
  const items = path.map((p, index) => (
    <Items key={p.pathId}>
      <Link
        to={{
          pathname: p.pathId ? `/folder/${p.pathId}` : "/",
          state: { p: { ...p, path: path.slice(1, index) } },
        }}
      >
        {p.folderName}
      </Link>
      <GreaterThanIcon icon={faGreaterThan} />
    </Items>
  ));
  return (
    folder && (
      <BreadcrumbContainer>
        {items}
        {folder && <Items>{folder.folderName} </Items>}
      </BreadcrumbContainer>
    )
  );
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
  > div:last-child ${GreaterThanIcon} {
    display: none;
  }
`;
const Items = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  font-weight: 500;
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
