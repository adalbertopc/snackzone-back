const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const verifyToken = require('../middlewares/verifyToken');
const passwordEncrypt = require('../middlewares/passwordEncrypt');

router.get('/users', UserController.getAll);
router.post('/users', passwordEncrypt, UserController.insert);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

//auth
router.post('/users/auth', UserController.authenticate);
router.get('/users/auth', verifyToken, (req, res) => {
	res.json({
		success: true,
		message: 'Token is valid',
		username: req.user.username,
		firstName: req.user.firstName,
		userType: req.user.userType,
	});
});

module.exports = router;
