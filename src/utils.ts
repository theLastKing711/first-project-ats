import { CreateChoice, CreateQuestionTemplate, QuestionTemplate } from './types';

function getRandomStringNumber(max: number) {
    return Math.floor(Math.random() * max).toString();
  }

export const trasnformToSavedQuestions = (questions: QuestionTemplate[]): CreateQuestionTemplate[] => {
    
    return questions.map<CreateQuestionTemplate>(q => {

        const choices = (q.choices || [])
                    .map<CreateChoice>
                    (c => ({id: getRandomStringNumber(10000000), value: c}))
        
        const newId = q.id ?? getRandomStringNumber(10000000); 
        
        return {...q, id: newId, isSaved: true, choices}
        
    })
    
}