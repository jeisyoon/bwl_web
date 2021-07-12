module.exports = {
  
 headerHTML:function(){
  var list =`    
      <!doctype html>
      <html>
      <head>
        <title>(주) 비더블유엘</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="../style.css">
      </head>

      <body>
        <div class="header">
          <div id="headerLog">
            <a href="/index/I01"><img src="../images/logo/bwlFull.png"></a></div>
          <div id="navigation">
            <a href="/sub/01">제품</a>
            <a href="/sub/02">온라인상담</a>
            <a href="/sub/03">고객센터</a>
            <a href="/sub/04">멤버십</a>          
            <a href="/sub/05">비즈니스</a>
          </div>            
          <div id="headerLogin">
            <a href="/sub/06"><img src="../images/logo/login.png"></a></div>
          <div  id="headerBwl">
            <a href="/sub/07"><img src="../images/logo/bwlB.png"></a></div>
        </div>
    `
    return list;
  },

  mainFrameHTML:function(id){
    var homePageImage = [
      '',
      'homeBackGround1.jpg',
      'homeBackGround2.jpg',
      'homeBackGround3.jpg',
      'homeBackGround4.jpg'    
    ];

    id = parseInt(id);
    var list = `
      <div class="mainframe">
        <img src="../images/homePage/${homePageImage[id]}">
        <div id="mainLeft">
          <a href="/index/L${id}"><img src="../images/logo/directionLeft.png"></a></div>
        <div id="mainRight">
          <a href="/index/R${id}"><img src="../images/logo/directionRight.png"></a></div>
      </div>       
    `;
    return list;
  },
  
  footerHTML:function(){
    var list = `
        <div class="footer">
          <img src="../images/homePage/footer.jpg" >
          <div id="footerBwl">
            <a href="/index/I01"><img src="../images/logo/bwlFull.png"></a></div>
          <div id="footerYaskawa">
            <a href=https://www.yaskawa.co.kr/main/main.php>
            <img src="../images/logo/yaskawa.png"></a>
          </div>
        </div>
      </body>
      </html>
    `;
    return list;
    }
}