// import router
const router = require("express").Router();
// import userRoutes
const userRoutes = require("./userRoutes");
// import characterRoutes
const characterRoutes = require("./characterRoutes");
// import puppeteerRoutes
const puppeteerRoutes = require("./puppeteerRoutes");

// use the userRoutes
router.use("/users", userRoutes);
// use the characterRoutes
router.use("/characters", characterRoutes);
// use the puppeteerRoutes
router.use("/puppeteer", puppeteerRoutes);

// export the module
module.exports = router;
