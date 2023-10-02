import { CSSProperties } from "react";

const seperatorStyles: CSSProperties = {
  marginTop: "1.56rem",
  height: "0.0625rem",
  background: "#C4C4C4",
};

interface Props {
  rootStyles?: CSSProperties;
}

const QuestionSeperator = ({ rootStyles }: Props) => {
  const styles = { ...seperatorStyles, ...rootStyles };

  return <div style={styles}></div>;
};

export default QuestionSeperator;
