/* eslint-disable no-unused-vars */
import { Response, Request } from 'express';

import { DataModel } from '../models/data.model.js';

export class DataController {
    constructor(public model: DataModel<any>) {}

    getAllController = async (req: Request, res: Response) => {
        req;
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(await this.model.findAll()));
    };
    getController = async (req: Request, res: Response) => {
        res.setHeader('Content-type', 'application/json');
        const result = await this.model.find(+req.params.id);
        if (result) {
            res.end(JSON.stringify(result));
        } else {
            res.status(404);
            res.end(JSON.stringify({}));
        }
    };

    postController = async (req: Request, res: Response) => {
        const newContent = await this.model.create(req.body);
        res.setHeader('Content-type', 'application/json');
        res.status(201);
        res.end(JSON.stringify(newContent));
    };

    patchController = async (req: Request, res: Response) => {
        const updatedContent = await this.model.update(
            +req.params.id,
            req.body
        );
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(updatedContent));
    };
    deleteController = async (req: Request, res: Response) => {
        const { status } = await this.model.delete(+req.params.id);
        res.status(status);
        res.end(JSON.stringify({}));
    };
}
