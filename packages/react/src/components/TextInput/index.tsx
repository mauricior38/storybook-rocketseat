import { ComponentProps } from "react";
import { TextInputContainer, Prefix, Input } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  placeholder?: string;
  prefix?: string;
  disabled?: boolean;
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  );
}
