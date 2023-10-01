// import router
const router = require("express").Router();
// import puppeteer
const puppeteer = require("puppeteer");
// import path
const path = require("path");

// create route for puppeteer to print pdf
router.post("/print", async (req, res) => {
  // set charID
  const charId = req.body.charId;

  // create browser instance
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--no-zygote"]
  });
  // create page instance
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({
    Cookie: req.headers.cookie
  });
  await page.goto(
    process.env.NODE_ENV === "production"
      ? `https://rocky-wave-37637-36d61b992c23.herokuapp.com/character/${charId}`
      : `http://localhost:3001/character/${charId}`
  );
  // reference css file
  await page.emulateMediaType("screen");
  // create pdf
  await page.pdf({
    path: `./pdfs/${charId}.pdf`,
    displayHeaderFooter: false,
    format: "A4",
    printBackground: true,
    scale: 0.75
  });
  // close browser
  await browser.close();
  // return response
  res.json({ message: "PDF created!" });
});

// create route to download pdf
router.get("/download/:filename", (req, res) => {
  res.download(
    path.resolve(__dirname, `../../pdfs/${req.params.filename}.pdf`),
    "charsheet.pdf",
    function (err) {
      if (err) {
        // keeping this console log for error handling
        console.log({ message: err });
      }
    }
  );
});

// export router
module.exports = router;
