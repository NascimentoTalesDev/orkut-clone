
import { mongooseConnect } from "@/db/connection";
import { User } from "@/models/User";
const bcrypt = require("bcrypt")
import createUserToken from "@/helpers/create-user-token";

export default async function signIn(req, res) {
    const {method} = req
    await mongooseConnect()

    if (method === "POST") {
        const {email, password} = req.body;

        const UserDoc = await User.findOne({email})
        
        if (!UserDoc) {

            res.json({message: "Email não cadastrado!", success: false})
            return
        }

        const passMatch = await bcrypt.compare(password, UserDoc.password)
        
        
        if (!passMatch) {
            res.json({message: "Senha incorreta! Tente novamente.", success: false})
            return
        }
        
        await createUserToken(User, req, res)
        
        res.send({UserDoc, success: true})
    }
}