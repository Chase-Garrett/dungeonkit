// get html from character sheet and send to puppeteer API endpoint to generate PDF
const generatePDF = async () => {
  event.preventDefault();

  // collect html from character sheet
  const html = document.getElementByClassName("charsheet").innerHTML;

  if (html) {
    // send POST request to API endpoint
    const response = await fetch("/api/puppeteer/print", {
      method: "POST",
      body: JSON.stringify({ html }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // if successful, download PDF
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

const saveCharacter = async () => {
  const charName = document.getElementById("charname").value.trim();

  try {
    const response = await fetch("/api/characters", {
      method: "POST",
      body: JSON.stringify({ charName }),
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

document.querySelector(".charsheet").addEventListener("submit", generatePDF);

document
  .querySelector("#save-content")
  .addEventListener("click", saveCharacter);
