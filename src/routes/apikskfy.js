const router = require('express').Router();

router.use('/users', require('./api/users.js'));
router.use('/artists', require('./api/artists.js'));
router.use('/songs', require('./api/songs.js'));

module.exports = router ; 