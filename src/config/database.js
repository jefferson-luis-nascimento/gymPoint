module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gympoint', // nome do bando que vai ser utilizado
  define: {
    timestamp: true, // obrigar a ter uma coluna created_at e updated_at em cada tabela do banco de dados
    underscored: true,
    underscoredAll: true,
  },
};
