import { Layout, UploadProps } from "antd";
import { CSSProperties } from "react";
import { Content } from "antd/es/layout/layout";
import AppSideBar from "./components/app-side-bar/AppSideBar";
import AppHeader from "./components/app-header/AppHeader";
import UploadFormCard from "./components/upload-image-card/UploadImageCard";
import PersonalInformationCard from "./components/personal-information-card/PersonalInformationCard";
import AdditionalQuestions from "./components/additional-questions/AdditionalQuestions";
import useForm from "./hooks/useForm";
import { CreateQuestionTemplate } from "./types";
import AddQuestions from "./components/add-questions/AddQuestions";
import CoverImageUpload from "./components/cover-image-upload/CoverImageUpload";

export const ASIDE_WIDTH = "7.11206rem";

const contentLayoutStyles: CSSProperties = {
  marginLeft: ASIDE_WIDTH,
  padding: "7rem 4.35rem",
};

function App() {
  const {
    form,
    updateCoverImageApi,
    removeCoverImageApi,
    addPersonalInformationQuestionApi,
    addCusomizedQuestionApi,
    updateCustomizedQuestionsApi,
    removeCustomizedQuestionsApi,
  } = useForm();

  const addPersonalInformationQuestions = (
    question: CreateQuestionTemplate
  ) => {
    return addPersonalInformationQuestionApi(question)!;
  };

  const addAdditionalQuestion = (question: CreateQuestionTemplate) => {
    return addCusomizedQuestionApi(question)!;
  };

  const updateCustomizedQuestions = (question: CreateQuestionTemplate) => {
    updateCustomizedQuestionsApi(question);
  };

  const deleteCustomizedQuestions = (questionId: string) => {
    removeCustomizedQuestionsApi(questionId);
  };

  const shouldShowInitalSeperator = (hasAddedQuestions: boolean) => {
    return hasAddedQuestions && hasBaseQuestions();
  };

  const hasBaseQuestions = () => {
    if (!form) {
      return false;
    }

    return form?.data.attributes.customisedQuestions.length > 0;
  };

  const uploadImage: UploadProps["customRequest"] = (options) => {
    updateCoverImageApi("https://www.ionos.com");
  };

  return (
    <Layout hasSider>
      <AppSideBar />
      <Layout
        style={{
          background: "white",
        }}
      >
        <AppHeader />
        <Content style={contentLayoutStyles}>
          <div
            style={{
              height: 1500,
              color: "blue",
            }}
          >
            {form && (
              <>
                <UploadFormCard
                  imageUpload={
                    <CoverImageUpload handleImageUpload={uploadImage} />
                  }
                />
                <PersonalInformationCard
                  addQuestionNode={
                    <AddQuestions
                      handleQuestionAddedApi={addPersonalInformationQuestions}
                      shouldShowInitalSeperator={shouldShowInitalSeperator}
                    />
                  }
                />
                <AdditionalQuestions
                  customisedQuestions={form.data.attributes.customisedQuestions}
                  handleUpdate={updateCustomizedQuestions}
                  handleDelete={deleteCustomizedQuestions}
                  addQuestionNode={
                    <AddQuestions
                      handleQuestionAddedApi={addAdditionalQuestion}
                      shouldShowInitalSeperator={shouldShowInitalSeperator}
                    />
                  }
                />
              </>
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
