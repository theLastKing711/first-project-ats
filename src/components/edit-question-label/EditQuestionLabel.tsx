import { CSSProperties } from "react";
import { CreateQuestionTemplate } from "../../types";

const questionTypeStyles: CSSProperties = {
  marginBottom: "0.56rem",
  color: "#979797",
  fontFamily: "Poppins",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "159.5%",
};

const questionContainerStyles: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};

const questionStyles: CSSProperties = {
  maxWidth: "27rem",
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "114%",
};

interface Props {
  question: CreateQuestionTemplate;
}

const EditQuestionLabel = ({ question }: Props) => {
  return (
    <>
      <p style={questionTypeStyles}>{question.type}</p>
      <div style={questionContainerStyles}>
        <h3 style={questionStyles}>{question.question}</h3>
      </div>
    </>
  );
};

export default EditQuestionLabel;
