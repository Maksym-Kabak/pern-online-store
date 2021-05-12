const { Router } = require('express');
const router = new Router();
const typeController = require('../controllers/type.controller');
const checkRoleMiddleware = require('../middleware/check-role.middleware');

router.post('/', checkRoleMiddleware('ADMIN'), typeController.create);
router.get('/', typeController.getAll);

module.exports = router;
