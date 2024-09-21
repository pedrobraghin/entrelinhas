import styled from "styled-components";
import { ContentOpen } from "./Dashboard/ContentOpen";
import { useState } from "react";
import { EditProfileMenu } from "./Profile/EditProfileMenu";
import { RiArrowDropDownLine } from "react-icons/ri";

interface DropItem {
  element: React.ReactElement | string;
  content: React.ReactElement;
}

interface ListItem {
  element: React.ReactElement | string;
  content: React.ReactElement;
  isDropdown?: boolean;
  dropItems?: Array<DropItem>;
  name: string | React.ReactElement;
}

interface SideMenuProps {
  elements: Array<ListItem>;
}

export function SideMenuWithContent({ elements }: SideMenuProps) {
  const [contentOpen, setContentOpen] = useState<React.ReactElement>(
    <EditProfileMenu />
  );

  function changeContentOpen(element: React.ReactElement) {
    setContentOpen(element);
  }

  function toggleDropDown(element: Element | null | undefined) {
    if (element) {
      element.classList.toggle("open-dropdown");
    }
  }

  return (
    <Main>
      <Container>
        <ul>
          {elements.map((e, i) => {
            if (e.isDropdown) {
              return (
                <DropElement key={i}>
                  <span
                    className="drop-name name"
                    onClick={(e) => {
                      const parent = e.currentTarget.parentNode;
                      const dropMenu = parent?.querySelector(
                        ".drop-down-container"
                      );
                      toggleDropDown(dropMenu);
                    }}
                  >
                    {e.name} <RiArrowDropDownLine />
                  </span>
                  <div className="drop-down-container">
                    {e.dropItems?.map((d, j) => {
                      return (
                        <li
                          key={j}
                          onClick={() => {
                            changeContentOpen(d.content);
                          }}
                        >
                          <span className="name">{d.element}</span>
                        </li>
                      );
                    })}
                  </div>
                </DropElement>
              );
            }
            return (
              <li
                key={i}
                onClick={() => {
                  changeContentOpen(e.content);
                }}
              >
                {e.element || e.name}
              </li>
            );
          })}
        </ul>
      </Container>
      <ContentOpen element={contentOpen} />
    </Main>
  );
}

const Main = styled.div`
  padding: 0;
  display: flex;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

const Container = styled.div`
  box-shadow: 1px 0 1px rgba(100, 100, 100, 0.6);
  min-width: 15rem;
  padding: 1rem 0.5rem;
  background-color: var(--ui-dark);
  color: var(--text-light);
  .name div {
    display: flex;
    gap: 1rem;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
  }

  ul li {
    cursor: pointer;
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;

    &:hover {
      background-color: #353535;
    }
  }
`;

const DropElement = styled.div`
  cursor: pointer;
  display: flex;
  min-height: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;

  .drop-name {
    padding: 0 1rem;
    width: 100%;
    height: 100%;
    min-height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      background-color: #353535;
    }
  }

  .drop-down-container {
    padding: 0 2.5rem;
    display: none;
    flex-direction: column;
    width: 100%;
    height: 100%;

    li {
      &:hover {
        background-color: #454545;
      }
    }
  }

  .open-dropdown {
    display: flex !important;
  }
`;
