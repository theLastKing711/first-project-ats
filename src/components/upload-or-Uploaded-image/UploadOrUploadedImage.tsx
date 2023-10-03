import React from "react";

interface Props {
  uploadNode: React.ReactNode;
  uploadedNode: React.ReactNode;
  coverImage: string | undefined;
}

const UploadOrUploadedImage = ({
  coverImage,
  uploadNode,
  uploadedNode,
}: Props) => {
  return <>{coverImage ? uploadedNode : uploadNode}</>;
};

export default UploadOrUploadedImage;
