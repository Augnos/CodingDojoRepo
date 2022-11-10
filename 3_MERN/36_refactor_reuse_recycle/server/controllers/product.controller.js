const { Product } = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(results => res.json(results))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
