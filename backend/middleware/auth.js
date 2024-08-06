const jwt = require('jsonwebtoken')

const secretkey = "PraveenK"

const protect = async (req,res,next) => {
    let token;
    if(req.headers.authorization && req.headers.aauthorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, secretkey)
            req.user=decoded
            next();
        }catch(err){
            res.statu(401).json({
                success: false,
                message: err.message
            })
        }
    }
    if(!token){
        res.status(401).json({
            message: err.message
        })
    }
}
const authorize = (role) => {
    return (req,res,next) => {
        if(req.user.role == role) {
            next();
        }else{
            res.status(401).json({
                message: err.message
            })
        }
    }
}

module.exports = {protect, authorize}