const jwt = require('jsonwebtoken')

const createUserToken = async (user, req, res) => {
    
    //Creating a token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    },'secret')

    //Returning token
    res.status(200).json({
        message: 'You are authenticated',
        token: token,
        userId: user._id
    })
    
} 
module.exports = createUserToken