const { uploadFile } = require('../config/cloudinary');
const { Song } = require('../models');

const uploadSong = async (req, res) => {

    try {

        console.log(req.files);

        const result = await uploadFile(req.files.song);

        console.log(result);

        console.log(result.public_id);

        const song = await Song.create({
            ...req.body,
            cloudinaryPublicId: result.public_id,
            cloudinarySecureUrl: result.secure_url
            // cloudinaryPublicId: 'mock_id',
            // cloudinarySecureUrl: 'mock_url'
        });

        console.log('✅ Canción creada:', song.toJSON());

        res.json(song);

    } catch (error) {
        console.error('❌ Error al crear canción:', error);
        res.json(error);

    }


}

const search = async (req, res) => {
    const { search } = req.body;

    try {
        const songs = await Song.findAll({
            where: {
                title: { [Op.like]: `%${search}%` }
            }
        })

        res.json(songs);

    } catch (error) {
        res.json(error);
    }

}

const deleteSong = async (req, res) => {
    try {
        const { song_id } = req.body;
        const song = await Song.findByPk(song_id);
        const result = await deleteFile(song.dataValues.cloudinaryPublicId);
        await song.destroy();

        res.json(song);
    } catch (error) {
        res.json(error);
    }
}

module.exports = { uploadSong, search, deleteSong };