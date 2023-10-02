import { Input, Button, Checkbox } from "antd";
import { CreateQuestionTemplate } from "../../types";
import { CSSProperties } from "react";
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";

const choicesLabelStyles: CSSProperties = {
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

const choiceContainerStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  marginBottom: "0.425rem",
};

const questionTextStyles: CSSProperties = {
  // padding: "1.44rem 1.63rem",
  fontFamily: "Poppins",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "159.5%",
};

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

interface Props {
  isLastChoice: boolean;
  handleDropDownChoiceChange: React.ChangeEventHandler<HTMLInputElement>;
  handleDropDownAddChoice: () => void;
}

const Choice = ({
  isLastChoice,
  handleDropDownAddChoice,
  handleDropDownChoiceChange,
}: Props) => {
  return (
    <>
      <div style={choiceContainerStyles}>
        <UnorderedListOutlined style={{ marginRight: "0.5rem" }} />
        <Input
          style={{ marginRight: "1rem" }}
          placeholder="Type here"
          onChange={handleDropDownChoiceChange}
        />
        {isLastChoice && (
          <Button icon={<PlusOutlined />} onClick={handleDropDownAddChoice} />
        )}
      </div>
    </>
  );
};

export default Choice;
