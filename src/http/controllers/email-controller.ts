import { Request, Response } from "express";
import { makeSendEmailUseCase } from "../../use-cases/email/factory/make-send-use-case";

export class EmailController {
  async send(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const { name } = req.body;

      const useCase = makeSendEmailUseCase();
      await useCase.execute({ email, name });

      res.send();
    } catch {}
  }
}
