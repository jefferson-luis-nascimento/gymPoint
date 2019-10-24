import * as Yup from 'yup';

import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const { user } = req;

    if (!user.isAdmin) {
      return res.status(401).json('User is not allowed to execute this method');
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      birthday: Yup.date().required(),
      weight: Yup.number()
        .positive()
        .required(),
      height: Yup.number()
        .positive()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Schema validation fails' });
    }

    const { name, email, birthday, weight, height } = req.body;

    const userId = user.id;

    const student = await Student.findOne({ where: { email } });

    if (student) {
      return res.status(400).json({ error: 'Student already exists' });
    }

    const s = { ...req.body, user_id: userId };

    const newStudent = await Student.create(s);

    const { id, age } = newStudent;

    return res.status(201).json({
      id,
      name,
      email,
      birthday,
      age,
      weight,
      height,
    });
  }

  async index(req, res) {
    const { user } = req;

    if (!user.isAdmin) {
      return res.status(401).json('User is not allowed to execute this method');
    }

    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (student) {
      const { name, email, birthday, age, weight, height } = student;

      return res.json({ id, name, email, birthday, age, weight, height });
    }

    return res.status(404).json({ error: 'Student not found' });
  }

  async show(req, res) {
    const { user } = req;

    if (!user.isAdmin) {
      return res.status(401).json('User is not allowed to execute this method');
    }

    const { page = 1 } = req.query;

    const students = await Student.findAll({
      offset: (page - 1) * 20,
      limit: 20,
      attributes: [
        'id',
        'name',
        'email',
        'birthday',
        'age',
        'weight',
        'height',
      ],
    });

    if (students) {
      return res.json(students);
    }

    return res.status(404).json({ error: 'Students not found' });
  }

  async update(req, res) {
    const { user } = req;

    if (!user.isAdmin) {
      return res.status(401).json('User is not allowed to execute this method');
    }

    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      birthday: Yup.date(),
      weight: Yup.number().positive(),
      height: Yup.number().positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Schema validation fails' });
    }

    const { id } = req.params;
    const userId = user.id;
    let { email } = req.body;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    if (email && email !== student.email) {
      const studentExists = await Student.findOne({ where: { email } });

      if (studentExists) {
        return res
          .status(400)
          .json({ error: 'Email alread exists in another student' });
      }
    }

    const newStudent = await student.update({ ...req.body, userId });

    const { name, birthday, age, weight, height } = newStudent;

    if (!email) {
      email = newStudent.email;
    }

    return res
      .status(200)
      .json({ id, name, email, birthday, age, weight, height });
  }

  async delete(req, res) {
    const { user } = req;

    if (!user.isAdmin) {
      return res.status(401).json('User is not allowed to execute this method');
    }

    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (student) {
      Student.destroy({ where: { id } });

      return res.json();
    }

    return res.status(404).json({ error: 'Student not found' });
  }
}

export default new StudentController();
