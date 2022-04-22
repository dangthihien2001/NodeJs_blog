const express = require('express');

const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.index); //tuyến đường gốc ở dưới cùng  vì nó luôn đọc từ trên xuống.

module.exports = router;
