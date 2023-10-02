import { CSSProperties } from "react";
import { CreateQuestionTemplate } from "../../types";
import FormCard from "../form-card/FormCard";
import EditQuestionCollapse from "../edit-question-collapse/EditQuestionCollapse";
import ChoiceContainer from "../choice-container/ChoiceContainer";
import ChoiceMaxAllowedInput from "../choice-max-allowed-input/ChoiceMaxAllowedInput";
import ChoiceOtherOptionInput from "../choice-other-option-input/ChoiceOtherOptionInput";
import Choice from "../choice/Choice";
import ChoicesList from "../choices-list/ChoicesList";
import QuestionInput from "../question-input/QuestionInput";
import EditQuestionLabel from "../edit-question-label/EditQuestionLabel";
import RemoveQuestionButton from "../remove-question-button/RemoveQuestionButton";
import SaveButton from "../save-button/SaveButton";
import useEditQuestionReducer from "../../hooks/useEditQuestionReducer";
import EditQuestionActions from "../edit-question-actions/EditQuestionActions";

const questionFooterStyles: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};

interface Props {
  customisedQuestions: CreateQuestionTemplate[];
  handleUpdate: (question: CreateQuestionTemplate) => void;
  handleDelete: (questionId: string) => void;
  addQuestionNode: React.ReactNode;
}

const questionContainerStyles: CSSProperties = {
  marginTop: "1.5rem",
};

const AdditionalQuestions = ({
  customisedQuestions,
  handleUpdate,
  handleDelete,
  addQuestionNode,
}: Props) => {
  const {
    state,
    handleCheckBoxOtherChange,
    handleChoiceMaxChange,
    handleDropDownAddChoice,
    handleDropDownChoiceChange,
    handleQuestionTextChange,
    isLastQuestion,
    isLastChoice,
    shouldShowChoices,
  } = useEditQuestionReducer({ questions: customisedQuestions });

  return (
    <FormCard title="Additional questions">
      {state.questions.map((question) => (
        <>
          <EditQuestionCollapse
            key={question.id}
            label={<EditQuestionLabel question={question} />}
            showSeperator={!isLastQuestion(question.id)}
            collapsedNode={
              <>
                <QuestionInput
                  rootStyles={questionContainerStyles}
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
                          isLastChoice={isLastChoice(
                            question.id,
                            choiceProps.id
                          )}
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
                    handleButtonClick={() => handleDelete(question.id)}
                  />
                  <SaveButton handleClick={() => handleUpdate(question)} />
                </EditQuestionActions>
              </>
            }
          />
        </>
      ))}
      {addQuestionNode}
    </FormCard>
  );
};

export default AdditionalQuestions;
