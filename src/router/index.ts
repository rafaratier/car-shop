import * as express from 'express';
import carRouter from './carRoutes';

const router = express.Router();

router.use('/cars', carRouter);

export default router;