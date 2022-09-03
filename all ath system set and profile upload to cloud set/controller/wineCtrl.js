const WineCatModel = require("../models/wineCatModel.js");

module.exports.getWine = async (req, res) => {
    const wine = await WineCatModel.find();
    res.send(wine);
}

module.exports.saveWine = (req, res) => {
    const { text } = req.body;

    WineCatModel
        .create({ text })
        .then(() => res.set(201).send("Wine Added Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.deleteWine = (req, res) => {
    const { _id } = req.body;

    WineCatModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Wine Deleted Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateWine = (req, res) => {
    const { _id, text } = req.body;

    WineCatModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Wine Updated Successfully..."))
        .catch((err) => console.log(err));
}