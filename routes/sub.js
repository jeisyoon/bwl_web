var express = require('express');
var router = express.Router();
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');

router.get('/01', function(request, response){  
    console.log('--- subPage frame ---');
    var html = template.headerHTML() +       
          template.footerHTML();
    response.send(html);
});
module.exports = router;