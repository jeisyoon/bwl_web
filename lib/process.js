var template = require('./template.js');

module.exports = {

  mainRoutin:function(id){
    var html = template.headerHTML() +
    template.mainFrameHTML(id);
    html = html + template.footerHTML();
    return html;
   },
   
   mainDirection:function(dir, id){
    var no = Number(id);  
    if(dir==="R"){
      no = no + 1;
    } else {
      no = no - 1;
      };
      
    if(no===5) {
      no = 1;
    } else if(no===0) {
      no = 4;
      };
    return  "0" + String (no);  
   },
}