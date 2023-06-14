import express from "express";
import Cliente from "./model/Cliente.js"
import Produto from "./model/produto.js";
import {differenceInYears} from 'date-fns'


const app = express();
app.use(express.json());

app.get("/produtos", async (req, res) => {
    res.send(await Produto.findAll());
});

app.get("/produtos/:id", async (req, res) => {
    res.send(await Produto.findByPk(req.params.id))
});

app.post("/produtos", async (req, res) => {
    // validação
    if (!req.body.descricao) {
        res.status(400);
        res.send("Descrição é obrigatória.");
    }
    if (!req.body.preco) {
        res.status(400);
        res.send("Preço é obrigatório.");
    }

    await Produto.create({
        descricao: req.body.descricao,
        preco: req.body.preco,
    });

    res.send("Adicionado");
});

app.put("/produtos/:id", async (req, res) => {

    const encontrado = await Produto.update({
        descricao: req.body.descricao,
        preco: req.body.preco
    },
        {
            were: {
                id: req.params.id
            }
        })

    res.send(encontrado);
});

app.delete("/produtos/:id",  async (req, res) => {
    await Produto.destroy({
        where: {
            id: req.params.id
        }
    })
    res.send("Deletado");
});

app.get("/clientes", async function (req, res) {
    const clientes = await Cliente.findAll({raw: true})
    const mapeando =  clientes.map(cliente => {
        cliente.idade = differenceInYears(new Date(), cliente.dataNascimento)
        return cliente
    })

    res.send(mapeando);
});

app.get("/clientes/:id", async (req, res) => {
    res.send(await Cliente.findByPk(req.params.id))
});

app.post("/clientes", async function (req, res) {
    if (!req.body.nome) {
        res.status(400);
        res.send("Nome é obrigatório.");
    }
    if (!req.body.dataNascimento) {
        res.status(400);
        res.send("Data de nascimento é obrigatório.");
    }
    if (!req.body.telefone) {
        res.status(400);
        res.send("Telefone é obrigatório.");
    }

     await Cliente.create({
        nome: req.body.nome,
        dataNascimento: req.body.dataNascimento,
        telefone: req.body.telefone
    })

    res.send("ok");
});

app.put("/clientes/:id", async(req, res) => {


    const encontrado = await Cliente.update({ nome: req.body.nome, dataNascimento: req.body.dataNascimento, telefone: req.body.telefone }, {
        where: {
            id: req.params.id
        }
    });

    res.send(encontrado);
});

app.delete("/clientes/:id", async (req, res) => {

    await Cliente.destroy({
        where: {
            id: req.params.id
        }
    })
    res.send("Deletado");
});

app.listen(4000, () => {
    console.log("Servidor Iniciado");
});
