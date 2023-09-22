// import router
const router = require("express").Router();
// import puppeteer
const puppeteer = require("puppeteer");

// create route for puppeteer to print pdf
router.post("/print", async (req, res) => {
  // get data from req.body
  const { html } = req.body;
  // create browser instance
  const browser = await puppeteer.launch({ headless: true });
  // create page instance
  const page = await browser.newPage();
  // set page content to html
  await page.setContent(html);
  // create pdf
  const pdf = await page.pdf({
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
