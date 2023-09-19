const router = require("express").Router();
const { User } = require("../models");
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
