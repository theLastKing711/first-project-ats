import { Card } from "antd";
import React, { CSSProperties } from "react";

const CardStyles: CSSProperties = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "1.5625rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "114%",
  width: "37.1rem",
  borderRadius: "1.25rem 1.25rem 0rem 0rem",
  overflow: "auto",
  marginBottom: "4.19rem",
};

const cardHeadStyles: CSSProperties = {
  padding: "1.6rem 2rem",
  background: "#D0F7FA",
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "1.5625rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "114%",
  marginBottom: "4.19rem",
};

interface Props {
  children: React.ReactNode;
  title: string;
}

const FormCard = ({ title, children }: Props) => {
  return (
    <Card
      size="small"
      title={title}
      style={CardStyles}
      headStyle={cardHeadStyles}
    >
      {children}
    </Card>
  );
};

export default FormCard;
