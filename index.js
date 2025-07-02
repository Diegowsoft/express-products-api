const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/produtos', (req, res) => {
  res.json([
    { id: 1, nome: 'Notebook Acer', preco: 3500 },
    { id: 2, nome: 'Mouse', preco: 150 },
    { id: 3, nome: 'Teclado Mecânico', preco: 500 },
    { id: 4, nome: 'Fiap: Aula', preco: 10 },
    { id: 5, nome: 'Fiap: Aula2', preco: 1010 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
