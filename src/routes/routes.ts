import {Request , Response , Router } from 'express';
import { UserController } from '../controller/user-controller';


export class Routes {
    private _router;
    private _app: any;
    public userController: UserController;
    
    constructor(app: any){
        this._router = () => Router();
        this._app = app;
        this.userController = new UserController();
    }
    get routerMiddleware(): any {
        return this._router(); 
    }
    public getUsers(): void {
        //this._app.route('/').get()
        console.log('route middleware available ' , this._app.route);
        this._app.route('/').get(this.userController.getUsers);
        console.log('hot relaoding');
           
    }

    public addUser(req: Request , res: Response): void {
        //this._app.route('/').get()
        console.log('route middleware available ' , this._app.route);
        this._app.route('/user').post(this.userController.addUser);
    }
}