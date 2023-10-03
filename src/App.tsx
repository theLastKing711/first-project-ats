import { Layout, UploadProps } from "antd";
import { CSSProperties } from "react";
import { Content } from "antd/es/layout/layout";
import AppSideBar from "./components/app-side-bar/AppSideBar";
import AppHeader from "./components/app-header/AppHeader";
import PersonalInformationCard from "./components/personal-information-card/PersonalInformationCard";
import AdditionalQuestions from "./components/additional-questions/AdditionalQuestions";
import useForm from "./hooks/useForm";
import { ApplicationFOrmApi, CreateQuestionTemplate } from "./types";
import AddQuestions from "./components/add-questions/AddQuestions";
import CoverImageUpload from "./components/cover-image-upload/CoverImageUpload";
import { getBase64 } from "./utils";
import { RcFile } from "antd/es/upload";
import UpdateUploadImage from "./components/update-upload-image/UpdateUploadImage";
import RemoveQuestionButton from "./components/remove-question-button/RemoveQuestionButton";
import UploadOrUploadedImage from "./components/upload-or-Uploaded-image/UploadOrUploadedImage";

export const ASIDE_WIDTH = "7.11206rem";

const contentLayoutStyles: CSSProperties = {
  marginLeft: ASIDE_WIDTH,
  padding: "7rem 4.35rem",
};

function App() {
  const {
    MockImageUrl,
    updateMockIMage,
    form,
    updateCoverImageApi,
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

  const uploadImage: UploadProps["customRequest"] = async (
    options
  ): Promise<ApplicationFOrmApi<CreateQuestionTemplate>> => {
    const base64Image = await getBase64(options.file as RcFile);
    const result = await updateCoverImageApi(base64Image)!;

    updateMockIMage(base64Image);
    return result;
  };

  const deleteImage = async (): Promise<
    ApplicationFOrmApi<CreateQuestionTemplate>
  > => {
    const result = await updateCoverImageApi("")!;
    updateMockIMage("");
    return result;
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
          {form && (
            <>
              <UploadOrUploadedImage
                coverImage={MockImageUrl}
                uploadNode={
                  <CoverImageUpload handleImageUpload={uploadImage} />
                }
                uploadedNode={
                  <UpdateUploadImage
                    removeButton={
                      <RemoveQuestionButton
                        labelText="Delete & re-upload"
                        handleButtonClick={deleteImage}
                      />
                    }
                    imgUrl={MockImageUrl}
                  />
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
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
