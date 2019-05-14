import {Request , Response , Router } from 'express';


export class Routes {
    private _router;
    private _app: any;
    constructor(app: any){
        this._router = () => Router();
        this._app = app;
    }
    get routerMiddleware(): any {
        return this._router(); 
    }
    public getContacts(): void {
        //this._app.route('/').get()
        console.log('route middleware available ' , this._app.route);
        this._app.route('/').get((req:Request , res: Response) => {
            console.log('ayyyyyyyy');
            res.status(200).send({config:'Routes privately configure .....'});
        });
    }
}