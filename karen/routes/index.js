var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//로그인 페이지 접근
router.get('/login', function(req, res, next){
  
  console.log('-----------------session------------------');
  console.log(req.session);

  if(req.session.user_id && req.session.user_pwd){
    
    const params = {
      user_id: req.session.user_id,
      user_pwd: req.session.user_pwd 
    };

  res.render('login2', params);
  } else{   
    res.render('login', { title : '로그인' });
  }
});

//아이디, 비밀번호
router.post('/Login', function(req, res, text){
  
    console.log('--------------------id--------------------');
    console.log(req.body.id);
    
    console.log('--------------------pw--------------------');
    console.log(req.body.passwords);

    const params = {
      user_id : req.body.id,
      user_pwd : req.body.passwords
    };

    req.session.user_id = params.user_id;
    req.session.user_pwd = params.user_pwd;

    console.log('------------req.session--------------');
    console.log(req.session);

      res.render('login2', params);
  });

  router.get('/movie', function(req, res, text){
    res.render('movie');
  });

  router.get('/logout', function(req, res, next){
    res.render('logout');
    req.session.destroy();
  });
module.exports = router;