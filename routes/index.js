import express from 'express';
import {loginController, registerController,refreshController,productController} from '../controllers';
import auth from '../middlewares/auth';
const router = express.Router();
router.post('/register',registerController.register)
router.post('/login',loginController.login)
router.post('/refresh',refreshController.refresh);
router.post('/logout',auth,loginController.logout);

router.post('/products',auth,productController.store);
router.put('/products/:id',auth,productController.update);
router.delete('/products/:id',auth,productController.destroy);
router.get('/products/:id',productController.show);

export default router;