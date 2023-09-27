const saveCharacter = async () => {
    const playerName = document.getElementById("playername").value.trim();
    const charName = document.getElementById("charname").value.trim();
    const race = document.getElementById("race").value.trim();
    const className = document.getElementById("classlevel").value.trim();
  
    try {
      const response = await fetch("/api/characters", {
        method: "POST",
        body: JSON.stringify({ playerName, charName, race, className }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        alert("Character Saved!");
        document.location.replace("/profile");
      } else {
        alert(response.statusText);
      }
    } catch (err) {
      alert(err);
    }
  };

document.querySelector("#save-content").addEventListener("click", saveCharacter);