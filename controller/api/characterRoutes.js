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
      where: { id: req.session.user_id },
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
      where: { id: req.params.id },
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
    const updateCharacter = await Character.update(
      {
        playerName: req.body.playerName,
        name: req.body.charName,
        race: req.body.race,
        class: req.body.className,
        background: req.body.background,
        alignment: req.body.alignment,
        exp: req.body.exp,
        level: req.body.level,
        age: req.body.age,
        height: req.body.height,
        weight: req.body.weight,
        eyes: req.body.eyes,
        skin: req.body.skin,
        hair: req.body.hair,
        characterAppearance: req.body.characterAppearance,
        characterBackstory: req.body.characterBackstory,
        alliesAndOrganizations: req.body.alliesAndOrganizations,
        treasure: req.body.treasure,
        personalityTraits: req.body.personalityTraits,
        characterTraits: req.body.characterTraits,
        ideals: req.body.ideals,
        bonds: req.body.bonds,
        flaws: req.body.flaws,
        featuresAndTraits: req.body.featuresAndTraits,
        additionalFeaturesAndTraits: req.body.additionalFeaturesAndTraits,
        otherProficienciesAndLanguages: req.body.otherProficienciesAndLanguages,
        proficiencyBonus: req.body.proficiencyBonus,
        inspiration: req.body.inspiration,
        armorClass: req.body.armorClass,
        initiative: req.body.initiative,
        speed: req.body.speed,
        currentHp: req.body.currentHp,
        tempHp: req.body.tempHp,
        maxHp: req.body.maxHp,
        hitDice: req.body.hitDice,
        deathSavesSuccess: req.body.deathSavesSuccess,
        deathSavesFail: req.body.deathSavesFail,
        equipment: req.body.equipment,
        attacksAndSpellcasting: req.body.attacksAndSpellcasting,
        spellcastingAbility: req.body.spellcastingAbility,
        spellSaveDc: req.body.spellSaveDc,
        spellAttackBonus: req.body.spellAttackBonus,
        firstSpellSlots: req.body.firstSpellSlots,
        secondSpellSlots: req.body.secondSpellSlots,
        thirdSpellSlots: req.body.thirdSpellSlots,
        fourthSpellSlots: req.body.fourthSpellSlots,
        fifthSpellSlots: req.body.fifthSpellSlots,
        sixthSpellSlots: req.body.sixthSpellSlots,
        seventhSpellSlots: req.body.seventhSpellSlots,
        eighthSpellSlots: req.body.eighthSpellSlots,
        ninthSpellSlots: req.body.ninthSpellSlots,
        firstSpellSlotsUsed: req.body.firstSpellSlotsUsed,
        secondSpellSlotsUsed: req.body.secondSpellSlotsUsed,
        thirdSpellSlotsUsed: req.body.thirdSpellSlotsUsed,
        fourthSpellSlotsUsed: req.body.fourthSpellSlotsUsed,
        fifthSpellSlotsUsed: req.body.fifthSpellSlotsUsed,
        sixthSpellSlotsUsed: req.body.sixthSpellSlotsUsed,
        seventhSpellSlotsUsed: req.body.seventhSpellSlotsUsed,
        eighthSpellSlotsUsed: req.body.eighthSpellSlotsUsed,
        ninthSpellSlotsUsed: req.body.ninthSpellSlotsUsed,
        firstSpells: req.body.firstSpells,
        secondSpells: req.body.secondSpells,
        thirdSpells: req.body.thirdSpells,
        fourthSpells: req.body.fourthSpells,
        fifthSpells: req.body.fifthSpells,
        sixthSpells: req.body.sixthSpells,
        seventhSpells: req.body.seventhSpells,
        eighthSpells: req.body.eighthSpells,
        ninthSpells: req.body.ninthSpells,
        strStat: req.body.strStat,
        dexStat: req.body.dexStat,
        conStat: req.body.conStat,
        wisStat: req.body.wisStat,
        chaStat: req.body.chaStat,
        intStat: req.body.intStat,
        strStatMod: req.body.strStatMod,
        dexStatMod: req.body.dexStatMod,
        conStatMod: req.body.conStatMod,
        wisStatMod: req.body.wisStatMod,
        chaStatMod: req.body.chaStatMod,
        intStatMod: req.body.intStatMod,
        acrobatics: req.body.acrobatics,
        animalHandling: req.body.animalHandling,
        arcana: req.body.arcana,
        athletics: req.body.athletics,
        deception: req.body.deception,
        history: req.body.history,
        insight: req.body.insight,
        intimidation: req.body.intimidation,
        investigation: req.body.investigation,
        medicine: req.body.medicine,
        nature: req.body.nature,
        perception: req.body.perception,
        performace: req.body.performace,
        persuasion: req.body.persuasion,
        religion: req.body.religion,
        sleightOfHand: req.body.sleightOfHand,
        stealth: req.body.stealth,
        survival: req.body.survival,
        passiveWisdom: req.body.passiveWisdom,
        acrobaticsProf: req.body.acrobaticsProf,
        animalHandlingProf: req.body.animalHandlingProf,
        arcanaProf: req.body.arcanaProf,
        athleticsProf: req.body.athleticsProf,
        deceptionProf: req.body.deceptionProf,
        historyProf: req.body.historyProf,
        insightProf: req.body.insightProf,
        intimidationProf: req.body.intimidationProf,
        investigationProf: req.body.investigationProf,
        medicineProf: req.body.medicineProf,
        natureProf: req.body.natureProf,
        perceptionProf: req.body.perceptionProf,
        performaceProf: req.body.performaceProf,
        persuasionProf: req.body.persuasionProf,
        religionProf: req.body.religionProf,
        sleightOfHandProf: req.body.sleightOfHandProf,
        stealthProf: req.body.stealthProf,
        survivalProf: req.body.survivalProf,
        strSave: req.body.strSave,
        dexSave: req.body.dexSave,
        conSave: req.body.conSave,
        intSave: req.body.intSave,
        wisSave: req.body.wisSave,
        chaSave: req.body.chaSave,
        strSaveProf: req.body.strSaveProf,
        dexSaveProf: req.body.dexSaveProf,
        conSaveProf: req.body.conSaveProf,
        intSaveProf: req.body.intSaveProf,
        wisSaveProf: req.body.wisSaveProf,
        chaSaveProf: req.body.chaSaveProf,
      },
      {
        where: { id: req.params.id, user_id: req.session.user_id },
      }
    );

    if (!updateCharacter) {
      res
        .status(400)
        .json({ message: "Sorry, we couldn't find anything with that id" });
    }

    res.status(200).json(updateCharacter);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// Create new
router.post("/", withAuth, async (req, res) => {
  try {
    const newCharacter = await Character.create({
      user_id: req.session.user_id,
      playerName: req.body.playerName,
      name: req.body.charName,
      race: req.body.race,
      class: req.body.className,
      background: req.body.background,
      alignment: req.body.alignment,
      exp: req.body.exp,
      level: req.body.level,
      age: req.body.age,
      height: req.body.height,
      weight: req.body.weight,
      eyes: req.body.eyes,
      skin: req.body.skin,
      hair: req.body.hair,
      characterAppearance: req.body.characterAppearance,
      characterBackstory: req.body.characterBackstory,
      alliesAndOrganizations: req.body.alliesAndOrganizations,
      treasure: req.body.treasure,
      personalityTraits: req.body.personalityTraits,
      characterTraits: req.body.characterTraits,
      ideals: req.body.ideals,
      bonds: req.body.bonds,
      flaws: req.body.flaws,
      featuresAndTraits: req.body.featuresAndTraits,
      additionalFeaturesAndTraits: req.body.additionalFeaturesAndTraits,
      otherProficienciesAndLanguages: req.body.otherProficienciesAndLanguages,
      proficiencyBonus: req.body.proficiencyBonus,
      inspiration: req.body.inspiration,
      armorClass: req.body.armorClass,
      initiative: req.body.initiative,
      speed: req.body.speed,
      currentHp: req.body.currentHp,
      tempHp: req.body.tempHp,
      maxHp: req.body.maxHp,
      hitDice: req.body.hitDice,
      deathSavesSuccess: req.body.deathSavesSuccess,
      deathSavesFail: req.body.deathSavesFail,
      equipment: req.body.equipment,
      attacksAndSpellcasting: req.body.attacksAndSpellcasting,
      spellcastingAbility: req.body.spellcastingAbility,
      spellSaveDc: req.body.spellSaveDc,
      spellAttackBonus: req.body.spellAttackBonus,
      firstSpellSlots: req.body.firstSpellSlots,
      secondSpellSlots: req.body.secondSpellSlots,
      thirdSpellSlots: req.body.thirdSpellSlots,
      fourthSpellSlots: req.body.fourthSpellSlots,
      fifthSpellSlots: req.body.fifthSpellSlots,
      sixthSpellSlots: req.body.sixthSpellSlots,
      seventhSpellSlots: req.body.seventhSpellSlots,
      eighthSpellSlots: req.body.eighthSpellSlots,
      ninthSpellSlots: req.body.ninthSpellSlots,
      firstSpellSlotsUsed: req.body.firstSpellSlotsUsed,
      secondSpellSlotsUsed: req.body.secondSpellSlotsUsed,
      thirdSpellSlotsUsed: req.body.thirdSpellSlotsUsed,
      fourthSpellSlotsUsed: req.body.fourthSpellSlotsUsed,
      fifthSpellSlotsUsed: req.body.fifthSpellSlotsUsed,
      sixthSpellSlotsUsed: req.body.sixthSpellSlotsUsed,
      seventhSpellSlotsUsed: req.body.seventhSpellSlotsUsed,
      eighthSpellSlotsUsed: req.body.eighthSpellSlotsUsed,
      ninthSpellSlotsUsed: req.body.ninthSpellSlotsUsed,
      firstSpells: req.body.firstSpells,
      secondSpells: req.body.secondSpells,
      thirdSpells: req.body.thirdSpells,
      fourthSpells: req.body.fourthSpells,
      fifthSpells: req.body.fifthSpells,
      sixthSpells: req.body.sixthSpells,
      seventhSpells: req.body.seventhSpells,
      eighthSpells: req.body.eighthSpells,
      ninthSpells: req.body.ninthSpells,
      strStat: req.body.strStat,
      dexStat: req.body.dexStat,
      conStat: req.body.conStat,
      wisStat: req.body.wisStat,
      chaStat: req.body.chaStat,
      intStat: req.body.intStat,
      strStatMod: req.body.strStatMod,
      dexStatMod: req.body.dexStatMod,
      conStatMod: req.body.conStatMod,
      wisStatMod: req.body.wisStatMod,
      chaStatMod: req.body.chaStatMod,
      intStatMod: req.body.intStatMod,
      acrobatics: req.body.acrobatics,
      animalHandling: req.body.animalHandling,
      arcana: req.body.arcana,
      athletics: req.body.athletics,
      deception: req.body.deception,
      history: req.body.history,
      insight: req.body.insight,
      intimidation: req.body.intimidation,
      investigation: req.body.investigation,
      medicine: req.body.medicine,
      nature: req.body.nature,
      perception: req.body.perception,
      performace: req.body.performace,
      persuasion: req.body.persuasion,
      religion: req.body.religion,
      sleightOfHand: req.body.sleightOfHand,
      stealth: req.body.stealth,
      survival: req.body.survival,
      passiveWisdom: req.body.passiveWisdom,
      acrobaticsProf: req.body.acrobaticsProf,
      animalHandlingProf: req.body.animalHandlingProf,
      arcanaProf: req.body.arcanaProf,
      athleticsProf: req.body.athleticsProf,
      deceptionProf: req.body.deceptionProf,
      historyProf: req.body.historyProf,
      insightProf: req.body.insightProf,
      intimidationProf: req.body.intimidationProf,
      investigationProf: req.body.investigationProf,
      medicineProf: req.body.medicineProf,
      natureProf: req.body.natureProf,
      perceptionProf: req.body.perceptionProf,
      performaceProf: req.body.performaceProf,
      persuasionProf: req.body.persuasionProf,
      religionProf: req.body.religionProf,
      sleightOfHandProf: req.body.sleightOfHandProf,
      stealthProf: req.body.stealthProf,
      survivalProf: req.body.survivalProf,
      strSave: req.body.strSave,
      dexSave: req.body.dexSave,
      conSave: req.body.conSave,
      intSave: req.body.intSave,
      wisSave: req.body.wisSave,
      chaSave: req.body.chaSave,
      strSaveProf: req.body.strSaveProf,
      dexSaveProf: req.body.dexSaveProf,
      conSaveProf: req.body.conSaveProf,
      intSaveProf: req.body.intSaveProf,
      wisSaveProf: req.body.wisSaveProf,
      chaSaveProf: req.body.chaSaveProf,
    });

    res.status(200).json(newCharacter);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete one by id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deleteCharacter = await Character.destroy({
      where: { id: req.params.id, user_id: req.session.user_id },
    });

    if (!deleteCharacter) {
      res.status(404).json({
        message: "Sorry, we couldn't find any characters with that id",
      });
    }

    res.status(200).json(deleteCharacter);
  } catch (err) {
    res.status(500).json(err);
  }
});

// export the router
module.exports = router;
