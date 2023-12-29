import express from 'express'
import path from 'path'

const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')
    //config static files
    app.use(express.static(path.join('./src', 'public')))
}

export default configViewEngine
