import React, { CSSProperties } from "react";
import useForm from "../../hooks/useForm";
import { ApplicationFOrmApi, PersonalInformation } from "../../types";
import FormCard from "../form-card/FormCard";
import PersonalInformationForm from "../personal-information-form/PersonalInformationForm";

const rootStyles: CSSProperties = {
  padding: "1.5rem 1rem",
};

interface Props {
  addQuestionNode: React.ReactNode;
}

const PersonalInformationCard = ({ addQuestionNode }: Props) => {
  console.log("personal changing");
  const { form, updateForm } = useForm();

  const handlePersonalInformationChange = (
    updatedPersonalInformation: PersonalInformation
  ) => {
    if (!form?.data) {
      return;
    }

    const updateData: ApplicationFOrmApi = {
      ...form,
      data: {
        ...form.data,
        attributes: {
          ...form.data.attributes,
          personalInformation: { ...updatedPersonalInformation },
        },
      },
    };

    console.log(
      "new data",
      updateData.data.attributes.personalInformation.phoneNumber
    );

    updateForm(updateData);
  };

  console.log("form", form);

  return (
    <FormCard title="Personal Information">
      {form?.data && (
        <div style={rootStyles}>
          <PersonalInformationForm
            personalInformation={form.data.attributes.personalInformation}
            onPersonalInformationChange={handlePersonalInformationChange}
          />
          {addQuestionNode}
        </div>
      )}
    </FormCard>
  );
};

export default PersonalInformationCard;
