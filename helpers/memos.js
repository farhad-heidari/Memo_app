var db = require('../models');

exports.getMemos = function(req, res){
    db.Memo.find()
    .then(function(memos){
        res.json(memos);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.createMemo = function(req, res){
    db.Memo.create(req.body)
    .then(function(newMemo){
        res.status(201).json(newMemo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getMemo = function(req, res){
    db.Memo.findById(req.params.memoId)
    .then(function(foundMemo){
        res.json(foundMemo)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateMemo = function(req, res){
    db.Memo.findOneAndUpdate({_id: req.params.memoId}, req.body, {new: true})
    .then(function(memo){
        res.json(memo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.deleteMemo = function(req, res){
    db.Memo.remove({_id: req.params.memoId})
    .then(function(){
        res.json({message: 'We deleted it!'});
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports;