import { Select } from "antd";
import { Question_Option_Shape, QUESTIONS_SELECT } from "../../constants";
import { CSSProperties } from "react";
import { CreateQuestionTemplate } from "../../types";

const questionFieldContainer: CSSProperties = {
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

const dropdownStyles: CSSProperties = {
  width: "100%",
  height: 68,
};

interface Props {
  question: CreateQuestionTemplate;

  handleTypeChange: (
    value: any,
    option: Question_Option_Shape | Question_Option_Shape[]
  ) => void;
}

const QuestionTypeSelect = ({ question, handleTypeChange }: Props) => {
  return (
    <div style={questionFieldContainer}>
      <label
        style={questionLabelStyles}
        htmlFor={`question-type-${question.id}`}
      >
        Type
      </label>
      <Select
        style={dropdownStyles}
        id={`question-type-${question.id}`}
        size="large"
        placeholder="Please select"
        options={QUESTIONS_SELECT}
        onChange={handleTypeChange}
      />
    </div>
  );
};

export default QuestionTypeSelect;
