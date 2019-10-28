import { Op } from 'sequelize';
import { subDays, startOfDay, endOfDay } from 'date-fns';

import Checkin from '../models/Checkin';
import Student from '../models/Student';
import Enrollment from '../models/Enrollment';

class CheckinController {
  async store(req, res) {
    const { student_id } = req.params;

    if (!student_id) {
      return res.status(400).json({ error: 'Student Id is not valid' });
    }

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

    const startDate = startOfDay(subDays(new Date(), 7));
    const endDate = endOfDay(new Date());

    const checkins = await Checkin.findAll({
      where: {
        student_id,
        created_at: {
          [Op.between]: [startDate, endDate],
        },
      },
    });

    if (checkins && checkins.length >= 5) {
      return res.status(401).json({ error: 'Limit of checkins is reached' });
    }

    const checkin = await Checkin.create({ student_id });

    return res.status(201).json({ student_id, created_at: checkin.createdAt });
  }

  async index(req, res) {
    const { student_id } = req.params;

    if (!student_id) {
      return res.status(400).json({ error: 'Student Id is not valid' });
    }

    const studentMatriculate = await Enrollment.findOne({
      where: { student_id },
    });

    if (!studentMatriculate) {
      return res.status(404).json({ error: 'Student is not matriculate' });
    }

    const checkins = await Checkin.findAll({
      where: {
        student_id,
      },
      attributes: ['student_id', 'created_at'],
      include: {
        model: Student,
        as: 'student',
        attributes: ['name', 'email'],
      },
    });

    return res.json(checkins);
  }
}

export default new CheckinController();
