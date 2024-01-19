import express from 'express'
import {
    getHomePage,
    getCrud,
    postCrud,
    displayGetCrud,
    getEditCrud,
    putEditCrud,
    getDeleteCrud
} from '../controllers/homeController.js'

let router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', getHomePage);
    router.get('/crud', getCrud);
    router.post('/post-crud', postCrud);
    router.get('/get-crud', displayGetCrud);
    router.get('/edit-crud', getEditCrud);
    router.get('/delete-crud', getDeleteCrud);
    router.post('/put-crud', putEditCrud);
    return app.use('/', router);
}

export default initWebRoutes;
