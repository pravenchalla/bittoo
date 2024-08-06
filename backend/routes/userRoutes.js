const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')
const  {validate} = require('../middleware/validation')
const {createUserSchema, logInSchema} = require('../middleware/validateSchema')
const {protect, authorize} = require('../middleware/auth')


router.post('/Ucreate', validate(createUserSchema),userController.createUsers )
router.post('/Ulogin', validate(logInSchema), userController.userSignIn)
router.get('/Uview', protect,authorize('Admin'), userController. getAllUsers)
module.exports = router