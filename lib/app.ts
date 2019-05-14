import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/routes';

export class App {
    public app: express.Application;
    private appRoutes: any;
    constructor() {
        this.app = express();
        //init the routes and pass it to the middleware config function
        this.appRoutes = new Routes(this.app);
        this.config([
            this.appRoutes.routerMiddleware,  
            bodyParser.urlencoded({extended:false}),
            bodyParser.json(),
        ]);
        this.appRoutes.getContacts();
        
    }

    /**
     * Express application middleware 
     */
    private config(config?: any |any[]):void {
        //post form data , JSON or form encoded , can be extended
        this.app.use([... config]);
        console.log('type of configs ... success' , config);
    }
}