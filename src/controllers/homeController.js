import db from '../models/index'
import crudService from '../services/CRUDservice'

const getHomePage = async (req, res) => {
    try {

        let data = await db.User.findAll()

        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log("getHomePage ~ e:", e)
    }
}

const getCrud = (req, res) => {
    return res.render('crud.ejs')
}

const postCrud = async (req, res) => {
    let message = await crudService.createNewUser(req.body)
    console.log("postCrud ~ message:", message)
    return res.send('post thanh cong')
}

const displayGetCrud = async (req, res) => {
    let data = await crudService.getAllUser()
    return res.render('display.ejs', { data: data })
}

const getEditCrud = async (req, res) => {
    const id = req.query.id
    if (id) {
        const userData = await crudService.getUserById(id)
        return res.render('editUser.ejs', { data: userData })
    } else {
        return res.send('user not found')
    }
}

const putEditCrud = async (req, res) => {
    let data = req.body
    await crudService.UpdateUserData(data)
    return res.redirect('/get-crud')
}

const getDeleteCrud = async (req, res) => {
    const id = req.query.id
    if (id) {
        const userData = await crudService.deleteById(id)
        return res.redirect('/get-crud')
    } else {
        return res.send('user not found')
    }
}


export {
    getHomePage,
    getCrud,
    postCrud,
    displayGetCrud,
    getEditCrud,
    putEditCrud,
    getDeleteCrud
}