
export interface ApplicationFOrmApi {
    data: ApplicationFOrm;
}


export interface ApplicationFOrm {
    id: string;
    type: string;
    attributes: ApplicationFormAttributes
}

export interface ApplicationFormAttributes {
    coverImage: string; // format uri
    personalInformation: PersonalInformation;
    profile: Profile;
    personalQuestions: QuestionTemplate[];
}

export interface PersonalInformation {
    firstName: PersonalInformationTemplate;
    lastName: PersonalInformationTemplate;
    email: PersonalInformationTemplate;
    phoneNumber: PersonalInformationTemplate;
    nationality: PersonalInformationTemplate;
    currentResidence: PersonalInformationTemplate;
    idNumber: PersonalInformationTemplate;
    dateOfBirth: PersonalInformationTemplate;
    gender: PersonalInformationTemplate;
}

export interface  PersonalInformationTemplate {
  internalUse: boolean; //default: false
  show: boolean; //default: true
}

export interface Profile {
    education: ProfileTemplate; 
    experience: ProfileTemplate;
    resume: ProfileTemplate; 
    profileQuestions?: QuestionTemplate[];
}

export interface ProfileTemplate {
    mandatory: boolean // defautl true
    show: boolean // default true
}

export interface QuestionTemplate {
    id?: string; //format uuid
    type: QuestionType;
    question: string;
    choices?: string[]; // for MultipleChoice or dropdown
    maxChoice?: number; // for MultipleChoice
    disqualify?: boolean;
    other?: boolean; // for MultipleChoice
}

export type CreateQuestionTemplate = 
    Omit<QuestionTemplate, "id"| "choices"> & {id: string, choices?: CreateChoice[], isSaved?: boolean}


export interface CreateChoice {
    id: string;
    value: string;
}

export type QuestionType =
  | "Paragraph"
  | "ShortAnswer"
  | "Dropdown"
  | "MultipleChoice"
  | "Date"
  | "Number"
  | "YesNo"
  | "FileUpload";
