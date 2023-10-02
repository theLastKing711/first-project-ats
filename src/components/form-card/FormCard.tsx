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
};

const bodyStyles: CSSProperties = {
  padding: "2.4rem 1.88rem 2rem",
};

interface Props {
  children: React.ReactNode;
  title: string;
  contentStyles?: CSSProperties;
}

const FormCard = ({ title, children, contentStyles }: Props) => {
  const mergedBodyStyles = { ...bodyStyles, ...contentStyles };

  return (
    <Card
      size="small"
      title={title}
      style={CardStyles}
      headStyle={cardHeadStyles}
      bodyStyle={mergedBodyStyles}
    >
      {children}
    </Card>
  );
};

export default FormCard;
