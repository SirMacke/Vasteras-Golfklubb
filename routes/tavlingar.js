const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('tavlingar');
});

module.exports = router;
