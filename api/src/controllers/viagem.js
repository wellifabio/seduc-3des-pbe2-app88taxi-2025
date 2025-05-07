const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const viagem = await prisma.viagem.create({
            data: req.body
        });
        return res.status(201).json(viagem);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const viagens = await prisma.viagem.findMany();
    return res.json(viagens);
}

const readOne = async (req, res) => {
    try {
        const viagem = await prisma.viagem.findUnique({
            where: {
                id: Number(req.params.id)
            },
            include: {
                motorista: true,
                passageiro: true
            }
        });
        return res.json(viagem);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const viagem = await prisma.viagem.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(viagem);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.viagem.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { create, read, readOne, update, remove };