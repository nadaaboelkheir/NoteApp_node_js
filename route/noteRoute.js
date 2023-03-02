var express = require('express');
var notecontroler = require('../controller/notController');
const router = express.Router()

router.get("/notes/getallnotes", notecontroler.getallnotes)
router.post("/notes/save", notecontroler.save)
router.delete("/notes/delete/:seqid", notecontroler.delete)
router.put("/notes/update", notecontroler.update)

module.exports = router;