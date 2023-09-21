// import router
const router = require("express").Router();
// import userRoutes
const userRoutes = require("./userRoutes");
// import characterRoutes
const characterRoutes = require("./characterRoutes");

// use the userRoutes
router.use("/users", userRoutes);
// use the characterRoutes
router.use("/characters", characterRoutes);

// export the module
module.exports = router;
