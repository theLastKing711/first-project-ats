import { CSSProperties } from "react";
import { CreateQuestionTemplate } from "../../types";

import Choice from "../choice/Choice";
import ChoicesList from "../choices-list/ChoicesList";
import ChoiceContainer from "../choice-container/ChoiceContainer";
import ChoiceOtherOptionInput from "../choice-other-option-input/ChoiceOtherOptionInput";
import ChoiceMaxAllowedInput from "../choice-max-allowed-input/ChoiceMaxAllowedInput";
import QuestionTypeSelect from "../question-type-select/QuestionTypeSelect";
import QuestionInput from "../question-input/QuestionInput";
import RemoveQuestionButton from "../remove-question-button/RemoveQuestionButton";
import AddQuestionButton from "../add-question-button/AddQuestionButton";
import useQuestionReducer from "../../hooks/useQuestionReducer";
import SaveButton from "../save-button/SaveButton";
import EditQuestionActions from "../edit-question-actions/EditQuestionActions";
import QuestionSeperator from "../question-seperator/QuestionSeperator";

const questionContainerStyles: CSSProperties = {
  marginBottom: "2rem",
};

const questionFooterStyles: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};

const seperatroStyles: CSSProperties = {
  marginBottom: "2rem",
};

interface Props {
  handleQuestionAddedApi: (question: CreateQuestionTemplate) => Promise<any>;
  shouldShowInitalSeperator?: (hasQuestions: boolean) => boolean;
  // handleSucces: (question: CreateQuestionTemplate, state: )
}

const AddQuestions = ({
  handleQuestionAddedApi,
  shouldShowInitalSeperator = () => false,
}: Props) => {
  const {
    state,
    handleCheckBoxOtherChange,
    handleChoiceMaxChange,
    handleDropDownAddChoice,
    handleDropDownChoiceChange,
    handleQuestionAdd,
    handleQuestionRemove,
    handleQuestionTextChange,
    handleQuestionTypeChange,
    isLastChoice,
    isLastQuestion,
    shouldShowChoices,
  } = useQuestionReducer();

  const handleSaveClicked = (question: CreateQuestionTemplate) => () => {
    handleQuestionAddedApi(question).then(() => {
      handleQuestionRemove(question.id);
    });
  };

  const hasQuestions = () => {
    return state.questions.length > 0;
  };

  return (
    <>
      {shouldShowInitalSeperator(hasQuestions()) && (
        <QuestionSeperator rootStyles={seperatroStyles} />
      )}
      {state.questions.map((question) => (
        <div style={questionContainerStyles} key={question.id}>
          <QuestionTypeSelect
            question={question}
            handleTypeChange={handleQuestionTypeChange(question.id)}
          />
          <QuestionInput
            question={question}
            handleInputChange={handleQuestionTextChange(question.id)}
          />
          {shouldShowChoices(question) && (
            <ChoiceContainer>
              <ChoicesList
                choices={question.choices}
                renderChoice={(choiceProps) => (
                  <Choice
                    key={choiceProps.id}
                    isLastChoice={isLastChoice(question.id, choiceProps.id)}
                    handleDropDownAddChoice={handleDropDownAddChoice(
                      question.id
                    )}
                    handleDropDownChoiceChange={handleDropDownChoiceChange(
                      question.id,
                      choiceProps.id
                    )}
                  />
                )}
              />
              <ChoiceOtherOptionInput
                question={question}
                handleChange={handleCheckBoxOtherChange(question.id)}
              />
              <ChoiceMaxAllowedInput
                question={question}
                handleInputChange={handleChoiceMaxChange(question.id)}
              />
            </ChoiceContainer>
          )}
          <EditQuestionActions>
            <RemoveQuestionButton
              handleButtonClick={(e) => handleQuestionRemove(question.id)}
            />
            <SaveButton handleClick={handleSaveClicked(question)} />
          </EditQuestionActions>
          {!isLastQuestion(question.id) && <QuestionSeperator />}
        </div>
      ))}
      <footer style={questionFooterStyles}>
        <AddQuestionButton handleButtonClicked={handleQuestionAdd} />
      </footer>
    </>
  );
};

export default AddQuestions;
