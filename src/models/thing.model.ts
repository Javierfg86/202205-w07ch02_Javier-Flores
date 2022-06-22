/* eslint-disable no-unused-vars */
import { DataModel } from './data.model';

export interface iThing {
    id: number;
    name: string;
}
export class Thing extends DataModel<iThing> implements iThing {
    id: number;

    constructor(public name: string = '') {
        super('things-db');
        this.id = 0;
    }
}
