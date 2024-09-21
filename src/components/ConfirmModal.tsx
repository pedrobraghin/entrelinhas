import styled from "styled-components";

interface ConfirmModalProps {
  message: string;
  cb: (result: boolean) => void;
  confirmText: string;
  cancelText: string;
  isOpen: boolean;
}

export function ConfirmModal({
  message,
  cancelText,
  confirmText,
  cb,
  isOpen,
}: ConfirmModalProps) {
  return (
    <Container isOpen={isOpen}>
      <h4 className="message">{message}</h4>
      <div className="buttons">
        <button
          className="cancel-btn"
          onClick={() => {
            cb(false);
          }}
        >
          {cancelText}
        </button>
        <button
          className="confirm-btn"
          onClick={() => {
            cb(true);
          }}
        >
          {confirmText}
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 999;
  display: ${(props) => {
    return props.isOpen ? "flex" : "none";
  }};
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.4);
  padding: 2rem;
  flex-direction: column;
  background-color: #c8c8c8;
  color: #252525;
  gap: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    button {
      color: inherit;
      border: none;
      background: transparent;
      padding: 0.5rem;
      cursor: pointer;
      transition: all 200ms ease-out;
    }

    .confirm-btn {
      color: #ee9494;
      font-weight: bold;
      &:hover {
        color: #ff0000;
      }
    }

    .cancel-btn {
      color: var(--cancel-color);
      &:hover {
        color: #888;
      }
    }
  }
`;
