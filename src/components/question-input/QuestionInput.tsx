import { CSSProperties } from "react";
import { CreateQuestionTemplate } from "../../types";
import { Input } from "antd";

const questionFieldContainerStyles: CSSProperties = {
  marginBottom: "1.88rem",
};

const questionLabelStyles: CSSProperties = {
  marginBottom: "0.5rem",

  display: "block",

  color: "#000",

  fontFamily: "Poppins",

  fontSize: "1.25rem",

  fontStyle: "normal",

  fontWeight: 600,

  lineHeight: "114%",
};

const questionTextStyles: CSSProperties = {
  fontFamily: "Poppins",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "159.5%",
};

interface Props {
  question: CreateQuestionTemplate;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rootStyles?: CSSProperties;
}

const QuestionInput = ({ question, handleInputChange, rootStyles }: Props) => {
  const containerStyles = { ...questionFieldContainerStyles, ...rootStyles };

  return (
    <div style={containerStyles}>
      <label
        style={questionLabelStyles}
        htmlFor={`question-input-${question.id}`}
      >
        Question
      </label>
      <Input
        style={questionTextStyles}
        placeholder="Type Here"
        id={`question-input-${question.id}`}
        value={question.question}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default QuestionInput;
