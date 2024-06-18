const express = require('express');

const router = express.Router();

const personController = require('../controllers/PersonController');

router.get('/', personController.getPeople);
router.get('/create', personController.getCreatePerson);
router.post('/create', personController.postCreatePerson);
router.get('/edit/:id', personController.getEditPerson);
router.post('/edit/:id', personController.postEditPerson);
router.post('/delete/:id', personController.postDeletePerson);

module.exports = router;