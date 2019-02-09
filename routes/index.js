const express = require('express');

const router = express.Router();

const catcher = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (e) {
    res.status(e.code).send({ msg: e.msg });
  }
};

router.get('/', catcher((req, res) => {
  res.render('index');
}));

module.exports = router;
