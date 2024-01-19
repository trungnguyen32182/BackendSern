import express from 'express'
import {
    handleLogin
} from '../controllers/apiController.js'

let router = express.Router();

const initAPIRoutes = (app) => {
    router.post('/login', handleLogin)
    return app.use('/api/v1', router);
}

export default initAPIRoutes;

