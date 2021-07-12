var express = require('express');
var router = express.Router();
var process = require('../lib/process.js');
var sanitizeHtml = require('sanitize-html');

router.get('/:pageId', function(request, response){     
  var stringId = sanitizeHtml(request.params.pageId); 
  var dir = stringId.substr(0,1);
  var id = stringId.substr(1,2);

  if(dir==="I") {
    var html = process.mainRoutin(id);
    response.send(html); 
  } else {
    var id = process.mainDirection (dir, id);
    response.redirect(`/index/I${id}`);
  };
})

module.exports = router; 
