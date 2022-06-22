import fs from 'fs/promises';
import { DataModel } from './data.model';

jest.mock('fs/promises');

describe('Given a instantiated model DataModel', () => {
    let model: DataModel<any>;
    let result: string;
    let mockItem = { id: 1, test: 'test' };
    beforeEach(() => {
        result = JSON.stringify([mockItem]) as string;
        (fs.readFile as jest.Mock).mockResolvedValue(result);
        model = new DataModel('test-db');
    });
    describe('When method findAll is called', () => {
        test('Then fs.readFile should be called', async () => {
            await model.findAll();
            expect(fs.readFile).toHaveBeenCalled();
        });
    });
    describe('When method find is called', () => {
        test('Then a item should be found', async () => {
            const result = await model.find(1);
            expect(result).toStrictEqual(mockItem);
            expect(fs.readFile).toHaveBeenCalled();
        });
    });
    describe('When method create is called', () => {
        test('Then a item should be created', async () => {
            const result = await model.create(mockItem);
            expect(result).toStrictEqual({ ...mockItem, id: mockItem.id + 1 });
            expect(fs.writeFile).toHaveBeenCalled();
        });
    });
    describe('When method update is called', () => {
        test('Then a item should be updated', async () => {
            const updatedPartial = { test: 'test2' };
            const result = await model.update(1, updatedPartial);
            expect(result.test).toBe(updatedPartial.test);
            expect(fs.writeFile).toHaveBeenCalled();
        });
    });
    describe('When method delete is called', () => {
        test('Then a item should be deleted', async () => {
            const result = await model.delete(1);
            expect(result).toStrictEqual({ status: 202 });
            expect(fs.writeFile).toHaveBeenCalled();
        });
    });
    describe('When method delete is called with a not valid id', () => {
        test('Then a item should not be deleted', async () => {
            const result = await model.delete(4);
            expect(result.status).toBe(404);
        });
    });
});
