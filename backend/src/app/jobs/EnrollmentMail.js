import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

class EnrollmentMail {
  get key() {
    return 'EnrollmentMail';
  }

  async handle({ data }) {
    const { newEnrollment: enrollment } = data;
    await Mail.sendMail({
      to: `${enrollment.student.name} <${enrollment.student.email}>`,
      subject: 'Matrícula realizada com sucesso!',
      template: 'enrollment',
      context: {
        student: enrollment.student.name,
        plan: enrollment.plan.title,
        start_date: format(
          parseISO(enrollment.start_date),
          "'dia' dd 'de' MMMM'",
          {
            locale: pt,
          }
        ),
        end_date: format(parseISO(enrollment.end_date), "'dia' dd 'de' MMMM'", {
          locale: pt,
        }),
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(enrollment.price),
      },
    });
  }
}

export default new EnrollmentMail();
