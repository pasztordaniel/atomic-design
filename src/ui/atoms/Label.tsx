import React, { LabelHTMLAttributes, PropsWithChildren } from "react";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<PropsWithChildren<Props>> = ({ children, ...rest }) => (
  <label {...rest}>{children}</label>
);

export default Label;
