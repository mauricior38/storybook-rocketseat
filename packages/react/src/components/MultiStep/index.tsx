import { MultiStepContainer, Label, Steps, Step } from "./styles";

export interface MultistepProps {
  size: number;
  currentStep?: number;
}

export function MultiStep({ size, currentStep = 0 }: MultistepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps css={{ "--steps-size": size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map(step => {
            return <Step key={step} active = {currentStep >= step}></Step>
        })}
      </Steps>
    </MultiStepContainer>
  );
}

MultiStep.displayName = 'MultiStep'