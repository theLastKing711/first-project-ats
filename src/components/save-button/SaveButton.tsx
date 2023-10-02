import { Button } from "antd";
import { CSSProperties } from "react";

const saveButtonStyles: CSSProperties = {
  color: "#F4FBF7",
  fontFamily: "Poppins",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
};

interface Props {
  handleClick: () => void;
}

const SaveButton = ({ handleClick }: Props) => {
  return (
    <Button style={saveButtonStyles} onClick={handleClick} type="primary">
      Save
    </Button>
  );
};

export default SaveButton;
