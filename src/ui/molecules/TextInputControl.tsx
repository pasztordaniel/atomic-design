import React, { ComponentProps, useId } from "react";
import { Input, Label, Text } from "../atoms";

interface Props extends ComponentProps<typeof Input> {
  label: string;
  helperText?: string;
}

const TextInputControl: React.FC<Props> = ({ label, helperText, ...rest }) => {
  const id = useId();
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input {...rest} id={id} className="block" />
      {helperText && <Text>{helperText}</Text>}
    </div>
  );
};

export default TextInputControl;
