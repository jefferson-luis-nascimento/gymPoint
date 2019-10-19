import * as Yup from 'yup';

import Student from '../models/Student';

class StudentController {
  async store(req, res) {
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
    const { userId } = req;

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
}

export default new StudentController();
