import { transporter } from "../lib/nodemailer";

interface Handle {
  name: string;
  email: string;
}

export const registrationEmailJob = {
  key: "registration-email-job",
  async handle({ data }: any) {
    await transporter().sendMail({
      from: "Queue Test <queue.test@gmail.com>",
      to: `${data.name} <${data.email}>`,
      subject: "Teste de queue",
    });
  },
};
