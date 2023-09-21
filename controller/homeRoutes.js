// import router
const router = require("express").Router();
// import models
const { User } = require("../models");
// import the authorization helper
const withAuth = require("../utils/auth");

// get login page
router.get("/", async (req, res) => {
  // if the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

// export the router
module.exports = router;
