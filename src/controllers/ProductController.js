const mongoose = require('mongoose');

const Product = mongoose.model('Product');

/* Exporta a função que está dentro de module.exports
para pegar e utilizar a funcao, é necessário vc ter um
require para poder utilizar a funcao dessa classe. */
module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    res.json(product);
  },

  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  }
}