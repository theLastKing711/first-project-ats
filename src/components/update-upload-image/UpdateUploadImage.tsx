import { CSSProperties } from "react";
import { CARD_BOTTOM_MARGIN, CARD_WIDTH } from "../form-card/FormCard";

const rootStyles: CSSProperties = {
  width: CARD_WIDTH,
  marginBottom: CARD_BOTTOM_MARGIN,
  borderRadius: "1.25rem",
  height: "25rem",
  display: "flex",
  flexDirection: "column",
  boxShadow: "3px 3px 14px 0px rgba(190, 190, 190, 0.30)",
  overflow: "auto",
};

const contentStyles: CSSProperties = {
  flex: 1,
  minHeight: 0,
};

const imageStyles: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
  maxHeight: "100%",
};

const actionsStyles: CSSProperties = {
  padding: "1.69rem 1.63rem 1.39rem",
  boxShadow: "3px 3px 14px 0px rgba(190, 190, 190, 0.30)",
};

interface Props {
  removeButton: React.ReactNode;
  imgUrl?: string;
}

const UpdateUploadImage = ({ removeButton, imgUrl }: Props) => {
  return (
    <div style={rootStyles}>
      <div style={contentStyles}>
        <img style={imageStyles} src={imgUrl}></img>
      </div>
      <div style={actionsStyles}>{removeButton}</div>
    </div>
  );
};

export default UpdateUploadImage;
