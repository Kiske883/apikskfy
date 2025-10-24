const { checkToken } = require('../../helpers/middlewares');
const { uploadSong, search, deleteSong } = require('../../controllers/songs.controller.js');

const fileUpload = require('express-fileupload');

const router = require('express').Router();

router.use(fileUpload({
    useTempFiles:true,
    tempFileDir: './src/tmp' 
})) ;

router.post('/upload', checkToken, uploadSong );
router.post('/search', search );
router.delete('/:song_id', checkToken, deleteSong );

module.exports = router ;