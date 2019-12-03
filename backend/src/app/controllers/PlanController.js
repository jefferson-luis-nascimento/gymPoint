import * as Yup from 'yup';
import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const { id } = req.params;

    const plan = await Plan.findByPk(id);

    if (!plan) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    const { title, durantion, price } = plan;

    return res.json({ id, title, durantion, price });
  }

  async show(req, res) {
    const { page = 1 } = req.query;

    const plans = await Plan.findAll({
      offset: (page - 1) * 20,
      limit: 20,
      attributes: ['id', 'title', 'duration', 'price'],
    });

    return res.json(plans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string()
        .required()
        .min(3),
      duration: Yup.number()
        .required()
        .positive(),
      price: Yup.number()
        .required()
        .positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const plan = await Plan.findOne({
      where: {
        title: req.body.title,
      },
    });

    if (plan) {
      return res.status(400).json({ error: 'Plan already exists' });
    }

    const { id, title, duration, price } = await Plan.create(req.body);

    return res.status(201).json({ id, title, duration, price });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().min(3),
      duration: Yup.number().positive(),
      price: Yup.number().positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const plan = await Plan.findByPk(id);

    if (!plan) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    const { title, duration, price } = await plan.update(req.body);

    return res.json({ title, duration, price });
  }

  async delete(req, res) {
    const { id } = req.params;

    const plan = await Plan.findByPk(id);

    if (!plan) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    await Plan.destroy({ where: { id } });

    return res.json();
  }
}

export default new PlanController();
