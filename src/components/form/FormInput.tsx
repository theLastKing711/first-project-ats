import { Checkbox, ConfigProvider, Input, Switch } from "antd";
import { CSSProperties } from "react";
import QuestionSeperator from "../question-seperator/QuestionSeperator";

const rootStyles: CSSProperties = {
  marginBottom: "1.44rem",
};

const FirstRowStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const labelStyles: CSSProperties = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "114%",
  flex: 1,
};

const checkBoxContainerStyles: CSSProperties = {
  flex: "0 0 120px",
};

const checkBoxStyles: CSSProperties = {
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "0.9375rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1.5rem",
  letterSpacing: "-0.00563rem",
};

const switchContainerStyles: CSSProperties = {
  alignItems: "center",
  flex: "0 0 100px",
  display: "flex",
  justifyContent: "space-between",
};

const switchStyles: CSSProperties = {};

const switchLabel: CSSProperties = {
  color: "#666",
  fontFamily: "Noto Sans",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1.5rem",
  cursor: "pointer",
};

interface Props {
  id: string;
  label: string | JSX.Element;
  extraOption?: {
    isShown: boolean;
    onShownChange: (isChecked: boolean) => void;
    isInternal: boolean;
    onIsInternalChange: (isChecked: boolean) => void;
  };
  shouldShowSeperator?: boolean;
}

const FormInput = ({
  id,
  label,
  extraOption,
  shouldShowSeperator = true,
}: Props) => {
  const switchLabelText = extraOption?.isShown ? "Hide" : "Show";

  const isLabelString = typeof label === "string";

  const labelElement = isLabelString ? (
    <label style={labelStyles} htmlFor={id}>
      {label}
    </label>
  ) : (
    <>{label}</>
  );

  return (
    <div style={rootStyles}>
      <div style={FirstRowStyles}>
        {labelElement}
        {extraOption && (
          <>
            <div style={checkBoxContainerStyles}>
              <Checkbox
                style={checkBoxStyles}
                checked={extraOption.isInternal}
                onChange={(e) =>
                  extraOption.onIsInternalChange(Boolean(e.target.value))
                }
              >
                Internal
              </Checkbox>
            </div>
            <div style={switchContainerStyles}>
              <Switch
                style={switchStyles}
                defaultChecked
                checked={extraOption.isShown}
                onChange={(e) => extraOption.onShownChange(e)}
                id={`${id}-switch`}
              />
              <label style={switchLabel} htmlFor={`${id}-switch`}>
                {switchLabelText}
              </label>
            </div>
          </>
        )}
      </div>
      {shouldShowSeperator && <QuestionSeperator />}
    </div>
  );
};

export default FormInput;
