import { CSSProperties } from "react";

const choicesLabelStyles: CSSProperties = {
  margin: "0 0 0.5rem 2.215625rem",
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "114%",
};

interface Props {
  children: React.ReactNode;
}

const ChoiceContainer = ({ children }: Props) => {
  return (
    <>
      <div style={choicesLabelStyles}>Choice</div>
      {children}
    </>
  );
};

export default ChoiceContainer;
