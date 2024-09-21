import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import styled from "styled-components";
import { UploadPhoto } from "./UploadPhoto";

export function EditProfileMenu() {
  const { user } = useContext(UserContext);

  const name = `${user.name.first} ${user.name.last}`;

  const [error, setError] = useState<Error | null>();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState(user.email);
  const [recoveryEmail, setRecoveryEmail] = useState(user.recoveryEmail);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  async function handleEditProfile() {
    setError(null);
    setMessage("");
    try {
      validateFields();
      setMessage("Informções atualizadas com sucesso!");
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
    }
  }

  function handlPhoneChange(e: React.FormEvent<HTMLInputElement>) {
    setPhoneNumber(e.currentTarget.value);
  }

  function handlEmailChange(e: React.FormEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }

  function handleEmailRecoveyChange(e: React.FormEvent<HTMLInputElement>) {
    setRecoveryEmail(e.currentTarget.value);
  }

  function validateFields() {}

  return (
    <Container>
      <h2>{name}</h2>
      <div className="profile-pic-container row">
        <UploadPhoto user={user} />
      </div>
      <fieldset className="email-container-container row">
        <legend>Contato</legend>

        <label htmlFor="phone">Número de telefone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={phoneNumber}
          onChange={handlPhoneChange}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handlEmailChange}
        />

        <label htmlFor="recovery-email">E-mail de recuperação</label>
        <input
          type="email"
          name="recovery-email"
          id="recovery-email"
          value={recoveryEmail}
          onChange={handleEmailRecoveyChange}
        />
      </fieldset>
      <fieldset className="social-links-container row">
        <legend>Redes sociais</legend>
        <label htmlFor="instagram">Instagram</label>
        <input
          type="text"
          name="instagram"
          id="instagram"
          value={user.socialLinks?.instagram}
        />
        <label htmlFor="linkedin">LinkeIn</label>
        <input
          type="text"
          name="linkedin"
          id="linkedin"
          value={user.socialLinks?.linkedin}
        />
        <label htmlFor="twitter">Twitter</label>
        <input
          type="text"
          name="twitter"
          id="twitter"
          value={user.socialLinks?.twitter}
        />
      </fieldset>

      <fieldset className="change-passsword-container row">
        <legend>Alterar senha</legend>
        <label htmlFor="current-password">Senha atual</label>
        <input type="password" name="current-password" id="current-password" />

        <label htmlFor="password">Nova Senha</label>
        <input type="password" name="password" id="password" />

        <label htmlFor="password-confirm">Confirme a nova senha</label>
        <input type="password" name="password-confirm" id="password-confirm" />
      </fieldset>

      <div className="footer-container row">
        <div className="buttons-container">
          <button className="delete-account-btn">Apagar conta</button>
          <button onClick={handleEditProfile} className="save-btn">
            Salvar
          </button>
        </div>
        <div className="errors-container">
          <span className="error">{error && error.message}</span>
        </div>
        <div className="message-container">
          <span className="message">{message}</span>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  fieldset {
    padding: 0.5rem 1rem 2rem 1rem;
  }

  .row {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input {
    height: 2rem;
    padding: 0 1rem;

    opacity: 0.6;
    outline: none;

    &:focus {
      opacity: 1;
      border-bottom: 3px solid #0dcf1d;
    }
  }

  .save-btn {
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: var(--ui-dark);
    color: var(--text-light);
    transition: all 200ms ease-in-out;

    &:hover {
      background-color: #353535;
    }
  }

  .footer-container .message-container {
    align-self: flex-end;
  }

  .buttons-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .delete-account-btn {
      color: var(--cancel-color);
      background-color: transparent;
      border: none;
      transition: all 200ms ease-in-out;

      &:hover {
        color: #ff0000;
        cursor: pointer;
      }
    }
  }
`;
