// import router
const router = require("express").Router();
// import models
const { User, Character } = require("../models");
// import the authorization helper
const withAuth = require("../utils/auth");

// get login page
router.get("/", async (req, res) => {
  // if the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Character,
          attributes: ["name", "id"],
        },
      ],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/character", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("login");
    return;
  }

  res.render("character", {
    loggedIn: true,
  });
});

router.get("/character/:id", async (req, res) => {
  try {
    const charData = await Character.findByPk(req.params.id);
    const character = charData.get({ plain: true });
    res.render("character", {
      ...character,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// export the router
module.exports = router;
