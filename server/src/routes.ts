import { Router } from 'express'
import multer from 'multer'
import { celebrate, Joi } from 'celebrate'

import multerConfig from './config/multer'
import PointController from './controllers/pointController'
import ItemsController from './controllers/itemsController'

const routes = Router()
const upload = multer(multerConfig)

const pController = new PointController()
const iController = new ItemsController()

routes.get('/items', iController.index)

routes.post('/points',
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      whatsapp: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required()
    })
  }, {
    abortEarly: false
  }),
  pController.create
)
routes.get('/points', pController.index)
routes.get('/points/:id', pController.show)

export default routes