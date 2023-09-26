// get html from character sheet and send to puppeteer API endpoint to generate PDF
const generatePDF = async () => {
  event.preventDefault();

  // collect html from character sheet
  const charsheet = document.querySelector(".charsheet").innerHTML;
  //console.log(html);

  if (charsheet) {
    // send POST request to API endpoint
    const response = await fetch("/api/puppeteer/print", {
      method: "POST",
      body: JSON.stringify({ charsheet }),
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
