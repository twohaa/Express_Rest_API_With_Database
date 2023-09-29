const { getAllusers, getOneusers, createUser, updateUser ,deleteUser} = require("../controllers/users.controller");
const router = require("express").Router();


router.get("/", getAllusers);
router.get("/:id", getOneusers);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;