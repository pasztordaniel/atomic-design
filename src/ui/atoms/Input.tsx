import classNames from "classnames";
import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<Props> = ({ type = "text", className, ...rest }) => (
  <input
    type={type}
    {...rest}
    className={classNames(
      "border border-slate-600 rounded px-4 py-1",
      className
    )}
  />
);

export default Input;
