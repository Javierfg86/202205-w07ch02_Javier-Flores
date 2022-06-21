import { Router } from 'express';
import {
    getController,
    getIdController,
    patchController,
    postController,
    deleteController,
} from '../controllers/thing.controller';

export const routerThings = Router();

routerThings.get('/', getController);
routerThings.get('/:id', getIdController);
routerThings.post('/', postController);
routerThings.patch('/:id', patchController);
routerThings.delete('/:id', deleteController);
