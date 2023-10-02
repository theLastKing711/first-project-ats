import { CSSProperties } from "react";
import FormInput from "../form/FormInput";
import { PersonalInformation } from "../../types";

const phoneNumberLabelStyles: CSSProperties = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "114%",
  flex: 1,
};

const phoneNumberLabelSpanStyles: CSSProperties = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "1.1rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "114%",
  flex: 1,
};

const phoneNumberLabelElement = (
  <label htmlFor="Phone" style={phoneNumberLabelStyles}>
    Phone <span style={phoneNumberLabelSpanStyles}>(without dial code)</span>
  </label>
);

interface Props {
  personalInformation: PersonalInformation;
  onPersonalInformationChange: (
    newPersonalInformation: PersonalInformation
  ) => void;
}

const PersonalInformationForm = ({
  personalInformation,
  onPersonalInformationChange,
}: Props) => {
  const updateField = (
    info: PersonalInformation,
    updatedData: Partial<PersonalInformation>
  ) => {
    const newData = {
      ...info,
      ...updatedData,
    };

    onPersonalInformationChange(newData);
  };

  const handlePhoneIsInternalChange = (isChecked: boolean) => {
    updateField(personalInformation, {
      phoneNumber: {
        ...personalInformation.phoneNumber,
        internalUse: isChecked,
      },
    });
  };

  const handlePhoneIsShownChange = (isChecked: boolean) => {
    updateField(personalInformation, {
      phoneNumber: {
        ...personalInformation.phoneNumber,
        show: isChecked,
      },
    });
  };

  const handleNationalityIsInternalChange = (isChecked: boolean) => {
    updateField(personalInformation, {
      nationality: {
        ...personalInformation.nationality,
        internalUse: isChecked,
      },
    });
  };

  const handleNationalityIsShownChange = (isChecked: boolean) => {
    updateField(personalInformation, {
      nationality: {
        ...personalInformation.nationality,
        show: isChecked,
      },
    });
  };

  const handleCurrentResidenceIsInternalChange = (isChecked: boolean) => {
    updateField(personalInformation, {
      currentResidence: {
        ...personalInformation.currentResidence,
        internalUse: isChecked,
      },
    });
  };

  const handleCurrentResidenceIsShownChange = (isChecked: boolean) => {
    updateField(personalInformation, {
      currentResidence: {
        ...personalInformation.currentResidence,
        show: isChecked,
      },
    });
  };

  const handleIdNumberIsInternalChange = (isChecked: boolean) => {
    updateField(personalInformation, {
      idNumber: {
        ...personalInformation.idNumber,
        internalUse: isChecked,
      },
    });
  };

  const handleIdNumberIsShownChange = (isChecked: boolean) => {
    updateField(personalInformation, {
      idNumber: {
        ...personalInformation.idNumber,
        show: isChecked,
      },
    });
  };

  const handleDateOfBirthIsInternalChange = (isChecked: boolean) => {
    updateField(personalInformation, {
      dateOfBirth: {
        ...personalInformation.dateOfBirth,
        internalUse: isChecked,
      },
    });
  };

  const handleDateOfBirthIsShownChange = (isChecked: boolean) => {
    updateField(personalInformation, {
      dateOfBirth: {
        ...personalInformation.dateOfBirth,
        show: isChecked,
      },
    });
  };

  const handleGenderIsInternalChange = (isChecked: boolean) => {
    updateField(personalInformation, {
      gender: {
        ...personalInformation.gender,
        internalUse: isChecked,
      },
    });
  };

  const handleGenderIsShownChange = (isChecked: boolean) => {
    updateField(personalInformation, {
      gender: {
        ...personalInformation.gender,
        show: isChecked,
      },
    });
  };

  return (
    <div>
      <FormInput id="first-name" label="First name" />
      <FormInput id="last-name" label="Last name" />
      <FormInput id="email" label="Email" />
      <FormInput
        id="Phone"
        label={phoneNumberLabelElement}
        extraOption={{
          isInternal: personalInformation.phoneNumber.internalUse,
          isShown: personalInformation.phoneNumber.show,
          onIsInternalChange: handlePhoneIsInternalChange,
          onShownChange: handlePhoneIsShownChange,
        }}
      />
      <FormInput
        id="nationality"
        label="Nationality"
        extraOption={{
          isInternal: personalInformation.nationality.internalUse,
          isShown: personalInformation.nationality.show,
          onIsInternalChange: handleNationalityIsInternalChange,
          onShownChange: handleNationalityIsShownChange,
        }}
      />
      <FormInput
        id="current-residence"
        label="Current Residence"
        extraOption={{
          isInternal: personalInformation.currentResidence.internalUse,
          isShown: personalInformation.currentResidence.show,
          onIsInternalChange: handleCurrentResidenceIsInternalChange,
          onShownChange: handleCurrentResidenceIsShownChange,
        }}
      />
      <FormInput
        id="id-number"
        label="ID Number"
        extraOption={{
          isInternal: personalInformation.idNumber.internalUse,
          isShown: personalInformation.idNumber.show,
          onIsInternalChange: handleIdNumberIsInternalChange,
          onShownChange: handleIdNumberIsShownChange,
        }}
      />
      <FormInput
        id="date-of-birth"
        label="Date of Birth"
        extraOption={{
          isInternal: personalInformation.dateOfBirth.internalUse,
          isShown: personalInformation.dateOfBirth.show,
          onIsInternalChange: handleDateOfBirthIsInternalChange,
          onShownChange: handleDateOfBirthIsShownChange,
        }}
      />
      <FormInput
        id="gender"
        label="Gender"
        extraOption={{
          isInternal: personalInformation.gender.internalUse,
          isShown: personalInformation.gender.show,
          onIsInternalChange: handleGenderIsInternalChange,
          onShownChange: handleGenderIsShownChange,
        }}
        shouldShowSeperator={false}
      />
    </div>
  );
};

export default PersonalInformationForm;
