const { Router } = require('express');
const mongoAdminCtrl = require("../controllers/mongo_admin.controllers")
const router = Router();

router.route('/getUsers')
		.get(mongoAdminCtrl.getUsers)

router.route('/addUser')
		.post(mongoAdminCtrl.addUser)

module.exports = router;