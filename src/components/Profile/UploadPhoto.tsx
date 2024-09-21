import styled from "styled-components";
import { AiFillCamera } from "react-icons/ai";
import { User } from "../../@types/User";
import { useState } from "react";
import { createTemporaryUrl } from "../../utils/createTemporaryURL";

interface UploadPhotoProps {
  user: User;
}

export function UploadPhoto({ user }: UploadPhotoProps) {
  const [photo, setPhoto] = useState<File>();
  const [temporaryImgURL, setTemporaryImgURL] = useState("");

  async function updloadPhoto(photo: File) {
    const form = new FormData();
    form.append("photo", photo);
  }

  async function handleSelectFile(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const url = createTemporaryUrl(file);

      setPhoto(file);
      setTemporaryImgURL(url);

      await updloadPhoto(event.target.files[0]);
    }
  }

  return (
    <Container>
      <PhotoWrapper>
        <img
          src={user.photo || temporaryImgURL}
          alt={`Foto de ${user.name.first}`}
        />
        <label htmlFor="photo">
          <AiFillCamera />
          Selecionar foto
        </label>
        <input
          type="file"
          name="photo"
          id="photo"
          onChange={handleSelectFile}
        />
      </PhotoWrapper>
    </Container>
  );
}

const Container = styled.div`
  color: #f4f4f4;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PhotoWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: #c8c8c8;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  justify-content: center;
  align-items: center;

  &:hover {
    label {
      visibility: visible;
      opacity: 1;
    }
  }

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    object-fit: cover;
    display: flex;
    color: var(--text-light);
    background-color: var(--ui-dark);
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(200, 200, 200, 0.8);
    color: black;
    border-radius: 50%;
    transition: 200ms ease-in-out;
  }

  #photo {
    display: none;
  }
`;
