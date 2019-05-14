import * as express from 'express';
import * as bodyParser from 'body-parser';

export class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.config();
    }

    /**
     * Express application middleware 
     */
    private config():void {
        //post form data , JSON or form encoded , can be extended
        this.app.use(bodyParser.json() , bodyParser.urlencoded({extended:false}));
    }
} 