import { SendEmailUseCase } from "../send-use-case";

export function makeSendEmailUseCase() {
  const useCase = new SendEmailUseCase();
  return useCase;
}
