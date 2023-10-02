import { Checkbox } from "antd";
import { CreateQuestionTemplate } from "../../types";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const otherChoiceLabelStyles: CSSProperties = {
  marginLeft: "0.5rem",
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "0.9375rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "1.5rem",
  letterSpacing: "-0.00563rem",
  cursor: "pointer",
};

interface Props {
  question: CreateQuestionTemplate;
  handleChange: (event: CheckboxChangeEvent) => void;
}

const ChoiceOtherOptionInput = ({ question, handleChange }: Props) => {
  return (
    <div style={{ margin: "1.5rem 0" }}>
      <Checkbox
        id={`question-checkbox-${question.id}`}
        value={question.other || false}
        onChange={handleChange}
      />
      <label
        style={otherChoiceLabelStyles}
        htmlFor={`question-checkbox-${question.id}`}
      >
        Enable "Other" option
      </label>
    </div>
  );
};

export default ChoiceOtherOptionInput;
