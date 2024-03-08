// Packages
const router = require('express').Router();
// Modules
const { create, ussd } = require('../controllers/ussd.controllers');

router.post("/create", create);
router.post("/", ussd);

module.exports = router;