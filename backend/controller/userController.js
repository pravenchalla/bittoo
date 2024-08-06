const User = require('../model/userModel')

const jwt = require('jsonwebtoken')
const secretkey = 'PraveenK'

const generateToken = (id, role) => {
    return jwt.sign({id:id, role: role}, secretkey, {expiresIn:'24h'})
}

exports.createUsers = async(req,res) => {
    try{
    const {name,age, role, email, password} = req.body
    const user = new User ({
        name: name,
        age: age,
        role: role,
        email: email,
        password: password
    })
    await user.save()
    const token = generateToken (user._id, user.role)
    res.status(201).json({
        success: true,
        token: token,
        data: user
    })
    }catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
exports.userSignIn = async (req, res) => {
    const {email, password} = req.body
    try{
        const user = await User.findOne({email: email})
        if(user && (await user.matchPassword(password))){
            const token = generateToken(user._id, user.role)
            res.status(201).json({
                success: true,
                token: token,
                data: user
            })
        }
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
exports.getAllUsers= async (req,res) => {
    try{
        const {page,limit} = req.query
        const user = await User.find({isDeleted: false}).limit(limit).skip((page-1)*limit).exec();
        res.status(201).json({
            success: true,
            data: user
        })
    }catch(err){
        res.stauts(500).json({
            success: false,
            message: err.message
        })
    }
}