const router = require("express").Router();
const { CaseManager, UAC, Sponsor } = require("../models");
const withAuth = require("../utils/auth");

router.get("/new-user", async (req, res) => {
  res.render("signUp");
});

//GET ONE SPONSOR

router.get("dashboard/:sponsor_id", async (req, res) => {
  try {
    const singleSponsor = await Sponsor.findByPk(req.params.sponsor_id);
    const sponsor = singleSponsor.get({ plain: true });

    res.render("sponsortab", {
      sponsor,
      username: req.session.username,
      id: req.session.user_id,
      email: req.session.email,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET ONE UAC, RENDER TO DASHBOARD
router.get("/dashboard/:id", async (req, res) => {
  try {
    const singleUACinfo = await UAC.findByPk(req.params.id);

    const uac = singleUACinfo.get({ plain: true });
    console.log("UAC INFO", uac);

    res.render("dashboard", {
      uac,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET ONE UAC AND RENDER TO SPONSOR TAB//
router.get("/sponsortab/:id", async (req, res) => {
  try {
    const singleUACinfo = await UAC.findByPk(req.params.id);

    const uac = singleUACinfo.get({ plain: true });
    console.log("UAC INFO", uac);

    res.render("sponsortab", {
      uac,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOG USER IN
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});
//RENDER LOGIN PAGE
router.get("/", (req, res) => {
  res.render("login");
});

// GET all UAC's and CM's, RENDER TO TABLE VIEW
router.get("/table", async (req, res) => {
  try {
    const dbUACdata = await UAC.findAll({
      include: [{ all: true, nested: true }],
    });
    const cmDbData = await CaseManager.findAll({
      include: [{ all: true, nested: true }],
    });

    const uacTable = dbUACdata.map((uacData) => uacData.get({ plain: true }));
    const cmSelector = cmDbData.map((cmData) => cmData.get({ plain: true }));
    res.render("table", {
      uacTable,
      cmSelector,
      username: req.session.username,
      id: req.session.user_id,
      email: req.session.email,
    });
    console.log(uacTable, cmSelector);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
