import "react-quill/dist/quill.snow.css";

import { useState } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";

interface TextEditorProps {
  onChange: (e: string) => void;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export function TextEditor({ onChange }: TextEditorProps) {
  const [content, setContent] = useState("");
  return (
    <Container>
      <Quill
        theme="snow"
        value={content}
        onChange={(content) => {
          onChange(content);
          setContent(content);
        }}
        modules={modules}
        formats={formats}
      />
    </Container>
  );
}

const Quill = styled(ReactQuill)`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
