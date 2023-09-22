// get html from character sheet and send to puppeteer API endpoint to generate PDF
const generatePDF = async () => {
  event.preventDefault();

  // collect html from character sheet
  const html = document.getElementByClassName("charsheet").innerHTML;

  if (html) {
    // send POST request to API endpoint
    const response = await fetch("/api/pdf", {
      method: "POST",
      body: JSON.stringify({ html }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      // if successful, download PDF
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".charsheet").addEventListener("submit", generatePDF);
