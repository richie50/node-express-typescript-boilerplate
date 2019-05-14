import { App } from './app';
import * as express from 'express';



class Server {
     _PORT = 3001;
     private _server: express.Application

    constructor() {
        this._server = new App().app;
     }

     public startServer() : void{
       this._server.listen(this._PORT , () => {
            console.log('Express port listening ...... ' , this._PORT);
       });
     }
}

new Server().startServer()