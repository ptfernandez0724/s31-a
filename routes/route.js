const express = require('express');

const router = express.Router();
 
const controller = require('../controllers/controller');



router.get('/:id', (req, res) => {

	controller.getSpecificTask(req.params.id).then(result => res.send(result));

})


router.post('/', (req, res) => {

	controller.createTask(req.body).then(result => res.send(result));
})


router.put('/:id/complete', (req, res) => {
	controller.updateTask(req.params.id, req.body).then(result => res.send(result));
})




module.exports = router;