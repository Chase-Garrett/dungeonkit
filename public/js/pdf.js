// get html from character sheet and send to puppeteer API endpoint to generate PDF
const generatePDF = async () => {
  event.preventDefault();

  // collect character id from url
  const charId = window.location.pathname.split("/").pop();
  // collect user id from session
  const userId = req.session.user_id;

  if (charId && userId) {
    // send POST request to API endpoint
    const response = await fetch("/api/puppeteer/print", {
      method: "POST",
      body: JSON.stringify({ charId, userId }),
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      alert(response.statusText);
    }
  }
};

document.querySelector(".charsheet").addEventListener("submit", generatePDF);
