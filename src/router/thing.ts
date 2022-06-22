import { Router } from 'express';
import { DataController } from '../controllers/thing.controller';
import { Thing } from '../models/thing.model';
export const thingController = new DataController(new Thing());
export const routerThings = Router();

routerThings.get('/', thingController.getAllController);
routerThings.get('/:id', thingController.getController);
routerThings.post('/', thingController.postController);
routerThings.patch('/:id', thingController.patchController);
routerThings.delete('/:id', thingController.deleteController);
