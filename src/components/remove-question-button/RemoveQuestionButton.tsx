import React, { CSSProperties } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { CreateQuestionTemplate } from "../../types";
import { Button } from "antd";

const removeQuestionContainerStyles: CSSProperties = {
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
};

const removeButtonStyles: CSSProperties = {
  border: "none",
};

const removeIconStyles: CSSProperties = {
  transform: "rotate(45deg)",
  fontSize: 25,
  color: "#A80000",
};

const removeQuestionLabel: CSSProperties = {
  color: "#A80000",
  fontFamily: "Poppins",
  fontSize: "0.9375rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "1.5rem",
  letterSpacing: "-0.00563rem",
};

interface Props {
  handleButtonClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  labelText?: string;
  rootStyles?: CSSProperties;
}

const RemoveQuestionButton = ({
  handleButtonClick,
  labelText = "Delete question",
  rootStyles = {},
}: Props) => {
  return (
    <div style={rootStyles}>
      <div style={removeQuestionContainerStyles}>
        <Button
          style={removeButtonStyles}
          icon={<PlusOutlined style={removeIconStyles} />}
          onClick={handleButtonClick}
        />
        <label style={removeQuestionLabel}>{labelText}</label>
      </div>
    </div>
  );
};

export default RemoveQuestionButton;
