// get html from character sheet and send to puppeteer API endpoint to generate PDF
const generatePDF = async () => {
  event.preventDefault();

  // collect character id from url
  const charId = window.location.pathname.split("/").pop();

  if (charId) {
    // send POST request to API endpoint
    const response = await fetch("/api/puppeteer/print", {
      method: "POST",
      body: JSON.stringify({ charId }),
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      alert(response.statusText);
    }
  }
};

document.querySelector("#genPDF").addEventListener("click", generatePDF);
