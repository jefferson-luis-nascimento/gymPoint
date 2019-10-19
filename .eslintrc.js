module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-method-use-this": "off", // não utililiza o this nas classes
    "no-param-reassign": "off", // permite receber parametros e alterar valores - para o sequelize poder funcionar
    "camelcase": "off", //liberar pra deixar nformato nome_da_variável
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }] //forçar a variavel next caso esteja sem uso
  },
};
