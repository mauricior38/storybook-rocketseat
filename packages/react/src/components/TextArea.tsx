import { ComponentProps } from "react";
import { styled } from "../styles";

export const TextArea = styled("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "$border-box",
  border: "2px solid $gray00",

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$white',
  resize: 'vertical',
  minHeight: 80,

  display: "flex",
  alignItems: "baseline",

  '$:focus': {
    outline: 0,
    borderColor: '$ignite300'
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400'
  }

});


export interface TextAreaProps extends ComponentProps<typeof TextArea>{}

TextArea.displayName = 'TextArea'