import PetsPage from "../../src/pages/PetsPage/PetsPage";

async function getAll(req, res) {
    const pets = await pets.find({
        user: req.user._id  // User Centric CRUD
    });
    res.json(pets);
}