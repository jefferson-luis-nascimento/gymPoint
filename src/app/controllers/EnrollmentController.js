import * as Yup from 'yup';
import { parseISO, addMonths } from 'date-fns';

import Enrollment from '../models/Enrollment';
import Plan from '../models/Plan';
import Student from '../models/Student';

class EnrollmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number()
        .required()
        .positive(),
      plan_id: Yup.number()
        .required()
        .positive(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { student_id, plan_id, start_date } = req.body;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    const enrollment = await Enrollment.findOne({
      where: {
        student_id,
      },
    });

    if (enrollment) {
      return res.status(400).json({ error: 'Student is already matriculate' });
    }

    const { totalPrice } = plan;

    const end_date = addMonths(parseISO(req.body.start_date), plan.duration);

    const { id, price } = await Enrollment.create({
      ...req.body,
      end_date,
      price: totalPrice,
    });

    const newEnrollment = {
      id,
      start_date,
      end_date,
      price,
      plan: {
        plan_id,
        title: plan.title,
        duration: plan.duration,
        price: plan.price,
      },
      student: {
        student_id,
        name: student.name,
        email: student.email,
        birthday: student.birthday,
        age: student.age,
        weight: student.weight,
        height: student.height,
      },
    };

    // const enrollment = { ...newEnrollment, end_date, price: totalPrice };

    return res.status(201).json(newEnrollment);
  }

  async index(req, res) {
    const { id } = req.params;

    const enrollment = await Enrollment.findByPk(id, {
      attributes: [
        'id',
        'start_date',
        'end_date',
        'price',
        'student_id',
        'plan_id',
      ],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email', 'birthday', 'age'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['title', 'duration', 'price'],
        },
      ],
    });

    if (!enrollment) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }

    return res.json(enrollment);
  }

  async show(req, res) {
    const { page = 1 } = req.query;

    const enrollments = await Enrollment.findAll({
      offset: (page - 1) * 20,
      limit: 20,
      attributes: [
        'id',
        'start_date',
        'end_date',
        'price',
        'student_id',
        'plan_id',
      ],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email', 'birthday', 'age'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['title', 'duration', 'price'],
        },
      ],
    });

    return res.json(enrollments);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().positive(),
      plan_id: Yup.number().positive(),
      start_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const enrollment = await Enrollment.findByPk(id);

    if (!enrollment) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }

    const { student_id, plan_id } = req.body;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    const { totalPrice } = plan;

    const end_date = addMonths(parseISO(req.body.start_date), plan.duration);

    const e = {
      ...req.body,
      end_date,
      price: totalPrice,
      id,
    };

    const newEnrollment = await enrollment.update(e);

    return res.json(newEnrollment);
  }
}

export default new EnrollmentController();
