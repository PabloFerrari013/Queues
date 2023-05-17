import { transporter } from "../../lib/nodemailer";
import queues from "../../lib/queues";

interface SendEmailUseCaseRequest {
  email: string;
  name: string;
}

export class SendEmailUseCase {
  async execute({ email, name }: SendEmailUseCaseRequest) {
    await queues.add("registration-email-job", {
      email,
      name,
    });

    return;
  }
}
