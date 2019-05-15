import * as mongoose from 'mongoose';

const SCHEMA = mongoose.Schema;

export const UserSchema = new SCHEMA({
    name: {
        type:String
    },
    id: {
        type: Number,
        default: Date.now
    }
});