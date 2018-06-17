const express = require('express');
const Soin = require('../models/soin');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index/index');
})
router.get('/soin', async (req, res) => {
    const findSoins = await Soin.find({});
    res.render('index/soin', {
        soins: findSoins,
    });
})

router.get('/add-soin', (req, res) => {
    const createSoin = new Soin({
        alias: 'massage',
        title: 'Massage',
        text: 'lallalaa',
        image: 'image.jpg',
        prestation: [
            {
                temp: 23,
                prix: 23
            },
            {
                temp: 12,
                prix: 34
            }
        ]
    });
    createSoin.save().then((err, soin) => {
        console.log(soin)
        res.redirect('/soin')
    })

})
module.exports = router;