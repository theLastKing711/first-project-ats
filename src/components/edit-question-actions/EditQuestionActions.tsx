import React, { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
}

const rootStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "3.26rem",
};

const EditQuestionActions = ({ children }: Props) => {
  return <div style={rootStyles}>{children}</div>;
};

export default EditQuestionActions;
