import express from "express";

import {
    getUsers, 
    getUserById,
    saveUser,
    editUser,
    deleteUser
} from "../controllers/UserController.js";

import {
    getOffering,
    createOffering,
} from "../controllers/OfferingController.js"

const router = express.Router();


router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', editUser);
router.delete('/users/:id', deleteUser);

router.get('/offering', getOffering);
router.post('/offering', createOffering);

export default router;