const express = require('express');
const router = express.Router();
const petsCtrl = require('../../controllers/api/pets');

// GET /api/pets
router.get('/', petsCtrl.index);
// POST /api/pets
router.post('/new', petsCtrl.create);
router.put('/edit/:id', petsCtrl.updatePet);
// Delete /api/pets/:id  
router.delete('/:id', petsCtrl.delete);

 module.exports = router;