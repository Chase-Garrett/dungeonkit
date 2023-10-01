// // check if there is a character id in the url
const charId = window.location.pathname.split("/").pop();

// // if character id exists, create a link to the pdf
if (charId !== "character") {
  // create download pdf button
  const downloadBtn = document.createElement("button");
  downloadBtn.setAttribute("id", "genPDF");
  downloadBtn.setAttribute("class", "button btn btn-primary");
  downloadBtn.textContent = "Download PDF";
  // appened to button-container
  document.querySelector(".button-container").appendChild(downloadBtn);
}

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
    } else {
      // set filename
      const filename = "charsheet.pdf";

      // create hidden <a> element
      const downloadLink = document.createElement("a");
      downloadLink.style.display = "none";

      // set the href attribute to the download endpoint
      downloadLink.href = `/api/puppeteer/download/${charId}`;
      downloadLink.download = filename;

      // appened the <a> element to the body and trigger the click event
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // remove the <a> element from the body after download
      document.body.removeChild(downloadLink);
    }
  }
};

document.querySelector("#genPDF").addEventListener("click", generatePDF);
