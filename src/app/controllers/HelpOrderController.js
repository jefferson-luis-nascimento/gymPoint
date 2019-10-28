import * as Yup from 'yup';

import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';
import Enrollment from '../models/Enrollment';
import HelpOrderMail from '../jobs/HelpOrderMail';

import Queue from '../../lib/Queue';

class HelpOrderController {
  async show(req, res) {
    const helpOrders = await HelpOrder.findAll({
      where: { answer: null },
      attributes: ['id', 'student_id', 'question', 'answer'],
    });

    return res.json(helpOrders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number()
        .required()
        .positive(),
      question: Yup.string()
        .required()
        .min(5),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { student_id, question } = req.body;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const studentMatriculate = await Enrollment.findOne({
      where: { student_id },
    });

    if (!studentMatriculate) {
      return res.status(404).json({ error: 'Student is not matriculate' });
    }

    const { id } = await HelpOrder.create({
      student_id,
      question,
    });

    return res.status(201).json({ id, student_id, question });
  }

  async index(req, res) {
    const { student_id } = req.params;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const helpOrders = await HelpOrder.findAll({
      where: {
        student_id,
      },
      attributes: ['id', 'student_id', 'question', 'answer', 'answer_at'],
      include: {
        model: Student,
        as: 'student',
        attributes: ['name', 'email'],
      },
    });

    return res.json(helpOrders);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      answer: Yup.string().min(5),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { answer } = req.body;
    const { id } = req.params;

    const helpOrder = await HelpOrder.findByPk(id, {
      include: {
        model: Student,
        as: 'student',
        attributes: ['name', 'email'],
      },
    });

    if (!helpOrder) {
      return res.status(404).json({ error: 'Help Order not found' });
    }

    if (helpOrder.answer) {
      return res.status(400).json('Question already answer');
    }

    const newHelpOrder = await helpOrder.update(req.body);

    await Queue.add(HelpOrderMail.key, {
      newHelpOrder,
    });

    const { student_id, question, answer_at, student } = newHelpOrder;

    return res.json({ id, student_id, question, answer, answer_at, student });
  }
}

export default new HelpOrderController();
