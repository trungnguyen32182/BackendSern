import bcrypt from 'bcryptjs'
import db from '../models/index'

const salt = bcrypt.genSaltSync(10);

const createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hashPasswordFromBcryptJs = await hashUserPassword(data.password)
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcryptJs,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleID: data.roleID,
            })
            resolve("create successful")
        } catch (e) {
            reject(e);
        }
    })
}

const hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e)
        }
    })
}

const getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.User.findAll({
                raw: true
            })
            resolve(data)
        } catch (e) {
            reject(e)
        }
    })
}

const getUserById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: id },
                raw: true
            })

            user ? resolve(user) : resolve([])
        } catch (e) {
            reject(e)
        }
    })
}

const UpdateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.update({
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                roleID: data.roleID,
            }, {
                where: { id: data.id }
            })
            resolve("create successful")
        } catch (e) {
            reject(e);
        }
    })
}

const deleteById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.destroy({
                where: {
                    id: id
                }
            });
            resolve("create successful")
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    hashUserPassword: hashUserPassword,
    getAllUser: getAllUser,
    getUserById: getUserById,
    UpdateUserData: UpdateUserData,
    deleteById: deleteById,
}