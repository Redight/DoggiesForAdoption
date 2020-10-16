const router = require("express").Router();
module.exports = router;

const kennels = require("../modules/kennels-module.js")
const admins = require("../modules/admin-module.js")
const Dogs = require("../modules/dogs-module.js")

router.get('/dogs', (req, res) => {
    Dogs.find()
     .then(data => {
         res.status(200).json(data);
     })
})

router.get('/kennels', (req, res) => {
    kennels.find()
        .then(data =>{
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ message: "failed to get kennels", error:
    err });
        });
});

router.get('/kennels/:id', (req, res) => {
    kennels.findById(req.params.id)
        .then(data => {
            res.status(200).json(data);
        })
});


router.get('/test', (req, res) => {
    admins.find()
    .then (data => {
        res.status(200).json(data);
    })
})