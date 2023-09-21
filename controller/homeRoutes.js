// import router
const router = require("express").Router();
// import models
const { User, Character } = require("../models");
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

router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Character,
          attributes: ["name"],
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

// export the router
module.exports = router;
