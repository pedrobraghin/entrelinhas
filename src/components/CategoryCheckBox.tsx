import styled from "styled-components";

interface CategoryCheckboxProps {
  label: string;
  id: string;
  cb: (label: string, id: string, checked: boolean) => void;
}

export function CategoryCheckbox({ label, id, cb }: CategoryCheckboxProps) {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    cb(label, id, e.currentTarget.checked);
  }

  return (
    <Container>
      <label className="toggle">
        <input
          type="checkbox"
          name={label}
          id={label}
          hidden
          onChange={handleInputChange}
        />
        <span>{label}</span>
      </label>
    </Container>
  );
}

const Container = styled.label`
  width: min-content;

  label {
    width: 100%;
    height: 100%;
    background-color: green;
  }

  span {
    font-weight: bold;
    cursor: pointer;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    width: 100%;
    height: 100%;
    background-color: #fff;
    color: #252525;
    border: 1px solid #252525;
  }

  label input:checked + span {
    background-color: var(--ui-dark);
    color: var(--text-light);
  }
`;
