// call to download PDF
const downloadPDF = async () => {
  event.preventDefault();

  await fetch("/api/puppeteer/download/", {
    method: "GET",
    headers: { "Content-Type": "application/pdf" }
  });
};

document.querySelector("#download").addEventListener("click", downloadPDF);
