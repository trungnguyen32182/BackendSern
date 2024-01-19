import userService from '../services/userService';

const handleLogin = async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    console.log(req.body)
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing input parameters!'
        })
    }

    let userData = await userService.handleUserLogin(email, password)

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.message,
        user: userData.user ? userData.user : {}
    })

}

export {
    handleLogin
}