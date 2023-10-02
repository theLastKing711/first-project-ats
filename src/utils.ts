import uuid from 'react-uuid';
import { ApplicationFOrmApi, CreateChoice, CreateQuestionTemplate, QuestionTemplate } from './types';


export const trasnformFormDataToClientShape = (formData: ApplicationFOrmApi<QuestionTemplate>): ApplicationFOrmApi => {
    
    const transformedData: ApplicationFOrmApi<CreateQuestionTemplate> = {
        ...formData,
        data: {
          ...formData.data,
          attributes: {
            ...formData.data.attributes,
            profile: { 
              ...formData.data.attributes.profile,
              profileQuestions: trasnformToSavedQuestions(formData.data.attributes.profile.profileQuestions)
            },
            customisedQuestions: trasnformToSavedQuestions(formData.data.attributes.customisedQuestions)
          }
        }
    }

    return transformedData;
}


function getRandomStringNumber(max: number) {
    return Math.floor(Math.random() * max).toString();
  }

export const trasnformToSavedQuestions = (questions: QuestionTemplate[] = []) => {
    
    return questions.map<CreateQuestionTemplate>(q => {

        const choices = (q.choices || [])
                    .map<CreateChoice>
                    (c => ({id: getRandomStringNumber(10000000), value: c}))
        
        const newId = q.id ?? getRandomStringNumber(10000000); 
        
        return {...q, id: newId, isSaved: true, choices}
        
    })
    
}

export const trasnformFormDataToServerShape = (formData: ApplicationFOrmApi<CreateQuestionTemplate>) => {
    
  const transformedData: ApplicationFOrmApi<QuestionTemplate> = {
      ...formData,
      data: {
        ...formData.data,
        attributes: {
          ...formData.data.attributes,
          profile: { 
            ...formData.data.attributes.profile,
            profileQuestions: trasnformToServerQuestions(formData.data.attributes.profile.profileQuestions)
          },
          customisedQuestions: trasnformToServerQuestions(formData.data.attributes.customisedQuestions)
        }
      }
  }

  return transformedData;
}


export const trasnformToServerQuestions = (questions: CreateQuestionTemplate[] = []) => {
    
  return questions.map<QuestionTemplate>(q => {

      const choices = (q.choices || [])
                  .map<string>(c => c.value);
      
      const newId =  q.isSaved ? q.id : uuid(); 

      console.log('new id', newId);

      const { isSaved, ...question } = q;
      
      return {...question, id: newId, choices };
      
  });
  
}