const router = require('express').Router();
const { up } = require('inquirer/lib/utils/readline');
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');
const { v4: uuidv4 } = require("uuid");

// Get all by id
router.get('/', async (req, res) => {
    try {
        const charaterData = await Character.findAll({ where: {id: req.body.id}});

        if (!charaterData) {
            res.status(400).json({ message: "Sorry, we couldn't find anything with that id" });
        }

        res.status(200).json(charaterData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Get one by id
router.get('/:id', withAuth, async (req, res) => {
    try {
        const charaterData = await Character.findByPk({ where: {id: req.body.id} });

        if (!charaterData) {
            res.status(400).json({ message: "Sorry, we couldn't find anything with that id" });
        }

        res.status(200).json(charaterData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update one by id
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updateCharater = await Character.update({
            name: req.session.name,
            race: req.session.race,
            subrace: req.session.subrace,
            class: req.session.class,
            background: req.session.background,
            strStat: req.session.strStat,
            dexStat: req.session.dexStat,
            conStat: req.session.conStat,
            wisStat: req.session.wisStat,
            chaStat: req.session.chaStat,
            intStat: req.session.intStat,
            where: {id: req.body.id} 
        });

        if (!updateCharater) {
            res.status(400).json({ message: "Sorry, we couldn't find anything with that id" });
        }

        res.status(200).json(updateCharater);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Create new
router.post('/', withAuth, async (req, res) => {
    try {
        const newCharacter = await Character.create({
            name: req.session.name,
            race: req.session.race,
            subrace: req.session.subrace,
            class: req.session.class,
            background: req.session.background,
            strStat: req.session.strStat,
            dexStat: req.session.dexStat,
            conStat: req.session.conStat,
            wisStat: req.session.wisStat,
            chaStat: req.session.chaStat,
            intStat: req.session.intStat,
        });

        res.status(200).json(newCharacter);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete one by id
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deleteCharater = await Character.destroy({ where: {id: req.body.id} });

        if (!deleteCharater) {
            res.status(404).json({ message: "Sorry, we couldn't find any characters with that id" });
        }

        res.status(200).json(deleteCharater);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
