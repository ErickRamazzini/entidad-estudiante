import { Router } from"express";
import { getCarreras, getCarrera, craeteCarrera, updateCarrera, deleteCarrera } from "../controllers/Carrera.controllers";

const router = Router ();

router.get('/',getCarreras);
router.get('/:id', getCarrera);
router.post('/',craeteCarrera);
router.put('/:id',updateCarrera);
router.delete('/:id',deleteCarrera);

export default router



// https://ui.shadcn.com/