// import router
const router = require("express").Router();
// import puppeteer
const puppeteer = require("puppeteer");
// import path
const path = require("path");

// create route for puppeteer to print pdf
router.post("/print", async (req, res) => {
  // create browser instance
  const browser = await puppeteer.launch({ headless: true });
  // create page instance
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({
    Cookie: req.headers.cookie
  });
  await page.goto(`http://localhost:3001/character/${charId}`);
  // reference css file
  await page.emulateMediaType("screen");
  // create pdf
  await page.pdf({
    path: `./pdfs/charsheet${userId}/${charId}.pdf`,
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
    path.resolve(__dirname, "../../pdfs/charsheet.pdf"),
    "charsheet.pdf",
    function (err) {
      if (err) {
        res.send({ error: "Error" });
      } else {
        console.log("Sent: File");
      }
    }
  );
});

// export router
module.exports = router;

// process.env.NODE_ENV === "production" ? urlofdeployed/chaaracter : localhost:3001/character/
