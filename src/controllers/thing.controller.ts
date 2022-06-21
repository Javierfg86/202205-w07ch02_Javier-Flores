import { Response, Request } from 'express';
import fs from 'fs/promises';
const dataFilePath = './data/things.json';
let things = JSON.parse(await fs.readFile(dataFilePath, { encoding: 'utf-8' }));

export const getController = async (req: Request, res: Response) => {
    req;
    res.setHeader('Content-type', 'text-html');
    res.end(`<p>Things I already know</p><p>${things}</p>`);
};
export const getIdController = (req: Request, res: Response) => {
    res.setHeader('Content-type', 'text-html');
    const thing = things.find((item) => item.id === +req.params.id);
    if (thing) {
        res.end(`<p>${thing.name}</p>`);
    } else {
        res.status(404);
        res.end(`{}`);
    }
};
export const postController = async (req: Request, res: Response) => {
    const newContent = { ...req.body, id: things };
};
