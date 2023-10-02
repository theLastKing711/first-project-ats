import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { CSSProperties } from "react";

const styledContainer: CSSProperties = {
  display: "flex",
  gap: "1.26rem",
  alignItems: "center",
};

const styledTextStyles: CSSProperties = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "0.9375rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "1.5rem",
  letterSpacing: "-0.00563rem",
};

interface Props {
  handleButtonClicked: () => void;
}

const AddQuestionButton = ({ handleButtonClicked }: Props) => {
  return (
    <div style={styledContainer}>
      <Button icon={<PlusOutlined />} onClick={handleButtonClicked} />
      <p style={styledTextStyles}>Add a question</p>
    </div>
  );
};

export default AddQuestionButton;
