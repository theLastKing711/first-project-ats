import useForm from "../../hooks/useForm";
import { ApplicationFOrmApi, PersonalInformation } from "../../types";
import AddQuestions from "../add-questions/AddQuestions";
import FormCard from "../form-card/FormCard";
import PersonalInformationForm from "../personal-information-form/PersonalInformationForm";

const PersonalInformationCard = () => {
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
        <>
          <PersonalInformationForm
            personalInformation={form.data.attributes.personalInformation}
            onPersonalInformationChange={handlePersonalInformationChange}
          />
          <AddQuestions />
        </>
      )}
    </FormCard>
  );
};

export default PersonalInformationCard;
