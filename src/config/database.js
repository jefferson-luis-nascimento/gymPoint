require('dotenv/config');

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamp: true, // obrigar a ter uma coluna created_at e updated_at em cada tabela do banco de dados
    underscored: true,
    underscoredAll: true,
  },
};
