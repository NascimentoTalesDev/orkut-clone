import { model, Schema, models } from "mongoose"

const UserSchema = new Schema ({
    email: {type: String},
    password: {type: String},
    
});

export const User = models.User || model('User', UserSchema);