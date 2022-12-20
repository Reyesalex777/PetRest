import { Route } from "react-router-dom";

// GET /api/pets
route.get('/', petsCtrl.getAll);

// POST /api/pets
route.post('/', petsCtrl.create);