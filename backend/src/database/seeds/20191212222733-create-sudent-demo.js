module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Jefferson Luís Nascimento',
          email: 'jeln@email.com',
          birthday: '1979-04-20T00:00:00-03:00',
          weight: 92.5,
          height: 1.75,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('students', null, {});
  },
};
