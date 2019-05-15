import * as mongoose from 'mongoose';
import { UserSchema } from '../models/model';
import { Request , Response } from 'express';

const User = mongoose.model('User' , UserSchema);

export class UserController {
   
    public static _user = [];
  
    constructor() {
        
    }

    public addUser(req: Request , res: Response): void {
        let newUser: any = new User(req.body);
        console.log(req.body , newUser);
        // newUser.save((err , user ) => {
        //     if(err){
        //         res.send(err);
        //     }else {
        //         res.status(204).send(user);
        //     }
        // });
        UserController._user.push(newUser);
        console.log(UserController._user);
        res.send(newUser)
    }

    public getUsers(req: Request , res: Response): void {
        console.log('here' , User);
        // User.find({} , (err , user) => {
        //     if(err){
        //         res.send(err);
        //     }else {
        //         console.log(user);
        //         res.send(user);
        //     }
        // });
        res.send(UserController._user ? UserController._user : []);
    }
}