const Pets = require('../../models/pets');

module.exports = {
    index,
    create,
    delete: deletePet,
    updatePet,
}

async function index(req, res) {
    const pets = await Pets.find({ user: req.user._id });
    res.json(pets);
}

async function create(req, res) {
    const pet = await Pets.create(req.body);
    pet.user = req.user._id;
    pet.save();
    res.json(pet);
}


async function deletePet(req, res) {
    const removedPet = await Pets.findOneAndDelete(req.params.id);
    res.json(removedPet);
}

async function updatePet(req, res) {
    await Pets.findOneAndUpdate({ _id: req.params.id },
    req.body,
    )
    const updatedPet = await Pets.find({ user: req.user._id });
    res.json(updatedPet);
}