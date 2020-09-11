var express = require('express');
var router = express.Router();
const models =require('../models');
const saltRounds=12;
const bcrypt=require('bcrypt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login',function(req,res,next) {
  res.render('login',{});
});
router.get('/signup',function(req,res,next){
  res.render('signup',{ });
});
//signup post
router.post('/signup',function(req,res,next){
  models.User.count({where:{
    email: req.body.user_email,
  }}).then(count=>{
    if(count==0){
       bcrypt.hash(req.body.user_password, saltRounds, function (err, hash) {
  return models.User.create({
    email: req.body.user_email,
    password: hash,
    user_name:req.body.user_name
  }).then(user=>{

    res.redirect('/'+user.id);
    
  })
});
    }
    else{
      res.render( 'signup',{user_exists:true})
    }
  })

});
//login post
router.post('/login',function(req,res,next){
  models.User.count({where:{
    email: req.body.user_email,
  }}).then(count=>{
    if(count==0){
      res.render( 'login',{user_exists:false})
    }
    else{
      
        return models.User.findOne({
          where:{email: req.body.user_email,
       }                                     
        }).then(user=>{

          bcrypt.compare(req.body.user_password,user.password, function (err, result) {
            if(result==true){
              res.redirect('/'+user.id)
            }
           else {
              res.render('login',{check_psw:false})
            }
          })  
        })
    }
          })
    
  })

router.get('/:id',function(req,res,next){
  return models.User.findOne({
    where:{
      id:req.params.id
    }
  }).then(user=>{
    res.render('landing',{user_name:user.user_name})
  })
})

module.exports = router;
