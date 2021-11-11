import Express from 'express';
import Mongoose from 'mongoose';
import Busboy from 'busboy';
import bcrypt from 'bcrypt';
import moment from 'moment';


const router = express.Router();

router.post('/' , async(req, res)=>{
    var busboy = new Busboy ({ headers: req.header});
    busboy.on('finish', async () => {
        try{
            // UPLOAD DA IMAGEM
            if(req.files){
                const file = req.files.photo;

                
            }
            // CRIAR USUÁRIO   

        } catch(err){
            res.json({error: true, message: err.message})
        }
    });
    req.pipe(busboy);
});

export default router;