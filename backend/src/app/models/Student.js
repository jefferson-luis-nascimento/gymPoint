import Sequelize, { Model } from 'sequelize';
import { differenceInYears } from 'date-fns';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        birthday: Sequelize.DATE,
        age: {
          type: Sequelize.VIRTUAL,
          get() {
            return differenceInYears(new Date(), this.birthday);
          },
        },
        weight: Sequelize.DOUBLE,
        height: Sequelize.DOUBLE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Student;
