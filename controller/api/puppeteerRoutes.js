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
  await page.goto("http://localhost:3001/character");
  // reference css file
  await page.emulateMediaType("screen");
  // create pdf
  await page.pdf({
    path: "charsheet.pdf",
    format: "A4",
    printBackground: true,
    scale: 0.75
  });
  // close browser
  await browser.close();
  res.setHeader("Content-Disposition", "attachment; filename=charsheet.pdf");
  res.setHeader("Content-Type", "application/pdf");
  res.sendFile(path.resolve(__dirname, "../../charsheet.pdf"));
});

// export router
module.exports = router;

// process.env.NODE_ENV === "production" ? urlofdeployed/chaaracter : localhost:3001/character/
