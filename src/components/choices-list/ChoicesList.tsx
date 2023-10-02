import React from "react";
import { CreateChoice } from "../../types";

interface Props {
  choices?: CreateChoice[];
  renderChoice: (choice: CreateChoice) => React.ReactNode;
}

const ChoicesList = ({ choices = [], renderChoice }: Props) => {
  return (
    <>
      {choices?.map((choice) => (
        <>{renderChoice(choice)}</>
      ))}
    </>
  );
};

export default ChoicesList;
