import { Upload, UploadProps } from "antd";
import { CSSProperties } from "react";
import { DownloadOutlined } from "@ant-design/icons";

const mainContainerStyles: CSSProperties = {
  border: "1px dashed #000",
};

const contentStyles: CSSProperties = {
  display: "flex",
  padding: "2.5rem 5rem 3rem",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
};

const iconStyles: CSSProperties = {
  fontSize: "2.0625rem",
};

const mainTextStyles: CSSProperties = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "159.5%",
};

const secondaryTextStyles: CSSProperties = {
  color: "#979797",
  fontFamily: "Poppins",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "159.5%",
};

interface Props {
  handleImageUpload: UploadProps["customRequest"];
}

const CoverImageUpload = ({ handleImageUpload }: Props) => {
  return (
    <Upload.Dragger
      style={mainContainerStyles}
      customRequest={handleImageUpload}
    >
      <div style={contentStyles}>
        <DownloadOutlined style={iconStyles} />
        <h3 style={mainTextStyles}>Upload cover image</h3>
        <h4 style={secondaryTextStyles}>
          16:9 ratio is recommended. Max image size 1mb
        </h4>
      </div>
    </Upload.Dragger>
  );
};

export default CoverImageUpload;
