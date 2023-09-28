// import router
const router = require("express").Router();
// import models
const { User, Character } = require("../models");
// import the authorization helper
const withAuth = require("../utils/auth");

// Get login page
router.get("/login", async (req, res) => {
  // if the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

// Get signup page
router.get("/signup", async (req, res) => {
  res.render("signup");
});

// Get homepage
router.get("/", withAuth, async (req, res) => {
  try {
    res.render("login", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get profile page
router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Character,
          attributes: ["name", "id"]
        }
      ]
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get character page
router.get("/character", withAuth, (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("login");
    return;
  }

  res.render("character", {
    loggedIn: true
  });
});

router.get("/character/:id", withAuth, async (req, res) => {
  try {
    const charData = await Character.findByPk(req.params.id);
    const character = charData.get({ plain: true });
    res.render("character", {
      ...character,
      checkProd: process.env.NODE_ENV === "production",
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// export the router
module.exports = router;
