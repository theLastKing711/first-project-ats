import { useEffect, useState } from "react"
import { ApplicationFOrmApi, ApplicationFormAttributes, CreateQuestionTemplate, QuestionTemplate } from "../types"
import { getFormAPI, putFormAPI } from "../API/form-api";
import { trasnformFormDataToClientShape, trasnformFormDataToServerShape } from "../utils";

const useForm = () => {
  
  const [form, setForm] = useState<ApplicationFOrmApi | undefined>(undefined);
  const [MockImageUrl, setMockImageUrl] = useState<string | undefined>('')

  const deleteMockImage = () => {
    setMockImageUrl(undefined);
  }

  const updateMockIMage = (newUrl: string) => {
    setMockImageUrl(newUrl);
  }

  const getData = () => {
    return getFormAPI()
      .then((data) => data.json())
      .then((data) => {

        const formData = data as ApplicationFOrmApi<QuestionTemplate>
        
        const transformedData = trasnformFormDataToClientShape(formData);

        setForm(transformedData);
        return transformedData;
      })
  }

  useEffect(() => {
    getData();
  }, []);
  

  const updateForm = (newData: ApplicationFOrmApi) => {

    const formDataServerShape = trasnformFormDataToServerShape(newData);
    
    return putFormAPI(formDataServerShape)
      .then(getData)

      // .then((data) => data.json())
      // .then((data) => {
        // setForm(data);
      // })
  };

  const updateCoverImageApi = (coverImage: string) => {
    if (! form) {
      return;
    }

    const updatedForm = getUpdatedForm(form, { 
      coverImage
    });

    return updateForm(updatedForm);
  }
  


  const removeCoverImageApi = () => {

    if (! form) {
      return;
    }

    const updatedForm = getUpdatedForm(form, { 
      coverImage: undefined
    });

    updateForm(updatedForm);
    
  }

  const addPersonalInformationQuestionApi = (question: CreateQuestionTemplate) => {
    if (! form) {
      return;
    }

    const appendedList = getPersonalInformationAppendedQuestions(question); 

    const updatedForm = getUpdatedForm(form, { 
      profile: {
        ...form.data.attributes.profile,
        profileQuestions: appendedList
      }
    });

    return updateForm(updatedForm);
  }

  const getPersonalInformationAppendedQuestions = (newQuestions: CreateQuestionTemplate) => {

    if(! form )
    {
      return []
    }

    const questions = form.data.attributes.profile.profileQuestions || [];

    const appendedList = [...questions, newQuestions] 

    return appendedList;
  }
  

  const addCusomizedQuestionApi = (question: CreateQuestionTemplate) => {
    if (! form) {
      return;
    }

    const appendedList = getAppendAdditionalQuestion(question); 

    const updatedForm = getUpdatedForm(form, { 
      customisedQuestions: appendedList
    });

    return updateForm(updatedForm);
  }

  const getAppendAdditionalQuestion = (newQuestions: CreateQuestionTemplate) => {

    if(! form )
    {
      return []
    }

    const questions = form.data.attributes.customisedQuestions;

    const appendedList = [...questions, newQuestions] 

    return appendedList;
  }

  const updateCustomizedQuestionsApi = (question: CreateQuestionTemplate) => {

    if(! form)
    {
      return
    }

    const updatedQuestions = getUpdatedQuestions(form.data.attributes.customisedQuestions, question);

    const updatedForm = getUpdatedForm(form, { 
      customisedQuestions: updatedQuestions
    });

    return updateForm(updatedForm);
    
  }

  const removeCustomizedQuestionsApi = (id: string) => {

    if(! form)
    {
      return
    }

    const filteredQuestions = getFilterdQuestions(form.data.attributes.customisedQuestions, id);

    const updatedForm = getUpdatedForm(form, { 
      customisedQuestions: filteredQuestions
    });

    return updateForm(updatedForm);
    
  }

  const getFilterdQuestions = (questions: CreateQuestionTemplate[], id: string) => {
    return questions.filter(q => q.id !== id);
  }

  const getUpdatedQuestions = (questions: CreateQuestionTemplate[], question: CreateQuestionTemplate) => {
    return questions.map(q => q.id === question.id ? {...question} : {...q})
  }

  const getUpdatedForm = 
    (data: ApplicationFOrmApi, updatedData: Partial<ApplicationFormAttributes>):
     ApplicationFOrmApi => {
    return {
      data: {
        ...data.data,
        attributes: {
          ...data.data.attributes,
          ...updatedData
        }
      }
    }
  }
  
  return {
    MockImageUrl,
    updateMockIMage,
    deleteMockImage,
    form,
    updateForm,
    updateCoverImageApi,
    removeCoverImageApi,
    addPersonalInformationQuestionApi,
    addCusomizedQuestionApi,
    updateCustomizedQuestionsApi,
    removeCustomizedQuestionsApi
  };
}

export default useForm