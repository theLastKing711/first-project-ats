import { CSSProperties } from "react";
import { Collapse, CollapseProps } from "antd";
import { EditOutlined } from "@ant-design/icons";
import QuestionSeperator from "../question-seperator/QuestionSeperator";

const editIconStyles: CSSProperties = {
  paddingTop: "0.5rem",
  fontSize: 17,
};

interface Props {
  collapsedNode: React.ReactNode;
  label: React.ReactNode;
  seperator?: React.ReactNode;
  showSeperator?: boolean;
}

const EditQuestionCollapse = ({
  collapsedNode,
  label,
  showSeperator = true,
}: Props) => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: label,
      children: collapsedNode,
    },
  ];

  return (
    <>
      <Collapse
        expandIcon={(panelProps) => (
          <EditOutlined style={editIconStyles} {...panelProps} />
        )}
        destroyInactivePanel={true}
        expandIconPosition="end"
        items={items}
      />
      {showSeperator && <QuestionSeperator />}
    </>
  );
};

export default EditQuestionCollapse;
