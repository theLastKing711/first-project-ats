import { CSSProperties } from "react";
import FormInput from "../form/FormInput";
import { PersonalInformation } from "../../types";

const rootStyles: CSSProperties = {
  padding: "1.5rem 1rem",
};

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

// An interface for our actions
interface FormAction {
  type: FormActionKind;
  payload: number;
}

enum FormActionKind {
  SET_FIRST_NAME = "SET_FIRST_NAME",
  SET_LAST_NAME = "SET_LAST_NAME",
  SET_EMAIL = "SET_EMAIL",
  SET_PHONE = "SET_PHONE",
  SET_NATIONALITY = "SET_NATIONALITY",
  SET_CURRENT_RESIDENCE = "SET_CURRENT_RESIDENCE",
  SET_ID_NUMBER = "SET_ID_NUMBER",
  SET_DATE_BIRTH = "SET_DATE_BIRTH",
  SET_GENDER = "SET_GENDER",
}

// An interface for our state
interface FormState {
  firstName: FormFieldDetails;
  lastName: FormFieldDetails;
  email: FormFieldDetails;
  phoneNumber: FormFieldDetails;
  nationality: FormFieldDetails;
  currentResidence: FormFieldDetails;
  idNumber: FormFieldDetails;
  dateOfBirth: FormFieldDetails;
  gender: FormFieldDetails;
}

interface FormFieldDetails {
  internalUse: boolean;
  show: boolean;
}

const intialFormState = {
  firstName: {
    internalUser: false,
    show: false,
  },
  lastName: {
    internalUser: false,
    show: false,
  },
  emailId: {
    internalUser: false,
    show: false,
  },
  phoneNumberNumber: {
    internalUser: false,
    show: false,
  },
  nationality: {
    internalUser: false,
    show: false,
  },
  currentResidence: {
    internalUser: false,
    show: false,
  },
  idNumber: {
    internalUser: false,
    show: false,
  },
  dateOfBirth: {
    internalUser: false,
    show: false,
  },
  gender: {
    internalUser: false,
    show: false,
  },
};

function formReducer(state: FormState, action: FormAction) {
  const { type, payload } = action;
  switch (type) {
    case FormActionKind.SET_FIRST_NAME:
      return {
        ...state,
      };
    default:
      return state;
  }
}

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
  // const [formState, dispatch] = useReducer(formReducer, intialFormState);

  console.log("personal information", personalInformation);

  // const updateField = <T extends keyof PersonalInformation, U extends keyof T>(personalInformation: PersonalInformation, updatedField: T, field: U, fieldValue: T[U]) => {

  //   const updatedData: PersonalInformation = {...personalInformation, [updatedField]: {
  //     ...personalInformation[updatedField],
  //     [field]: fieldValue
  //   } }

  //   onPersonalInformationChange(updatedData);
  // }

  const updateField = (
    info: PersonalInformation,
    updatedData: Partial<PersonalInformation>
  ) => {
    const newData = {
      ...info,
      ...updatedData,
    };

    console.log("updated data", newData.phoneNumber);

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
    <div style={rootStyles}>
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
      />
    </div>
  );
};

export default PersonalInformationForm;
