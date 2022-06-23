import { Router } from 'express';
import { DataController } from '../controllers/thing.controller.js';
import { Notes } from '../models/notes.model.js';

export const notesController = new DataController(new Notes('notes'));
export const routerNotes = Router();

routerNotes.get('/', notesController.getAllController);
routerNotes.get('/:id', notesController.getController);
routerNotes.post('/', notesController.postController);
routerNotes.patch('/:id', notesController.patchController);
routerNotes.delete('/:id', notesController.deleteController);
