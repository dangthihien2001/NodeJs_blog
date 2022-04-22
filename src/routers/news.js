const express = require('express');

const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newsController.index
router.use('/:slug', newsController.show);

router.use('/', newsController.index); //tuyến đường gốc ở dưới cùng  vì nó luôn đọc từ trên xuống.
module.exports = router;
