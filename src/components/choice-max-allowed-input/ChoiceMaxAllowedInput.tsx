import { CSSProperties } from "react";
import { CreateQuestionTemplate } from "../../types";
import { Input } from "antd";

interface Props {
  question: CreateQuestionTemplate;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputContainerStyles: CSSProperties = {
  marginBottom: "1.88rem",
};

const inputLabelStyles: CSSProperties = {
  marginBottom: "0.5rem",
  display: "block",
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "114%",
};

const inputStyles: CSSProperties = {
  // padding: "1.44rem 1.63rem",
  fontFamily: "Poppins",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "159.5%",
};

const ChoiceMaxAllowedInput = ({ question, handleInputChange }: Props) => {
  return (
    <div style={inputContainerStyles}>
      <label
        style={inputLabelStyles}
        htmlFor={`question-input-number-${question.id}`}
      >
        Max choice allowed
      </label>
      <Input
        type="number"
        min={0}
        style={inputStyles}
        id={`question-input-number-${question.id}`}
        value={question.maxChoice || 0}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ChoiceMaxAllowedInput;
