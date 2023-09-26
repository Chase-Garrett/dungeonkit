// import router
const router = require("express").Router();
// import puppeteer
const puppeteer = require("puppeteer");

// create route for puppeteer to print pdf
router.post("/print", async (req, res) => {
  // get data from req.body
  const { charsheet } = req.body;
  // create browser instance
  const browser = await puppeteer.launch({ headless: true });
  // create page instance
  const page = await browser.newPage();
  // set page content to html
  await page.setContent(charsheet);
  // reference css file
  await page.emulateMediaType("screen");
  // create pdf
  const pdf = await page.pdf({
    path: "charsheet.pdf",
    format: "A4",
    printBackground: true,
    margin: {
      top: "20px",
      bottom: "40px",
      left: "20px",
      right: "20px"
    }
  });
  // close browser
  await browser.close();
  // set headers
  res.contentType("application/pdf");
  // send pdf
  res.send(pdf);
});

// export router
module.exports = router;
