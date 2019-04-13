const Box = require('../models/Box');

class BoxController {

  async index(req, res) {
    const boxes = await Box.find().populate('files');
    return res.json(boxes);
  }

  async show(req, res) {
    const box = await Box.findById(req.params.id).populate('files');

    return res.json(box);
  }

  async store(req, res) {
    const box = await Box.create(req.body);

    return res.json(box);
  }

  async update(req, res) {
    const box = await Box.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('files');

    return res.json(box);
  }

  async destroy(req, res) {
    await Box.findByIdAndDelete(req.params.id);

    return res.send();
  }
}

module.exports = new BoxController();