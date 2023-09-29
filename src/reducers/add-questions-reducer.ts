import { CreateChoice, CreateQuestionTemplate } from "../types";

export const initalQuestionsState: QuestionState = {
    questions: [],
};

export function addQuestionReducer(state: QuestionState, action: QuestionAction): QuestionState {
  const { type } = action;

  switch (type) {
    case QuestionActionKind.ADD_QUESTION:
    {

        const newQuestion = createQuestion(state.questions);
            
        return {
            ...state,
            questions: getAppendedList(state.questions, newQuestion)
        };
    }
    case QuestionActionKind.REMOVE_QUESTION:
    {
        const { id } = action;
        
        const newList = getFilteredList(state.questions, id);

        return {
            ...state,
            questions: newList,
        }
        
    }
    case QuestionActionKind.SET_QUESTION_TO_PARAGRAPH:
    {
        const { id } = action;
        
        const updatedQuestions = getResetedParagraphQuestions(state.questions, id)
        

        return {
            ...state,
            questions: updatedQuestions
        }
        
    }
    case QuestionActionKind.SET_QUESTION_TO_SHORT_ANSWER:
    {
        const { id } = action;
        
        const updatedQuestions = getResetedShortAnswerQuestions(state.questions, id);
        

        return {
            ...state,
            questions: updatedQuestions
        }
        
    }
    case QuestionActionKind.SET_QUESTION_TO_DROP_DOWN:
    {
        const { id } = action;
        
        const updatedQuestions = getResetedDropdownQuestions(state.questions, id);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.SET_QUESTION_TO_MULTIPLE_CHOICE:
    {
        const { id } = action;
        
        const updatedQuestions = getResetedChoicesQuestions(state.questions, id);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.SET_QUESTION_TO_DATE:
    {
        const { id } = action;
        
        const updatedQuestions = getResetedDateQuestions(state.questions, id);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.SET_QUESTION_TO_NUMBER:
    {
        const { id } = action;
        
        const updatedQuestions = getResetedNumberQuestions(state.questions, id);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.SET_QUESTION_TO_YES_NO:
    {
        const { id } = action;
        
        const updatedQuestions = getResetedYesNoQuestions(state.questions, id);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.SET_QUESTION_TO_FILE_UPLOAD:
    {
        const { id } = action;
        
        const updatedQuestions = getResetedFileUploadQuestions(state.questions, id);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.UPDATE_QUESTION_PARAGRAPH:
    {
        const { payload } = action;
        
        const updatedQuestions = getUpdatedParagraphQuestions(state.questions, payload.id, payload.question);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.UPDATE_QUESTION_TEXT:
    {
        const { payload } = action;
        const updatedQuestions = getUpdatedQuestions(state.questions, {id: payload.id, question: payload.question});

        console.log('questions', updatedQuestions);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.UPDATE_QUESTION_SHORT_ANSWER:
    {
        const { payload } = action;
        
        const updatedQuestions = getUpdatedShortAnswerQuestions(state.questions, payload.id, payload.question);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.UPDATE_QUESTION_DROP_DOWN:
    {
        const { payload } = action;
        
        const updatedQuestions = getUpdatedDropdownQuestionQuestions(state.questions, payload.id, payload.question);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.UPDATE_QUESTION_DROP_DOWN_CHOICE:
    {
        const { payload } = action;
        
        const updatedQuestions = getUpdatedDropdownQuestionQuestions(state.questions,payload.questionId, payload.choiceId);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.APPEND_CHOICE_TO_QUESTION_DROP_DOWN:
    {
        const { payload } = action;
        
        const updatedQuestions = getAppendedDropdwonChoiceQuestions(state.questions, payload.questionId);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.REMOVE_CHOICE_FROM_QUESTION_DROP_DOWN:
    {
        const { payload } = action;
        
        const updatedQuestions = getRemovedDropdwonChoiceQuestions(state.questions, payload.questionId, payload.choiceId);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.UPDATE_QUESTION_MULTIPLE_CHOICE:
    {
        const { payload } = action;
        
        // const updatedQuestions = getUpdatedDropdownChoiceQuestions(state.questions, payload.id, {});
        
        // return {
        //     ...state,
        //     questions: updatedQuestions 
        // }
        return state;
    }
    case QuestionActionKind.UPDATE_QUESTION_CHOICES_CHOICE:
    {
        const { payload } = action;
        
        const updatedQuestions = getUpdatedChoicesChoiceQuestions(state.questions, payload.questionId, payload.choiceId, payload.value);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.UPDATE_QUESTION_CHOICE_MAX_CHOICE:
    {
        const { payload } = action;
        
        const updatedQuestions = getUpdatedChoicesMaxChoiceQuestions(state.questions, payload.questionId, payload.maxChoice);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.UPDATE_QUESTION_CHOICE_OTHER:
    {
        const { payload } = action;
        const question =   findQuestionById(state.questions,  payload.questionId);
        
        const updatedQuestions = getUpdatedChoicesOtherQuestions(state.questions, payload.questionId, !question?.other);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.APPEND_QUESTION_CHOICES_CHOICE:
    {
        const { id } = action;
        
        const updatedQuestions = getAppendedChoicesChoiceQuestions(state.questions, id);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.REMOVE_QUESTION_CHOICES_CHOICE:
    {
        const { payload } = action;
        
        const updatedQuestions = getRemovedChoicesChoiceQuestions(state.questions, payload.id, payload.choiceId);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.UPDATE_QUESTION_DATE:
    {
        const { payload } = action;
        
        const updatedQuestions = getUpdatedDateQuestions(state.questions, payload.id, payload.question);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.UPDATE_QUESTION_NUMBER:
    {
        const { payload } = action;
        
        const updatedQuestions = getUpdatedNumberQuestions(state.questions, payload.id, payload.question);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.UPDATE_QUESTION_YES_NO:
    {
        const { payload } = action;
        
        const updatedQuestions = getUpdatedYesOrNoQuestions(state.questions, payload.id, payload.question);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    case QuestionActionKind.UPDATE_QUESTION_FILE_UPLOAD:
    {
        const { payload } = action;
        
        const updatedQuestions = getUpdatedFileUploadQuestions(state.questions, payload.id, payload.question);
        
        return {
            ...state,
            questions: updatedQuestions 
        }
        
    }
    default:
      return state;
  }
}

const createQuestion = (questionList: QuestionTemplateList): CreateQuestionTemplate => {
    

    return {id: getNextQuestionId(questionList), question: '', type: 'Paragraph'} 
}

const getResetedQuestions = (
        questionList: QuestionTemplateList, {question = '',...data}: Omit<CreateQuestionTemplate, "question"> & {question?: string}
    ): CreateQuestionTemplate[] => {

    return questionList.map(
        q => q.id === data.id ? 
        { ...data, type: data.type, question }
        : q
     )

}

const getUpdatedQuestions = (
        questionList: QuestionTemplateList, {question, ...data}:
            Omit<CreateQuestionTemplate, "question" | "type"> & {question?: string}
    ): CreateQuestionTemplate[] => {

    return questionList.map(
        q => q.id === data.id ? 
        { ...q, ...data, question: question ?? q.question}
        : q
     )

}
// const SetQuestionType = (questionList: QuestionTemplateList, type: QuestionType, id: string): CreateQuestionTemplate => { 

//     const question = findQuestionById(questionList, id);

//     const newQuestion = createQuestion({choices: []});

    
//     return {...newQuestion, type}
// }


const getResetedParagraphQuestions = (questionList: QuestionTemplateList, id: string): CreateQuestionTemplate[] => {
    const resetedQuestionQuestions = getResetedQuestions(questionList, {id, type: 'Paragraph'});
    
    return resetedQuestionQuestions;
}
const getUpdatedParagraphQuestions = (questionList: QuestionTemplateList, id: string, question: string): CreateQuestionTemplate[] => {
    const resetedQuestionQuestions = getResetedQuestions(questionList, {id, type: 'Paragraph', question});
    
    return resetedQuestionQuestions;
}


const getResetedShortAnswerQuestions = (questionList: QuestionTemplateList, id: string): CreateQuestionTemplate[] => {
    const resetedQuestionQuestions = getResetedQuestions(questionList, {id, type: 'ShortAnswer'});
    
    return resetedQuestionQuestions;
}

const getUpdatedShortAnswerQuestions = (questionList: QuestionTemplateList, id: string, question: string): CreateQuestionTemplate[] => {
    const resetedQuestionQuestions = getResetedQuestions(questionList, {id, type: 'ShortAnswer', question});
    
    return resetedQuestionQuestions;
}

const getResetedDropdownQuestions = (questionList: QuestionTemplateList, id: string): CreateQuestionTemplate[] => {
    const resetedQuestionQuestions = 
        getResetedQuestions(questionList, {id, type: 'Dropdown', choices: [getNewChoice(questionList, id)]});
    
    return resetedQuestionQuestions;
}

const getUpdatedDropdownQuestionQuestions = (questionList: QuestionTemplateList, id: string, question: string): CreateQuestionTemplate[] => {
    const resetedQuestionQuestions = 
        getUpdatedQuestions(questionList, {id, choices: [getNewChoice(questionList, id)], question});
    
    return resetedQuestionQuestions;
}

const getUpdatedDropdownChoiceQuestions = (questionList: QuestionTemplateList, id: string, choice: CreateChoice): CreateQuestionTemplate[] => {
    const dropDownChoices = getQuestionChoices(questionList, id);

    const newChoices = getUpdatedChoices(dropDownChoices, choice.id, choice.value);

    const resetedQuestionQuestions = 
        getUpdatedQuestions(questionList, {id, choices: newChoices});
    
    return resetedQuestionQuestions;
}

const getAppendedDropdwonChoiceQuestions = (questionList: QuestionTemplateList, id: string): CreateQuestionTemplate[] => {
    const dropDownChoices = getQuestionChoices(questionList, id);

    const newChoice = getNewChoice(questionList, id);

    const newChoices = [...dropDownChoices, newChoice];
    
    const resetedQuestionQuestions = 
        getUpdatedQuestions(questionList, {id, choices: newChoices});
    
    return resetedQuestionQuestions;
}

const getRemovedDropdwonChoiceQuestions = (questionList: QuestionTemplateList, id: string, choiceId: string): CreateQuestionTemplate[] => {
    const dropDownChoices = getQuestionChoices(questionList, id);

    const newFilteredChoices = getFilteredChoicesById(dropDownChoices, choiceId);
    
    const resetedQuestionQuestions = 
        getResetedQuestions(questionList, {id, type: 'Dropdown', choices: newFilteredChoices});
    
    return resetedQuestionQuestions;
}

const getFilteredChoicesById = (choices: CreateChoice[], choiceId: string): CreateChoice[] => {
    return choices.filter(x => x.id !== choiceId)
}

const getQuestionChoices = (questionsList: QuestionTemplateList,id: string) => {
     return  findQuestionById(questionsList, id)?.choices || [];
}

const getUpdatedChoices = (choices: CreateChoice[], choiceId: string, choice: string) => {
    return  choices.map<CreateChoice>(x => x.id === choiceId ? {...x, value: choice} : x);
}

const getResetedDateQuestions = (questionList: QuestionTemplateList, id: string): CreateQuestionTemplate[] => {
    const resetedQuestionQuestions = getResetedQuestions(questionList, {id, type: 'Date'});
    
    return resetedQuestionQuestions;
}

const getUpdatedDateQuestions = (questionList: QuestionTemplateList, id: string, question: string): CreateQuestionTemplate[] => {
    const resetedQuestionQuestions = getUpdatedQuestions(questionList, {id, question});
    
    return resetedQuestionQuestions;
}

const getResetedNumberQuestions = (questionList: QuestionTemplateList, id: string): CreateQuestionTemplate[] => {
    const resetedQuestionQuestions = getResetedQuestions(questionList, {id, type: 'Number'});
    
    return resetedQuestionQuestions;
}

const getUpdatedNumberQuestions = (questionList: QuestionTemplateList, id: string, question: string): CreateQuestionTemplate[] => {
    const resetedQuestionQuestions = getUpdatedQuestions(questionList, {id, question});
    
    return resetedQuestionQuestions;
}

const getResetedYesNoQuestions = (questionList: QuestionTemplateList, id: string): CreateQuestionTemplate[] => {
    const resetedQuestionQuestions = getResetedQuestions(questionList, {id, type: 'YesNo'});
    
    return resetedQuestionQuestions;
}

const getUpdatedYesOrNoQuestions = (questionList: QuestionTemplateList, id: string, question: string): CreateQuestionTemplate[] => {
    const resetedQuestionQuestions = getUpdatedQuestions(questionList, {id, question});
    
    return resetedQuestionQuestions;
}


const getResetedFileUploadQuestions = (questionList: QuestionTemplateList, id: string): CreateQuestionTemplate[] => {
    const resetedQuestionQuestions = getResetedQuestions(questionList, {id, type: 'FileUpload'});
    
    return resetedQuestionQuestions;
}

const getUpdatedFileUploadQuestions = (questionList: QuestionTemplateList, id: string, question: string): CreateQuestionTemplate[] => {
    const resetedQuestionQuestions = getUpdatedQuestions(questionList, {id, question});
    
    return resetedQuestionQuestions;
}


const getResetedChoicesQuestions = (questionList: QuestionTemplateList, id: string): CreateQuestionTemplate[] => {
    const resetedQuestionQuestions = 
        getResetedQuestions(
            questionList, {id, type: 'MultipleChoice', choices: [getNewChoice(questionList, id)]},
        );
    
    return resetedQuestionQuestions;
}

const getUpdatedChoicesChoiceQuestions = (questionList: QuestionTemplateList, id: string,choiceId: string,  choice: string): CreateQuestionTemplate[] => {
    const dropDownChoices = getQuestionChoices(questionList, id);

    const updatedChoices = getUpdatedChoices(dropDownChoices, choiceId, choice);
    
    const updatedQuestions = 
        getUpdatedQuestions(questionList, {id, choices: updatedChoices, });
    
    return updatedQuestions;
}

const getUpdatedChoicesMaxChoiceQuestions = 
    (questionList: QuestionTemplateList, id: string,  maxChoice: number): CreateQuestionTemplate[] => {

    const updatedQuestions = 
        getUpdatedQuestions(questionList, {id, maxChoice });
    
    return updatedQuestions;
}

const getUpdatedChoicesOtherQuestions = (questionList: QuestionTemplateList, id: string, other: boolean): CreateQuestionTemplate[] => {
    const updatedQuestions = 
        getUpdatedQuestions(questionList, {id, other });
    
    return updatedQuestions;
}

const getAppendedChoicesChoiceQuestions = (questionList: QuestionTemplateList, id: string): CreateQuestionTemplate[] => {
    const dropDownChoices = getQuestionChoices(questionList, id);

    const newChoice = getNewChoice(questionList, id);

    const newChoices = [...dropDownChoices, newChoice];
    
    const updatedQuestions = 
        getUpdatedQuestions(questionList, {id, choices: newChoices});
    
    return updatedQuestions;
}

const getRemovedChoicesChoiceQuestions = (questionList: QuestionTemplateList, id: string, choiceId: string): CreateQuestionTemplate[] => {
    const dropDownChoices = getQuestionChoices(questionList, id);

    const newFilteredChoices = getFilteredChoicesById(dropDownChoices, choiceId);
    
    const updatedQuestions = 
        getUpdatedQuestions(questionList, {id, choices: newFilteredChoices});
    
    return updatedQuestions;
}

const getQuestionsAfterAppendingChoice = (questionList: QuestionTemplateList, questionId: string): CreateQuestionTemplate[] => {

    const updatedQuestions = questionList.map(q => {
        if(q.id === questionId)
        {
            const oldChoices = q.choices || [];

            const updatedChoices = [...oldChoices, getNewChoice(questionList, q.id)]
            return  {...q, choices: updatedChoices}
        }
        return q
    });
    
    return updatedQuestions;
}

const getAppendedList = (questionList: QuestionTemplateList, question: CreateQuestionTemplate): CreateQuestionTemplate[] => {
    
    return [...questionList, question]
}

const getResetedLists = (questionList: QuestionTemplateList, question: CreateQuestionTemplate): CreateQuestionTemplate[] => {
    
    const updatedList = questionList.map(x => x.id === question.id ? question : x);
    
    return updatedList;
}

const getFilteredList = (questionList: QuestionTemplateList, id: string): CreateQuestionTemplate[] => {
    
    return questionList.filter(x =>  x.id !== id);
}


const findQuestionById = (questionList: QuestionTemplateList, id: string) => {
    return questionList.find(x => x.id === id);
}

const findChoiceById = (question: CreateQuestionTemplate, choiceId: string) => {
    
    return question.choices?.filter( x=> x.id === choiceId);
    
}


const getNextQuestionId = (questions: QuestionTemplateList) => {
    const maxId = questions.reduce((maxId, question) => Math.max(+(question.id || 1), maxId), -1)
    return (maxId + 1).toString();
}

const getNewChoice = (questions: QuestionTemplateList, questionId: string): CreateChoice => {
    
    return {
        id: getNextChoiceId(questions, questionId),
        value: ''
    }
    
}

const getNextChoiceId = (questions: QuestionTemplateList, questionId: string) => {
    const question = findQuestionById(questions, questionId)

    if  (! question?.choices)
    {
        return '0'
    }

    const maxId = question.choices.reduce((maxId, question) => Math.max(+question.id, maxId), -1)
    return (maxId + 1).toString();
}

type QuestionTemplateList = CreateQuestionTemplate[];

interface QuestionState {
    questions: CreateQuestionTemplate[];
}

type QuestionAction = 
| AddQuestion 
| RemoveQuestion 
| SET_QUESTION_TO_PARAGRAPH 
| SET_QUESTION_TO_PARAGRAPH
| SET_QUESTION_TO_SHORT_ANSWER | SET_QUESTION_TO_DROP_DOWN | SET_QUESTION_TO_MULTIPLE_CHOICE
| SET_QUESTION_TO_DATE | SET_QUESTION_TO_NUMBER | SET_QUESTION_TO_YES_NO
| SET_QUESTION_TO_FILE_UPLOAD
| UPDATE_QUESTION_TEXT
| UPDATE_QUESTION_PARAGRAPH
| UPDATE_QUESTION_SHORT_ANSWER
| UPDATE_QUESTION_DROP_DOWN
| UPDATE_QUESTION_MULTIPLE_CHOICE
| APPEND_QUESTION_CHOICES_CHOICE
| REMOVE_QUESTION_CHOICES_CHOICE
| UPDATE_QUESTION_CHOICES_CHOICE
| UPDATE_QUESTION_CHOICE_MAX_CHOICE
| UPDATE_QUESTION_CHOICE_OTHER
| UPDATE_QUESTION_DATE
| UPDATE_QUESTION_DATE
| UPDATE_QUESTION_NUMBER
| UPDATE_QUESTION_YES_NO
| UPDATE_QUESTION_FILE_UPLOAD
| APPEND_CHOICE_TO_QUESTION_DROP_DOWN
| REMOVE_CHOICE_FROM_QUESTION_DROP_DOWN
| UPDATE_QUESTION_DROP_DOWN_CHOICE

//ADD OR REMOVE
type AddQuestion = {type: QuestionActionKind.ADD_QUESTION }

type RemoveQuestion = { type: QuestionActionKind.REMOVE_QUESTION, id: string}


//SET
type SET_QUESTION_TO_PARAGRAPH = {type: QuestionActionKind.SET_QUESTION_TO_PARAGRAPH, id: string}

type SET_QUESTION_TO_SHORT_ANSWER = {type: QuestionActionKind.SET_QUESTION_TO_SHORT_ANSWER, id: string}

type SET_QUESTION_TO_DROP_DOWN = {type: QuestionActionKind.SET_QUESTION_TO_DROP_DOWN, id: string}

type SET_QUESTION_TO_MULTIPLE_CHOICE = {type: QuestionActionKind.SET_QUESTION_TO_MULTIPLE_CHOICE, id: string}

type SET_QUESTION_TO_DATE = {type: QuestionActionKind.SET_QUESTION_TO_DATE, id: string}

type SET_QUESTION_TO_NUMBER = {type: QuestionActionKind.SET_QUESTION_TO_NUMBER, id: string}

type SET_QUESTION_TO_YES_NO = {type: QuestionActionKind.SET_QUESTION_TO_YES_NO, id: string}

type SET_QUESTION_TO_FILE_UPLOAD = {type: QuestionActionKind.SET_QUESTION_TO_FILE_UPLOAD, id: string}

//UPDATE

type UPDATE_QUESTION_TEXT = {type: QuestionActionKind.UPDATE_QUESTION_TEXT, payload: {id: string, question: string} }

type UPDATE_QUESTION_PARAGRAPH = {type: QuestionActionKind.UPDATE_QUESTION_PARAGRAPH, payload: {id: string, question: string} }

type UPDATE_QUESTION_SHORT_ANSWER = {type: QuestionActionKind.UPDATE_QUESTION_SHORT_ANSWER, payload: {id: string, question: string} }

type UPDATE_QUESTION_DROP_DOWN = {type: QuestionActionKind.UPDATE_QUESTION_DROP_DOWN, payload: {id: string, question: string} }

type UPDATE_QUESTION_MULTIPLE_CHOICE = {type: QuestionActionKind.UPDATE_QUESTION_MULTIPLE_CHOICE, payload: {id: string, question: string} }

type UPDATE_QUESTION_DATE = {type: QuestionActionKind.UPDATE_QUESTION_DATE, payload: {id: string, question: string} }

type UPDATE_QUESTION_NUMBER = {type: QuestionActionKind.UPDATE_QUESTION_NUMBER, payload: {id: string, question: string} }

type UPDATE_QUESTION_YES_NO = {type: QuestionActionKind.UPDATE_QUESTION_YES_NO, payload: {id: string, question: string} }

type UPDATE_QUESTION_FILE_UPLOAD = {type: QuestionActionKind.UPDATE_QUESTION_FILE_UPLOAD, payload: {id: string, question: string} }


//CHOICE MANIPULATION
type APPEND_QUESTION_CHOICES_CHOICE = { type: QuestionActionKind.APPEND_QUESTION_CHOICES_CHOICE, id: string }

type REMOVE_QUESTION_CHOICES_CHOICE = { type: QuestionActionKind.REMOVE_QUESTION_CHOICES_CHOICE, payload: { id: string, choiceId: string } }

type UPDATE_QUESTION_CHOICES_CHOICE = 
    {type: QuestionActionKind.UPDATE_QUESTION_CHOICES_CHOICE, payload: {questionId: string,choiceId: string, value: string}}

type UPDATE_QUESTION_CHOICE_MAX_CHOICE = 
{
    type: QuestionActionKind.UPDATE_QUESTION_CHOICE_MAX_CHOICE,
    payload: {questionId: string, maxChoice: number}
}

type UPDATE_QUESTION_CHOICE_OTHER = 
{
    type: QuestionActionKind.UPDATE_QUESTION_CHOICE_OTHER,
    payload: {questionId: string}
}

//DROP DOWN MANIPULATION
type APPEND_CHOICE_TO_QUESTION_DROP_DOWN = 
{
    type: QuestionActionKind.APPEND_CHOICE_TO_QUESTION_DROP_DOWN,
    payload: { questionId: string }
}

type REMOVE_CHOICE_FROM_QUESTION_DROP_DOWN = 
{
    type: QuestionActionKind.REMOVE_CHOICE_FROM_QUESTION_DROP_DOWN,
    payload: {questionId: string,choiceId: string}
}

type UPDATE_QUESTION_DROP_DOWN_CHOICE = 
{
    type: QuestionActionKind.UPDATE_QUESTION_DROP_DOWN_CHOICE,
    payload: {questionId: string,choiceId: string}
}

export enum SetQuestionActionKind {
    SET_QUESTION_TO_PARAGRAPH = "SET_QUESTION_TO_PARAGRAPH",
    SET_QUESTION_TO_SHORT_ANSWER = "SET_QUESTION_TO_SHORT_ANSWER",
    SET_QUESTION_TO_DROP_DOWN = "SET_QUESTION_TO_DROP_DOWN",
    SET_QUESTION_TO_MULTIPLE_CHOICE = "SET_QUESTION_TO_MULTIPLE_CHOICE",
    SET_QUESTION_TO_DATE = "SET_QUESTION_TO_DATE",
    SET_QUESTION_TO_NUMBER = "SET_QUESTION_TO_NUMBER",
    SET_QUESTION_TO_YES_NO = "SET_QUESTION_TO_YES_NO",
    SET_QUESTION_TO_FILE_UPLOAD = "ADD_FILE_UPLOAD",
}

export enum UpdateQuestionActionKind {
    UPDATE_QUESTION_PARAGRAPH = "UPDATE_QUESTION_PARAGRAPH",
    UPDATE_QUESTION_SHORT_ANSWER = "UPDATE_QUESTION_SHORT_ANSWER",
    UPDATE_QUESTION_DROP_DOWN = "UPDATE_QUESTION_DROP_DOWN",
    UPDATE_QUESTION_MULTIPLE_CHOICE = "UPDATE_QUESTION_MULTIPLE_CHOICE",
    UPDATE_QUESTION_DATE = "UPDATE_QUESTION_DATE",
    UPDATE_QUESTION_NUMBER = "UPDATE_QUESTION_NUMBER",
    UPDATE_QUESTION_YES_NO = "UPDATE_QUESTION_YES_NO", 
    UPDATE_QUESTION_FILE_UPLOAD = "UPDATE_QUESTION_FILE_UPLOAD",
}

export enum QuestionActionKind {
     
    ADD_QUESTION = 'ADD_QUESTION',
    REMOVE_QUESTION = 'REMOVE_QUESTION',
    
    SET_QUESTION_TO_PARAGRAPH = "SET_QUESTION_TO_PARAGRAPH",
    SET_QUESTION_TO_SHORT_ANSWER = "SET_QUESTION_TO_SHORT_ANSWER",
    SET_QUESTION_TO_DROP_DOWN = "SET_QUESTION_TO_DROP_DOWN",
    SET_QUESTION_TO_MULTIPLE_CHOICE = "SET_QUESTION_TO_MULTIPLE_CHOICE",
    SET_QUESTION_TO_DATE = "SET_QUESTION_TO_DATE",
    SET_QUESTION_TO_NUMBER = "SET_QUESTION_TO_NUMBER",
    SET_QUESTION_TO_YES_NO = "SET_QUESTION_TO_YES_NO",
    SET_QUESTION_TO_FILE_UPLOAD = "ADD_FILE_UPLOAD",
    
    UPDATE_QUESTION_TEXT = "UPDATE_QUESTION_TEXT",


    UPDATE_QUESTION_PARAGRAPH = "UPDATE_QUESTION_PARAGRAPH",
    UPDATE_QUESTION_SHORT_ANSWER = "UPDATE_QUESTION_SHORT_ANSWER",
    UPDATE_QUESTION_DROP_DOWN = "UPDATE_QUESTION_DROP_DOWN",
    UPDATE_QUESTION_MULTIPLE_CHOICE = "UPDATE_QUESTION_MULTIPLE_CHOICE",
    UPDATE_QUESTION_DATE = "UPDATE_QUESTION_DATE",
    UPDATE_QUESTION_NUMBER = "UPDATE_QUESTION_NUMBER",
    UPDATE_QUESTION_YES_NO = "UPDATE_QUESTION_YES_NO", 
    UPDATE_QUESTION_FILE_UPLOAD = "UPDATE_QUESTION_FILE_UPLOAD", 
    
    APPEND_QUESTION_CHOICES_CHOICE = "APPEND_QUESTION_CHOICES_CHOICE",
    REMOVE_QUESTION_CHOICES_CHOICE = "REMOVE_QUESTION_CHOICES_CHOICE",
    UPDATE_QUESTION_CHOICES_CHOICE = "UPDATE_QUESTION_CHOICES_CHOICE",
    UPDATE_QUESTION_CHOICE_MAX_CHOICE = "UPDATE_QUESTION_CHOICE_MAX_CHOICE",
    UPDATE_QUESTION_CHOICE_OTHER = "UPDATE_QUESTION_CHOICE_OTHER",

    APPEND_CHOICE_TO_QUESTION_DROP_DOWN= "APPEND_CHOICE_TO_QUESTION_DROP_DOWN",
    REMOVE_CHOICE_FROM_QUESTION_DROP_DOWN = "REMOVE_CHOICE_FROM_QUESTION_DROP_DOWN",
    UPDATE_QUESTION_DROP_DOWN_CHOICE = "UPDATE_DROP_DOWN_CHOICE",
}


export type SET_QUESTION_TYPE = |
QuestionActionKind.SET_QUESTION_TO_PARAGRAPH
 |QuestionActionKind.SET_QUESTION_TO_SHORT_ANSWER
 | QuestionActionKind.SET_QUESTION_TO_YES_NO
 | QuestionActionKind.SET_QUESTION_TO_DROP_DOWN
 | QuestionActionKind.SET_QUESTION_TO_MULTIPLE_CHOICE
 | QuestionActionKind.SET_QUESTION_TO_DATE
 | QuestionActionKind.SET_QUESTION_TO_NUMBER
 | QuestionActionKind.SET_QUESTION_TO_FILE_UPLOAD
 
 export type UPDATE_QUESTION_TYPE = |
 QuestionActionKind.UPDATE_QUESTION_PARAGRAPH
  |QuestionActionKind.UPDATE_QUESTION_SHORT_ANSWER
  | QuestionActionKind.UPDATE_QUESTION_YES_NO
  | QuestionActionKind.UPDATE_QUESTION_DROP_DOWN
  | QuestionActionKind.UPDATE_QUESTION_MULTIPLE_CHOICE
  | QuestionActionKind.UPDATE_QUESTION_DATE
  | QuestionActionKind.UPDATE_QUESTION_NUMBER
  | QuestionActionKind.UPDATE_QUESTION_FILE_UPLOAD