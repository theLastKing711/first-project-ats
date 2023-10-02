import { CSSProperties } from "react";
import CoverImageUpload from "../cover-image-upload/CoverImageUpload";
import FormCard from "../form-card/FormCard";

const cardContentStyles: CSSProperties = {
  padding: "4rem 2.5rem 3.5rem",
};

interface Props {
  imageUpload: React.ReactNode;
}

const UploadImageCard = ({ imageUpload }: Props) => {
  return (
    <FormCard title="Upload cover image" contentStyles={cardContentStyles}>
      {imageUpload}
    </FormCard>
  );
};

export default UploadImageCard;
