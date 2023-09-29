import { DefaultOptionType } from "antd/es/select";
import { QuestionType } from "./types";
import { QuestionActionKind } from "./reducers/add-questions-reducer";

type SET_QUESTION_TYPE = |
QuestionActionKind.SET_QUESTION_TO_PARAGRAPH
 |QuestionActionKind.SET_QUESTION_TO_SHORT_ANSWER
 | QuestionActionKind.SET_QUESTION_TO_YES_NO
 | QuestionActionKind.SET_QUESTION_TO_DROP_DOWN
 | QuestionActionKind.SET_QUESTION_TO_MULTIPLE_CHOICE
 | QuestionActionKind.SET_QUESTION_TO_DATE
 | QuestionActionKind.SET_QUESTION_TO_NUMBER
 | QuestionActionKind.SET_QUESTION_TO_FILE_UPLOAD

export type Question_Option_Shape = {
    label: string;
    value: QuestionType;
    type: SET_QUESTION_TYPE
}

export const  QUESTIONS_SELECT: Question_Option_Shape[] = [
    {
        label: "Paragraph",
        value: "Paragraph",
        type: QuestionActionKind.SET_QUESTION_TO_PARAGRAPH
      },
      {
        label: "Short answer",
        value: "ShortAnswer",
        type: QuestionActionKind.SET_QUESTION_TO_SHORT_ANSWER
      },
      {
        label: "Yes/No",
        value: "YesNo",
        type:  QuestionActionKind.SET_QUESTION_TO_YES_NO
      },
      {
        label: "Dropdown",
        value: "Dropdown",
        type:  QuestionActionKind.SET_QUESTION_TO_DROP_DOWN
      },
      {
        label: "Multiple Choice",
        value: "MultipleChoice",
        type:  QuestionActionKind.SET_QUESTION_TO_MULTIPLE_CHOICE
      },
      {
        label: "Date",
        value: "Date",
        type:  QuestionActionKind.SET_QUESTION_TO_DATE
      },
      {
        label: "Number",
        value: "Number",
        type:  QuestionActionKind.SET_QUESTION_TO_NUMBER
      },
      {
        label: "File upload",
        value: "FileUpload",
        type:  QuestionActionKind.SET_QUESTION_TO_FILE_UPLOAD
      },
  ]

