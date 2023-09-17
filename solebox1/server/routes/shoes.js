const express = require('express')
const MusicSchema = require('../models/shoes')
const router = express();

//Create Music
router.post('/api/music', async (req, res) => {
    const music = new MusicSchema({ ...req.body })
    await music.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Read All Music
router.get('/api/AllMusic', async (req, res) => {
    const findMusic = await MusicSchema.find()
    res.json(findMusic)
})

//Read Single Music
router.get('/api/music/:id', async (req, res) => {
    const findMusic = await MusicSchema.findById(req.params.id)
    res.json(findMusic)
})

//Update Music
router.put('/api/music/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await MusicSchema.findByIdAndUpdate(id, req.body);
        res.json({ message: 'Music updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Delete Music
router.delete('/api/music/:id', async (req, res) => {
    await MusicSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router;