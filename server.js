const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

/* biblioteca que faz um require nos arquivos do diretorio inteiro */
const requireDir = require("require-dir");

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
  "mongodb://localhost:27017/nodeapi",
  { useNewUrlParser: true }
);
requireDir('./src/models');

// Rotas
/* informa ao express que qualquer requisição que ocorrer
 em /api, irá redirecionar para as rotas */
app.use('/api', require("./src/routes"))

app.listen(3001);