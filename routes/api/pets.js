const express = require('express');
const router = express.Router();
const petsCtrl = require('../../controllers/api/pets');

// GET /api/pets
router.get('/', petsCtrl.index);
// Delete /api/pets/{id}  
router.post('/', petsCtrl.create);
// POST /api/pets

 module.exports = router;