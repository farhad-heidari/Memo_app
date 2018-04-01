var express = require('express');
var router = express.Router();
//   var db = require("../models");
var helpers = require('../helpers/memos');

router.route('/')
    .get(helpers.getMemos)
    .post(helpers.createMemo)
    
router.route('/:memoId')
    .get(helpers.getMemo)
    .put(helpers.updateMemo)
    .delete(helpers.deleteMemo)

module.exports = router;