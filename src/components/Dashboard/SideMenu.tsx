import styled from "styled-components";

interface SideMenuProps {
  elements: Array<{
    listItem: React.ReactElement | string;
    onClick: (...ags: any[]) => any;
    content?: React.ReactElement;
  }>;
}

export function SideMenu({ elements }: SideMenuProps) {
  return (
    <Container>
      <ul>
        {elements.map((e, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                e.onClick(e.content, e.content);
              }}
            >
              {e.listItem}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  box-shadow: 1px 0 1px rgba(100, 100, 100, 0.6);
  min-width: 15rem;
  padding: 1rem 0.5rem;
  background-color: var(--ui-dark);
  color: var(--text-light);

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
    overflow: hidden;

    &:hover {
      background-color: #353535;
    }
  }
`;
