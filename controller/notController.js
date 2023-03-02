
var generator = require("../utill/Generator")
var memstorage = require("../utill/memory.storage")
var model = require("../model/noteModel")

exports.getallnotes = (req, res) => {

    var values = memstorage.getvalues(memstorage.store)
    return res.status(200).send(JSON.stringify(values));

}
exports.save = (req, res) => {
    var seqid = generator.generate();
    var createdby = "admin"
    var date = new Date()
    var title = req.body.title
    var content = req.body.content
    if (!title || !content) {
        return res.status(500).send("title and content should be input")
    }
    var Note = model.Note
    var noteObj = new Note(seqid, title, content, createdby, date)
    memstorage.store.setItem(seqid, noteObj);
    return res.status(201).send("save all notes successfly" + noteObj.title + noteObj.content);
}



exports.update = (req, res) => {
    var seqid1 = req.body.seqid
    var createdby = "admin"
    var date = new Date()
    var title = req.body.title
    var content = req.body.content
    if (!seqid1 || !content || !title) {
        return res.status(500).send("fill the required fields")
    }
    else if (!memstorage.store.getItem(seqid1)) {
        return res.status(500).send("not exist")
    }
    var Note = model.Note
    var noteObj = new Note(seqid1, title, content, createdby, date)
    memstorage.store.setItem(seqid1, noteObj);
    return res.status(200).send("update all notes successfly");

}
exports.delete = (req, res) => {
    var seqid1 = req.params.seqid

    if (!seqid1) {
        return res.status(500).send("fill the required fields")
    }
    if (!memstorage.store.getItem(seqid1)) {
        return res.status(500).send("not exist")
    }
    memstorage.store.removeItem(seqid1);
    return res.status(202).send("delete note successfly");

}