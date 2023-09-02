
import { mongooseConnect } from "@/db/connection";
import { User } from "@/models/User";
const bcrypt = require("bcrypt")
import createUserToken from "@/helpers/create-user-token";

export default async function signUp(req, res) {
    const {method} = req
    await mongooseConnect()

    if (method === "POST") {
        const {email, password} = req.body;

        const UserExists = await User.findOne({email})

        if(UserExists) {
            res.json({message: "Email já cadastrado!", success: false})
            return
        }else{
            const salt = await bcrypt.genSalt(12)
            const passwordHash = await bcrypt.hash(password, salt)

            try {
                
                const UserDoc = await User.create({
                    email, password : passwordHash,
                })
                
                await createUserToken(UserDoc, req, res)

                res.json({success: true})
                res.send(UserDoc)

            } catch (error) {
                console.log(error);
            }
        }
    }
}