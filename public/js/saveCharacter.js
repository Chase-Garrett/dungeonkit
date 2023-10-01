const saveCharacter = async () => {
  const characterId = document.getElementById("charsheet").dataset.id;
  const playerName = document.getElementById("playername").value.trim();
  const charName = document.getElementById("charname").value.trim();
  const race = document.getElementById("race").value.trim();
  const className = document.getElementById("classlevel").value.trim();
  const background = document.getElementById("background").value.trim();
  const alignment = document.getElementById("alignment").value.trim();
  const exp = document.getElementById("exp").value.trim();
  const strStat = document.getElementById("strStat").value.trim();
  const strStatMod = document.getElementById("strStatMod").value.trim();
  const dexStat = document.getElementById("dexStat").value.trim();
  const dexStatMod = document.getElementById("dexStatMod").value.trim();
  const conStat = document.getElementById("conStat").value.trim();
  const conStatMod = document.getElementById("conStatMod").value.trim();
  const wisStat = document.getElementById("wisStat").value.trim();
  const wisStatMod = document.getElementById("wisStatMod").value.trim();
  const chaStat = document.getElementById("chaStat").value.trim();
  const chaStatMod = document.getElementById("chaStatMod").value.trim();
  const intStat = document.getElementById("intStat").value.trim();
  const intStatMod = document.getElementById("intStatMod").value.trim();
  const armorClass = document.getElementById("armorClass").value.trim();
  const initiative = document.getElementById("initiative").value.trim();
  const speed = document.getElementById("speed").value.trim();
  const maxHp = document.getElementById("maxHp").value.trim();
  const currentHp = document.getElementById("currentHp").value.trim();
  const tempHp = document.getElementById("tempHp").value.trim();
  const hitDice = document.getElementById("hitDice").value.trim();
  const inspiration = document.getElementById("inspiration").value.trim();
  const acrobatics = document.getElementById("acrobatics").value.trim();
  const acrobaticsProf = document.getElementById("acrobaticsProf").value.trim();
  const animalHandling = document.getElementById("animalHandling").value.trim();
  const animalHandlingProf = document
    .getElementById("animalHandlingProf")
    .value.trim();
  const arcana = document.getElementById("arcana").value.trim();
  const arcanaProf = document.getElementById("arcanaProf").value.trim();
  const athletics = document.getElementById("athletics").value.trim();
  const athleticsProf = document.getElementById("athleticsProf").value.trim();
  const deception = document.getElementById("deception").value.trim();
  const deceptionProf = document.getElementById("deceptionProf").value.trim();
  const history = document.getElementById("history").value.trim();
  const historyProf = document.getElementById("historyProf").value.trim();
  const insight = document.getElementById("insight").value.trim();
  const insightProf = document.getElementById("insightProf").value.trim();
  const intimidation = document.getElementById("intimidation").value.trim();
  const intimidationProf = document
    .getElementById("intimidationProf")
    .value.trim();
  const investigation = document.getElementById("investigation").value.trim();
  const investigationProf = document
    .getElementById("investigationProf")
    .value.trim();
  const medicine = document.getElementById("medicine").value.trim();
  const medicineProf = document.getElementById("medicineProf").value.trim();
  const nature = document.getElementById("nature").value.trim();
  const natureProf = document.getElementById("natureProf").value.trim();
  const perception = document.getElementById("perception").value.trim();
  const perceptionProf = document.getElementById("perceptionProf").value.trim();
  const performance = document.getElementById("performance").value.trim();
  const performanceProf = document
    .getElementById("performanceProf")
    .value.trim();
  const persuasion = document.getElementById("persuasion").value.trim();
  const persuasionProf = document.getElementById("persuasionProf").value.trim();
  const religion = document.getElementById("religion").value.trim();
  const religionProf = document.getElementById("religionProf").value.trim();
  const sleightOfHand = document.getElementById("sleightOfHand").value.trim();
  const sleightOfHandProf = document
    .getElementById("sleightOfHandProf")
    .value.trim();
  const stealth = document.getElementById("stealth").value.trim();
  const stealthProf = document.getElementById("stealthProf").value.trim();
  const survival = document.getElementById("survival").value.trim();
  const survivalProf = document.getElementById("survivalProf").value.trim();
  const passiveWisdom = document.getElementById("passiveWisdom").value.trim();
  const strSave = document.getElementById("strSave").value.trim();
  const strSaveProf = document.getElementById("strSaveProf").value.trim();
  const dexSave = document.getElementById("dexSave").value.trim();
  const dexSaveProf = document.getElementById("dexSaveProf").value.trim();
  const conSave = document.getElementById("conSave").value.trim();
  const conSaveProf = document.getElementById("conSaveProf").value.trim();
  const wisSave = document.getElementById("wisSave").value.trim();
  const wisSaveProf = document.getElementById("wisSaveProf").value.trim();
  const intSave = document.getElementById("intSave").value.trim();
  const intSaveProf = document.getElementById("intSaveProf").value.trim();
  const chaSave = document.getElementById("chaSave").value.trim();
  const chaSaveProf = document.getElementById("chaSaveProf").value.trim();
  const personalityTraits = document
    .getElementById("personalityTraits")
    .value.trim();
  const ideals = document.getElementById("ideals").value.trim();
  const bonds = document.getElementById("bonds").value.trim();
  const flaws = document.getElementById("flaws").value.trim();
  const proficiencyBonus = document
    .getElementById("proficiencyBonus")
    .value.trim();
  const featuresAndTraits = document
    .getElementById("featuresAndTraits")
    .value.trim();
  const otherProficienciesAndLanguages = document
    .getElementById("otherProficienciesAndLanguages")
    .value.trim();

  if (characterId) {
    try {
      const response = await fetch(`/api/characters/${characterId}`, {
        method: "PUT",
        body: JSON.stringify({
          playerName,
          charName,
          race,
          className,
          background,
          alignment,
          exp,
          strStat,
          strStatMod,
          dexStat,
          dexStatMod,
          conStat,
          conStatMod,
          wisStat,
          wisStatMod,
          chaStat,
          chaStatMod,
          intStat,
          intStatMod,
          armorClass,
          initiative,
          speed,
          maxHp,
          currentHp,
          tempHp,
          hitDice,
          inspiration,
          acrobatics,
          acrobaticsProf,
          animalHandling,
          animalHandlingProf,
          arcana,
          arcanaProf,
          athletics,
          athleticsProf,
          deception,
          deceptionProf,
          history,
          historyProf,
          insight,
          insightProf,
          intimidation,
          intimidationProf,
          investigation,
          investigationProf,
          medicine,
          medicineProf,
          nature,
          natureProf,
          perception,
          perceptionProf,
          performance,
          performanceProf,
          persuasion,
          persuasionProf,
          religion,
          religionProf,
          sleightOfHand,
          sleightOfHandProf,
          stealth,
          stealthProf,
          survival,
          survivalProf,
          passiveWisdom,
          strSave,
          strSaveProf,
          dexSave,
          dexSaveProf,
          conSave,
          conSaveProf,
          wisSave,
          wisSaveProf,
          intSave,
          intSaveProf,
          chaSave,
          chaSaveProf,
          personalityTraits,
          ideals,
          bonds,
          flaws,
          proficiencyBonus,
          featuresAndTraits,
          otherProficienciesAndLanguages
        }),
        headers: { "Content-Type": "application/json" }
      });
      if (response.ok) {
        alert("Character Updated!");
        document.location.replace("/profile");
      } else {
        alert(response.statusText);
      }
    } catch (err) {
      alert(response.statusText);
    }
  } else {
    const response = await fetch("/api/characters", {
      method: "POST",
      body: JSON.stringify({
        playerName,
        charName,
        race,
        className,
        background,
        alignment,
        exp,
        strStat,
        strStatMod,
        dexStat,
        dexStatMod,
        conStat,
        conStatMod,
        wisStat,
        wisStatMod,
        chaStat,
        chaStatMod,
        intStat,
        intStatMod,
        armorClass,
        initiative,
        speed,
        maxHp,
        currentHp,
        tempHp,
        hitDice,
        inspiration,
        acrobatics,
        acrobaticsProf,
        animalHandling,
        animalHandlingProf,
        arcana,
        arcanaProf,
        athletics,
        athleticsProf,
        deception,
        deceptionProf,
        history,
        historyProf,
        insight,
        insightProf,
        intimidation,
        intimidationProf,
        investigation,
        investigationProf,
        medicine,
        medicineProf,
        nature,
        natureProf,
        perception,
        perceptionProf,
        performance,
        performanceProf,
        persuasion,
        persuasionProf,
        religion,
        religionProf,
        sleightOfHand,
        sleightOfHandProf,
        stealth,
        stealthProf,
        survival,
        survivalProf,
        passiveWisdom,
        strSave,
        strSaveProf,
        dexSave,
        dexSaveProf,
        conSave,
        conSaveProf,
        wisSave,
        wisSaveProf,
        intSave,
        intSaveProf,
        chaSave,
        chaSaveProf,
        personalityTraits,
        ideals,
        bonds,
        flaws,
        proficiencyBonus,
        featuresAndTraits,
        otherProficienciesAndLanguages
      }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      alert("Character Saved!");
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#save-content")
  .addEventListener("click", saveCharacter);
