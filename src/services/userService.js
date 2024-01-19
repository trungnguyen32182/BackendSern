import bcrypt from 'bcryptjs'
import db from '../models/index'

const salt = bcrypt.genSaltSync(10);

const handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let isExist = await checkUserEmail(email)

            if (isExist) {
                let user = await db.User.findOne({
                    attributes: ['email', 'roleId', 'password'],
                    where: { email: email },
                    raw: true
                })

                if (user) {
                    let check = await bcrypt.compareSync(password, user.password)
                    if (check) {
                        userData.errCode = 0
                        userData.errMessage = 'Ok'

                        delete user.password
                        userData.user = user
                    } else {
                        userData.errCode = 3
                        userData.errMessage = 'wrong password'
                    }
                } else {
                    userData.errCode = 2
                    userData.errMessage = 'user not found'
                }
            } else {
                userData.errCode = 1
                userData.errMessage = `your's email isn't valid`
            }
            resolve(userData)
        } catch (err) {
            reject(err)
        }
    })
}


let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            !!user ? resolve(true) : resolve(false)
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
}