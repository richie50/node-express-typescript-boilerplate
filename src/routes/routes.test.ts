
import 'jest'
import * as request from 'supertest'; //  high-level abstraction for testing HTTP
import { App } from '../app';

function initApp():  Express.Application{
    let app: Express.Application = new App().app
    return app;
}
const app = initApp();

describe('Staring Routes Test With  Jest ....' , ()=> {
    test('Verify Routes Test Work ' , () => {
        expect(true).toBeTruthy();
    });

    describe('Test Root Path ....' , () => {
        test('It should return content with GET ' , () => { 
            // console.log('In test ' , app)
           return request(app).get('/').then((response) => {
               expect(response.statusCode).toBe(200);
           });
        });
    });

    describe('Test Root Path Async....' , () => {
        test('It should return content with GET ' , async () => { 
            // console.log('In test ' , app)
           const response = await  request(app).get('/');
               expect(response.statusCode).toBe(200);
        });
    });
});