const router = require("express").Router();
const userRoutes = require("./userRoutes");
const newUacRoutes = require("./newUacRoutes");
const editUAC = require("./editUACRoutes");
const editSponsorRoutes = require("./editSponsorRoutes");
const editTaskRoutes = require("./editTaskRoutes");
const editRRRoutes = require("./editRRRoutes");

router.use("/users", userRoutes);
router.use("/uac", newUacRoutes);
router.use("/edit", editUAC);
router.use("/edit", editTaskRoutes);
router.use("/edit", editSponsorRoutes);
router.use("/edit", editRRRoutes);
module.exports = router;
