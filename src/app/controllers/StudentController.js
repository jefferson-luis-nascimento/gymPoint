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
      age: Yup.number()
        .positive()
        .required(),
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

    const { name, email, age, weight, height } = req.body;

    const userId = user.id;

    const student = await Student.findOne({ where: { email } });

    if (student) {
      return res.status(400).json({ error: 'Student already exists' });
    }

    const newStudent = await Student.create({ ...req.body, userId });

    const { id } = newStudent;

    return res.status(201).json({
      id,
      name,
      email,
      age,
      weight,
      height,
    });
  }

  async index(req, res) {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (student) {
      const { name, email, age, weight, height } = student;

      return res.json({ id, name, email, age, weight, height });
    }

    return res.status(404).json({ error: 'Student not found' });
  }

  async show(req, res) {
    const students = await Student.findAll();

    if (students) {
      const studentsReturn = students.map(student => ({
        id: student.id,
        name: student.name,
        email: student.email,
        age: student.age,
        weight: student.weight,
        height: student.height,
      }));

      return res.json(studentsReturn);
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
      age: Yup.number().positive(),
      weight: Yup.number().positive(),
      height: Yup.number().positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Schema validation fails' });
    }

    const { id } = req.params;
    const userId = user.id;
    const { email } = req.body;

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

    const newStudent = { ...req.body, userId };

    const { name, age, weight, height } = await student.update(newStudent);

    return res.status(201).json({ id, name, email, age, weight, height });
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
