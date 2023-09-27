const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    // Player Name
    playerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Character details
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false
    },
    background: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alignment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    exp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: 1,
        max: 20
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "0'0"
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "0 lbs"
    },
    eyes: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "N/A"
    },
    skin: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "N/A"
    },
    hair: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "N/A"
    },
    characterAppearance: {
      type: DataTypes.STRING,
      allowNull: true
    },
    characterBackstory: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alliesAndOrganizations: {
      type: DataTypes.STRING,
      allowNull: true
    },
    additionalFeaturesAndTraits: {
      type: DataTypes.STRING,
      allowNull: true
    },
    otherProficienciesAndLanguages: {
      type: DataTypes.STRING,
      allowNull: true
    },
    personalityTraits: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ideals: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bonds: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flaws: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // Character details
    proficiencyBonus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    },
    inspiration: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    armorClass: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    initiative: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30
    },
    maxHp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    currentHp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    tempHp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    hitDice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    // Death Saves
    deathSavesSuccess: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 3
      }
    },
    deathSavesFail: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 3
      }
    },
    featuresAndTraits: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // Character Inventory
    treasure: {
      type: DataTypes.STRING,
      allowNull: true
    },
    equipment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // Spellcasting
    attacksAndSpellcasting: {
      type: DataTypes.STRING,
      allowNull: true
    },
    spellcastingAbility: {
      type: DataTypes.STRING,
      allowNull: true
    },
    spellSaveDc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spellAttackBonus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // Spell Slots
    firstSpellSlots: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    secondSpellSlots: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    thirdSpellSlots: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fourthSpellSlots: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fifthSpellSlots: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sixthSpellSlots: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seventhSpellSlots: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eighthSpellSlots: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ninthSpellSlots: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // Spell Slots Used
    firstSpellSlotsUsed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    secondSpellSlotsUsed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    thirdSpellSlotsUsed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fourthSpellSlotsUsed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fifthSpellSlotsUsed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sixthSpellSlotsUsed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seventhSpellSlotsUsed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eighthSpellSlotsUsed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ninthSpellSlotsUsed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // Available Spells
    firstSpells: {
      type: DataTypes.STRING,
      allowNull: true
    },
    secondSpells: {
      type: DataTypes.STRING,
      allowNull: true
    },
    thirdSpells: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fourthSpells: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fifthSpells: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sixthSpells: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seventhSpells: {
      type: DataTypes.STRING,
      allowNull: true
    },
    eighthSpells: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ninthSpells: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // Character Stats
    strStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8
    },
    dexStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8
    },
    conStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8
    },
    wisStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8
    },
    chaStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8
    },
    intStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8
    },
    // Character Stats Modifiers
    strStatMod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1
    },
    dexStatMod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1
    },
    conStatMod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1
    },
    wisStatMod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1
    },
    chaStatMod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1
    },
    intStatMod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1
    },
    // Character Skills
    acrobatics: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    animalHandling: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    arcana: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    athletics: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    deception: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    history: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    insight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    intimidation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    investigation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    medicine: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    nature: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    perception: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    performance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    persuasion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    religion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sleightOfHand: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stealth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    survival: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    // Character Skills Proficiency
    acrobaticsProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    animalHandlingProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    arcanaProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    athleticsProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    deceptionProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    historyProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    insightProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    intimidationProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    investigationProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    medicineProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    natureProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    perceptionProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    performanceProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    persuasionProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    religionProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    sleightOfHandProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    stealthProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    survivalProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    // Character Saving Throws
    strSave: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dexSave: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    conSave: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    wisSave: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    chaSave: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    intSave: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    // Character Saving Throws Proficiency
    strSaveProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    dexSaveProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    conSaveProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    wisSaveProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    chaSaveProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    intSaveProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    passiveWisdom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    // Connection to user
    userId: {
      type: DataTypes.UUID,
      references: {
        model: "users",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "characters"
  }
);

// export the module
module.exports = Character;
