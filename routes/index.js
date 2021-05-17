const express = require('express');
const router = express.Router();

// плучение главной страницы
router.get('/', function(req, res) {
  res.render('../public/app/admin/admin');
});
module.exports = router;
