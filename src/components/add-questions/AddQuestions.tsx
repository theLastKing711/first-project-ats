import { Button, Checkbox, Input, Select } from "antd";
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import React, { CSSProperties, useReducer } from "react";
import { CreateQuestionTemplate, QuestionType } from "../../types";
import {
  QuestionActionKind,
  addQuestionReducer,
  initalQuestionsState,
} from "../../reducers/add-questions-reducer";
import { QUESTIONS_SELECT, Question_Option_Shape } from "../../constants";

const styledContainer: CSSProperties = {
  display: "flex",
  gap: "1.26rem",
  alignItems: "center",
};

const styledPlusButton: CSSProperties = {};

const styledTextStyles: CSSProperties = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "0.9375rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "1.5rem",
  letterSpacing: "-0.00563rem",
};

const questionContainerStyles: CSSProperties = {
  marginBottom: "2rem",
};

const questionFieldContainer: CSSProperties = {
  marginBottom: "1.88rem",
};

const questionLabelStyles: CSSProperties = {
  marginBottom: "0.5rem",
  display: "block",
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "114%",
};
const questionTextStyles: CSSProperties = {
  // padding: "1.44rem 1.63rem",
  fontFamily: "Poppins",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "159.5%",
};

const dropdownStyles: CSSProperties = {
  width: "100%",
  height: 68,
};

const choiceContainerStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  marginBottom: "0.425rem",
};

const choicesLabelStyles: CSSProperties = {
  margin: "0 0 0.5rem 2.215625rem",
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "114%",
};

const otherChoiceLabelStyles: CSSProperties = {
  marginLeft: "0.5rem",
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "0.9375rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "1.5rem",
  letterSpacing: "-0.00563rem",
  cursor: "pointer",
};

const questionFooterStyles: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};

const removeQuestionContainerStyles: CSSProperties = {
  display: "flex",
  gap: "0.rem",
  alignItems: "center",
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

const removeButtonStyles: CSSProperties = {
  border: "none",
};

const removeIconStyles: CSSProperties = {
  transform: "rotate(45deg)",
  fontSize: 25,
  color: "#A80000",
};

const saveButtonStyles: CSSProperties = {
  color: "#F4FBF7",
  fontFamily: "Poppins",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
};

const AddQuestions = () => {
  const [state, dispatch] = useReducer(
    addQuestionReducer,
    initalQuestionsState
  );

  const handleQuestionAdd = () => {
    dispatch({ type: QuestionActionKind.ADD_QUESTION });
  };

  const handleQuestionRemove = (id: string) => {
    dispatch({ type: QuestionActionKind.REMOVE_QUESTION, id });
  };

  const handleQuestionTypeChange: (
    id: string
  ) => (
    value: any,
    option: Question_Option_Shape | Question_Option_Shape[]
  ) => void = (id) => (value, option) => {
    if (!Array.isArray(option)) {
      dispatch({
        id,
        type: option.type,
      });
    }
  };

  const handleQuestionTextChange = (question: {
    id: string;
    value: string;
  }) => {
    dispatch({
      type: QuestionActionKind.UPDATE_QUESTION_TEXT,
      payload: { id: question.id, question: question.value },
    });
  };

  const shouldShowChoices = (question: CreateQuestionTemplate) => {
    return isChoiceQuestion(question.type) && questionHasChoices(question);
  };

  const isChoiceQuestion = (questionType: QuestionType) => {
    return questionType === "MultipleChoice" || questionType === "Dropdown";
  };

  const questionHasChoices = (question: CreateQuestionTemplate) => {
    return question.choices !== undefined;
  };

  const handleDropDownChoiceChange = (
    questionId: string,
    choiceId: string,
    choice: string
  ) => {
    dispatch({
      type: QuestionActionKind.UPDATE_QUESTION_CHOICES_CHOICE,
      payload: {
        questionId,
        choiceId,
        value: choice,
      },
    });
  };

  const handleDropDownAddChoice = (questionId: string) => {
    dispatch({
      type: QuestionActionKind.APPEND_CHOICE_TO_QUESTION_DROP_DOWN,
      payload: {
        questionId,
      },
    });
  };

  const isLastChoice = (questionId: string, choiceId: string) => {
    const question = state.questions.find((x) => x.id === questionId)!;

    if (question.choices) {
      const lastChoiceIndex = question.choices.length - 1;

      return lastChoiceIndex.toString() === choiceId;
    }

    return true;
  };

  const handleCheckBoxOtherChange = (questionId: string) => {
    dispatch({
      type: QuestionActionKind.UPDATE_QUESTION_CHOICE_OTHER,
      payload: {
        questionId,
      },
    });
  };

  const handleChoiceMaxChange = (questionId: string, value: number) => {
    dispatch({
      type: QuestionActionKind.UPDATE_QUESTION_CHOICE_MAX_CHOICE,
      payload: {
        questionId,
        maxChoice: value,
      },
    });
  };

  return (
    <>
      {state.questions.map((question) => (
        <div style={questionContainerStyles} key={question.id}>
          <div style={questionFieldContainer}>
            <label
              style={questionLabelStyles}
              htmlFor={`question-type-${question.id}`}
            >
              Type
            </label>
            <Select
              style={dropdownStyles}
              id={`question-type-${question.id}`}
              size="large"
              placeholder="Please select"
              // defaultValue={[]}
              options={QUESTIONS_SELECT}
              // style={{ width: "100%" }}
              onChange={handleQuestionTypeChange(question.id)}
            />
          </div>
          <div style={questionFieldContainer}>
            <label
              style={questionLabelStyles}
              htmlFor={`question-input-${question.id}`}
            >
              Question
            </label>
            <Input
              style={questionTextStyles}
              placeholder="Type Here"
              id={`question-input-${question.id}`}
              value={question.question}
              onChange={(e) =>
                handleQuestionTextChange({
                  id: question.id,
                  value: e.target.value,
                })
              }
            />
          </div>
          {shouldShowChoices(question) && (
            <>
              <div style={choicesLabelStyles}>Choice</div>
              {question.choices?.map((choice) => (
                <div style={choiceContainerStyles}>
                  <UnorderedListOutlined style={{ marginRight: "0.5rem" }} />

                  <Input
                    style={{ marginRight: "1rem" }}
                    placeholder="Type here"
                    onChange={(e) =>
                      handleDropDownChoiceChange(
                        question.id,
                        choice.id,
                        e.target.value
                      )
                    }
                  />
                  {isLastChoice(question.id, choice.id) && (
                    <Button
                      icon={<PlusOutlined />}
                      onClick={() => handleDropDownAddChoice(question.id)}
                    />
                  )}
                </div>
              ))}
              <div style={{ margin: "1.5rem 0" }}>
                <Checkbox
                  id={`question-checkbox-${question.id}`}
                  value={question.other || false}
                  onChange={() => handleCheckBoxOtherChange(question.id)}
                />
                <label
                  style={otherChoiceLabelStyles}
                  htmlFor={`question-checkbox-${question.id}`}
                >
                  Enable "Other" option
                </label>
              </div>
              <div style={questionFieldContainer}>
                <label
                  style={questionLabelStyles}
                  htmlFor={`question-input-number-${question.id}`}
                >
                  Max choice allowed
                </label>
                <Input
                  type="number"
                  min={0}
                  style={questionTextStyles}
                  id={`question-input-number-${question.id}`}
                  value={question.maxChoice || 0}
                  onChange={(e) => {
                    handleChoiceMaxChange(question.id, +e.target.value);
                  }}
                />
              </div>
            </>
          )}
          <div>
            <div style={removeQuestionContainerStyles}>
              <Button
                style={removeButtonStyles}
                icon={<PlusOutlined style={removeIconStyles} />}
                onClick={() => handleQuestionRemove(question.id)}
              />
              <label style={removeQuestionLabel}>Delete question</label>
            </div>
          </div>
        </div>
      ))}
      <footer style={questionFooterStyles}>
        <div style={styledContainer}>
          <Button
            style={styledPlusButton}
            icon={<PlusOutlined />}
            onClick={handleQuestionAdd}
          />
          <p style={styledTextStyles}>Add a question</p>
        </div>
        <Button type="primary" style={saveButtonStyles}>
          Save
        </Button>
      </footer>
      <div></div>
    </>
  );
};

export default AddQuestions;
