// import router
const router = require("express").Router();
// import models
const { Character } = require("../../models");
// import withAuth middleware
const withAuth = require("../../utils/auth");

// Get all by id
router.get("/", async (req, res) => {
  try {
    const CharacterData = await Character.findAll({
      where: { id: req.body.id }
    });

    if (!CharacterData) {
      res
        .status(400)
        .json({ message: "Sorry, we couldn't find anything with that id" });
    }

    res.status(200).json(CharacterData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get one by id
router.get("/:id", withAuth, async (req, res) => {
  try {
    const CharacterData = await Character.findByPk({
      where: { id: req.params.id }
    });

    if (!CharacterData) {
      res
        .status(400)
        .json({ message: "Sorry, we couldn't find anything with that id" });
    }

    res.status(200).json(CharacterData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update one by id
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updateCharater = await Character.update({
      name: req.body.name,
      race: req.body.race,
      subrace: req.body.subrace,
      class: req.body.class,
      background: req.body.background,
      strStat: req.body.strStat,
      dexStat: req.body.dexStat,
      conStat: req.body.conStat,
      wisStat: req.body.wisStat,
      chaStat: req.body.chaStat,
      intStat: req.body.intStat,
      where: { id: req.params.id }
    });

    if (!updateCharater) {
      res
        .status(400)
        .json({ message: "Sorry, we couldn't find anything with that id" });
    }

    res.status(200).json(updateCharater);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Create new
router.post("/", withAuth, async (req, res) => {
  try {
    const newCharacter = await Character.create({
      name: req.body.name,
      race: req.body.race,
      subrace: req.body.subrace,
      class: req.body.class,
      background: req.body.background,
      strStat: req.body.strStat,
      dexStat: req.body.dexStat,
      conStat: req.body.conStat,
      wisStat: req.body.wisStat,
      chaStat: req.body.chaStat,
      intStat: req.body.intStat
    });

    res.status(200).json(newCharacter);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete one by id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deleteCharater = await Character.destroy({
      where: { id: req.params.id }
    });

    if (!deleteCharater) {
      res.status(404).json({
        message: "Sorry, we couldn't find any characters with that id"
      });
    }

    res.status(200).json(deleteCharater);
  } catch (err) {
    res.status(500).json(err);
  }
});

// export the router
module.exports = router;
