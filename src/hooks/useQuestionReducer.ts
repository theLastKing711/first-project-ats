import { QuestionActionKind, initalQuestionsState } from './../reducers/add-questions-reducer';
import { addQuestionReducer } from "../reducers/add-questions-reducer";
import { useReducer } from 'react';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Question_Option_Shape } from '../constants';
import { CreateQuestionTemplate, QuestionType } from '../types';


const useQuestionReducer = () => {
const [state, dispatch] = useReducer(
    addQuestionReducer,
     initalQuestionsState
  );

  const handleQuestionAdd = () => {
    dispatch({ type: QuestionActionKind.ADD_QUESTION });
  };

  const handleQuestionRemove =
    (id: string) => {
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

  const handleQuestionTextChange =
    (questionId: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: QuestionActionKind.UPDATE_QUESTION_TEXT,
        payload: { id: questionId, question: event.target.value },
      });
    };

  const shouldShowChoices = (question: CreateQuestionTemplate) => {
    console.log('is choices', isChoiceQuestion(question.type) && questionHasChoices(question));
    return isChoiceQuestion(question.type) && questionHasChoices(question);
  };

  const isChoiceQuestion = (questionType: QuestionType) => {
    return questionType === "MultipleChoice" || questionType === "Dropdown";
  };

  const questionHasChoices = (question: CreateQuestionTemplate) => {
    return question.choices !== undefined;
  };

  const handleDropDownChoiceChange =
    (questionId: string, choiceId: string) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: QuestionActionKind.UPDATE_QUESTION_CHOICES_CHOICE,
        payload: {
          questionId,
          choiceId,
          value: event.target.value,
        },
      });
    };

  const handleDropDownAddChoice = (questionId: string) => () => {
    dispatch({
      type: QuestionActionKind.APPEND_CHOICE_TO_QUESTION_DROP_DOWN,
      payload: {
        questionId,
      },
    });
  };

  const isFirstQuestion = (questionId: string) => {

    return questionId === getFirstQuestionId();
    
  }

  const getFirstQuestionId = () => {
    return state.questions[0].id;
  }

  const isLastChoice = (questionId: string, choiceId: string) => {
    const question = state.questions.find((x) => x.id === questionId)!;

    if (question.choices) {
      const lastChoiceIndex = question.choices.length - 1;

      return lastChoiceIndex.toString() === choiceId;
    }

    return true;
  };

  const isLastQuestion = (questionId: string) => {

    const lastQuestionId = getLastQuestionId();
    return lastQuestionId === questionId;
  };

  const getLastQuestionId = () => {
    return state.questions.slice(-1)[0].id;
  }

  const handleCheckBoxOtherChange =
    (questionId: string) => (event: CheckboxChangeEvent) => {
      dispatch({
        type: QuestionActionKind.UPDATE_QUESTION_CHOICE_OTHER,
        payload: {
          questionId,
        },
      });
    };

  const handleChoiceMaxChange =
    (questionId: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: QuestionActionKind.UPDATE_QUESTION_CHOICE_MAX_CHOICE,
        payload: {
          questionId,
          maxChoice: +event.target.value,
        },
      });
    };

    return {
      state,
      dispatch,
      handleQuestionAdd,
      handleQuestionRemove,
      handleQuestionTypeChange,
      handleQuestionTextChange,
      shouldShowChoices,
      handleDropDownChoiceChange,
      handleDropDownAddChoice,
      isFirstQuestion,
      isLastQuestion,
      isLastChoice,
      handleCheckBoxOtherChange,
      handleChoiceMaxChange
    }
}

export default useQuestionReducer