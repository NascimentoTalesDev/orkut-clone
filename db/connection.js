import mongoose from "mongoose";

export function mongooseConnect(){

    if (mongoose.connection.readyState === 1) {
        console.log("MONGO AS PROMISE");
        return mongoose.connection.asPromise()
    }else{
        const uri = "mongodb+srv://nascimentotalesdev:ln9ixqNRJ8EZo8Ns@cluster0.9tdevmo.mongodb.net/?retryWrites=true&w=majority";
        console.log("MONGO URI");
        return mongoose.connect(uri)
    }
}