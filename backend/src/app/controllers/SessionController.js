import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../models/User';
import Student from '../models/Student';
import Enrollment from '../models/Enrollment';
import authConfig from '../../config/authConfig';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { email, password } = req.body;

    console.log(email);

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(400).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    const userReturn = {
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    };

    return res.json(userReturn);
  }

  async index(req, res) {
    const { student_id } = req.params;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const { id, name, email, birthday, age, weight, height } = student;

    const enrollment = await Enrollment.findOne({
      where: {
        student_id,
      },
    });

    if (!enrollment || !enrollment.active) {
      return res
        .status(400)
        .json({ error: 'Student do not have a active enrollment' });
    }

    return res.json({ id, name, email, birthday, age, weight, height });
  }
}

export default new SessionController();
