var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Schema = new mongoose.Schema({
  Single_1_ID  : String,Single_1_Nmae  : String,
  Double_1_ID  : String,Double_1_Nmae  : String,
  Single_2_ID  : String,Single_2_Nmae  : String,
  Double_2_ID  : String,Double_2_Nmae  : String,
  Single_3_ID  : String,Single_3_Nmae  : String,
  Double_3_ID  : String,Double_3_Nmae  : String,
  Single_4_ID  : String,Single_4_Nmae  : String,
  Double_4_ID  : String,Double_4_Nmae  : String,
  Single_5_ID  : String,Single_5_Nmae  : String,
  Double_5_ID  : String,Double_5_Nmae  : String,
  Single_6_ID  : String,Single_6_Nmae  : String,
  Double_6_ID  : String,Double_6_Nmae  : String,
  Single_7_ID  : String,Single_7_Nmae  : String,
  Double_7_ID  : String,Double_7_Nmae  : String,
  Single_8_ID  : String,Single_8_Nmae  : String,
  Double_8_ID  : String,Double_8_Nmae  : String,
  Single_9_ID  : String,Single_9_Nmae  : String,
  Double_9_ID  : String,Double_9_Nmae  : String,
  Single_10_ID : String,Single_10_Nmae : String,
  Double_10_ID : String,Double_10_Nmae : String,
  Single_11_ID : String,Single_11_Nmae : String,
  Double_11_ID : String,Double_11_Nmae : String,
  Single_12_ID : String,Single_12_Nmae : String,
  Double_12_ID : String,Double_12_Nmae : String,
  Single_13_ID : String,Single_13_Nmae : String,
  Double_13_ID : String,Double_13_Nmae : String
});
/*       courseNumber: String,
       courseName:String,
       score:Number,
       credit:Number,
       gradePoint:Number, 
       secondScore:Number
});/*
  ClassroomID: String,
  Classroom_Name: String,
  Day_1_Single_1_Course_ID : String,  Day_1_Single_1_Course_Nmae : String,
  Day_1_Double_1_Course_ID : String,  Day_1_Double_1_Course_Nmae : String,
  Day_1_Single_2_Course_ID : String,  Day_1_Single_2_Course_Nmae : String,
  Day_1_Double_2_Course_ID : String,  Day_1_Double_2_Course_Nmae : String,
  Day_1_Single_3_Course_ID : String,  Day_1_Single_3_Course_Nmae : String,
  Day_1_Double_3_Course_ID : String,  Day_1_Double_3_Course_Nmae : String,
  Day_1_Single_4_Course_ID : String,  Day_1_Single_4_Course_Nmae : String,
  Day_1_Double_4_Course_ID : String,  Day_1_Double_4_Course_Nmae : String,
  Day_1_Single_5_Course_ID : String,  Day_1_Single_5_Course_Nmae : String,
  Day_1_Double_5_Course_ID : String,  Day_1_Double_5_Course_Nmae : String,
  Day_1_Single_6_Course_ID : String,  Day_1_Single_6_Course_Nmae : String,
  Day_1_Double_6_Course_ID : String,  Day_1_Double_6_Course_Nmae : String,
  Day_1_Single_7_Course_ID : String,  Day_1_Single_7_Course_Nmae : String,
  Day_1_Double_7_Course_ID : String,  Day_1_Double_7_Course_Nmae : String,
  Day_1_Single_8_Course_ID : String,  Day_1_Single_8_Course_Nmae : String,
  Day_1_Double_8_Course_ID : String,  Day_1_Double_8_Course_Nmae : String,
  Day_1_Single_9_Course_ID : String,  Day_1_Single_9_Course_Nmae : String,
  Day_1_Double_9_Course_ID : String,  Day_1_Double_9_Course_Nmae : String,
  Day_1_Single_10_Course_ID : String, Day_1_Single_10_Course_Nmae : String,
  Day_1_Double_10_Course_ID : String, Day_1_Double_10_Course_Nmae : String,
  Day_1_Single_11_Course_ID : String, Day_1_Single_11_Course_Nmae : String,
  Day_1_Double_11_Course_ID : String, Day_1_Double_11_Course_Nmae : String,
  Day_1_Single_12_Course_ID : String, Day_1_Single_12_Course_Nmae : String,
  Day_1_Double_12_Course_ID : String, Day_1_Double_12_Course_Nmae : String,
  Day_1_Single_13_Course_ID : String, Day_1_Single_13_Course_Nmae : String,
  Day_1_Double_13_Course_ID : String, Day_1_Double_13_Course_Nmae : String, 
  Day_2_Single_1_Course_ID : String,  Day_2_Single_1_Course_Nmae : String,
  Day_2_Double_1_Course_ID : String,  Day_2_Double_1_Course_Nmae : String,
  Day_2_Single_2_Course_ID : String,  Day_2_Single_2_Course_Nmae : String,
  Day_2_Double_2_Course_ID : String,  Day_2_Double_2_Course_Nmae : String,
  Day_2_Single_3_Course_ID : String,  Day_2_Single_3_Course_Nmae : String,
  Day_2_Double_3_Course_ID : String,  Day_2_Double_3_Course_Nmae : String,
  Day_2_Single_4_Course_ID : String,  Day_2_Single_4_Course_Nmae : String,
  Day_2_Double_4_Course_ID : String,  Day_2_Double_4_Course_Nmae : String,
  Day_2_Single_5_Course_ID : String,  Day_2_Single_5_Course_Nmae : String,
  Day_2_Double_5_Course_ID : String,  Day_2_Double_5_Course_Nmae : String,
  Day_2_Single_6_Course_ID : String,  Day_2_Single_6_Course_Nmae : String,
  Day_2_Double_6_Course_ID : String,  Day_2_Double_6_Course_Nmae : String,
  Day_2_Single_7_Course_ID : String,  Day_2_Single_7_Course_Nmae : String,
  Day_2_Double_7_Course_ID : String,  Day_2_Double_7_Course_Nmae : String,
  Day_2_Single_8_Course_ID : String,  Day_2_Single_8_Course_Nmae : String,
  Day_2_Double_8_Course_ID : String,  Day_2_Double_8_Course_Nmae : String,
  Day_2_Single_9_Course_ID : String,  Day_2_Single_9_Course_Nmae : String,
  Day_2_Double_9_Course_ID : String,  Day_2_Double_9_Course_Nmae : String,
  Day_2_Single_10_Course_ID : String, Day_2_Single_10_Course_Nmae : String,
  Day_2_Double_10_Course_ID : String, Day_2_Double_10_Course_Nmae : String,
  Day_2_Single_11_Course_ID : String, Day_2_Single_11_Course_Nmae : String,
  Day_2_Double_11_Course_ID : String, Day_2_Double_11_Course_Nmae : String,
  Day_2_Single_12_Course_ID : String, Day_2_Single_12_Course_Nmae : String,
  Day_2_Double_12_Course_ID : String, Day_2_Double_12_Course_Nmae : String,
  Day_2_Single_13_Course_ID : String, Day_2_Single_13_Course_Nmae : String,
  Day_2_Double_13_Course_ID : String, Day_2_Double_13_Course_Nmae : String,
  Day_3_Single_1_Course_ID : String,  Day_3_Single_1_Course_Nmae : String,
  Day_3_Double_1_Course_ID : String,  Day_3_Double_1_Course_Nmae : String,
  Day_3_Single_2_Course_ID : String,  Day_3_Single_2_Course_Nmae : String,
  Day_3_Double_2_Course_ID : String,  Day_3_Double_2_Course_Nmae : String,
  Day_3_Single_3_Course_ID : String,  Day_3_Single_3_Course_Nmae : String,
  Day_3_Double_3_Course_ID : String,  Day_3_Double_3_Course_Nmae : String,
  Day_3_Single_4_Course_ID : String,  Day_3_Single_4_Course_Nmae : String,
  Day_3_Double_4_Course_ID : String,  Day_3_Double_4_Course_Nmae : String,
  Day_3_Single_5_Course_ID : String,  Day_3_Single_5_Course_Nmae : String,
  Day_3_Double_5_Course_ID : String,  Day_3_Double_5_Course_Nmae : String,
  Day_3_Single_6_Course_ID : String,  Day_3_Single_6_Course_Nmae : String,
  Day_3_Double_6_Course_ID : String,  Day_3_Double_6_Course_Nmae : String,
  Day_3_Single_7_Course_ID : String,  Day_3_Single_7_Course_Nmae : String,
  Day_3_Double_7_Course_ID : String,  Day_3_Double_7_Course_Nmae : String,
  Day_3_Single_8_Course_ID : String,  Day_3_Single_8_Course_Nmae : String,
  Day_3_Double_8_Course_ID : String,  Day_3_Double_8_Course_Nmae : String,
  Day_3_Single_9_Course_ID : String,  Day_3_Single_9_Course_Nmae : String,
  Day_3_Double_9_Course_ID : String,  Day_3_Double_9_Course_Nmae : String,
  Day_3_Single_10_Course_ID : String, Day_3_Single_10_Course_Nmae : String,
  Day_3_Double_10_Course_ID : String, Day_3_Double_10_Course_Nmae : String,
  Day_3_Single_11_Course_ID : String, Day_3_Single_11_Course_Nmae : String,
  Day_3_Double_11_Course_ID : String, Day_3_Double_11_Course_Nmae : String,
  Day_3_Single_12_Course_ID : String, Day_3_Single_12_Course_Nmae : String,
  Day_3_Double_12_Course_ID : String, Day_3_Double_12_Course_Nmae : String,
  Day_3_Single_13_Course_ID : String, Day_3_Single_13_Course_Nmae : String,
  Day_3_Double_13_Course_ID : String, Day_3_Double_13_Course_Nmae : String,
  Day_4_Single_1_Course_ID : String,  Day_4_Single_1_Course_Nmae : String,
  Day_4_Double_1_Course_ID : String,  Day_4_Double_1_Course_Nmae : String,
  Day_4_Single_2_Course_ID : String,  Day_4_Single_2_Course_Nmae : String,
  Day_4_Double_2_Course_ID : String,  Day_4_Double_2_Course_Nmae : String,
  Day_4_Single_3_Course_ID : String,  Day_4_Single_3_Course_Nmae : String,
  Day_4_Double_3_Course_ID : String,  Day_4_Double_3_Course_Nmae : String,
  Day_4_Single_4_Course_ID : String,  Day_4_Single_4_Course_Nmae : String,
  Day_4_Double_4_Course_ID : String,  Day_4_Double_4_Course_Nmae : String,
  Day_4_Single_5_Course_ID : String,  Day_4_Single_5_Course_Nmae : String,
  Day_4_Double_5_Course_ID : String,  Day_4_Double_5_Course_Nmae : String,
  Day_4_Single_6_Course_ID : String,  Day_4_Single_6_Course_Nmae : String,
  Day_4_Double_6_Course_ID : String,  Day_4_Double_6_Course_Nmae : String,
  Day_4_Single_7_Course_ID : String,  Day_4_Single_7_Course_Nmae : String,
  Day_4_Double_7_Course_ID : String,  Day_4_Double_7_Course_Nmae : String,
  Day_4_Single_8_Course_ID : String,  Day_4_Single_8_Course_Nmae : String,
  Day_4_Double_8_Course_ID : String,  Day_4_Double_8_Course_Nmae : String,
  Day_4_Single_9_Course_ID : String,  Day_4_Single_9_Course_Nmae : String,
  Day_4_Double_9_Course_ID : String,  Day_4_Double_9_Course_Nmae : String,
  Day_4_Single_10_Course_ID : String, Day_4_Single_10_Course_Nmae : String,
  Day_4_Double_10_Course_ID : String, Day_4_Double_10_Course_Nmae : String,
  Day_4_Single_11_Course_ID : String, Day_4_Single_11_Course_Nmae : String,
  Day_4_Double_11_Course_ID : String, Day_4_Double_11_Course_Nmae : String,
  Day_4_Single_12_Course_ID : String, Day_4_Single_12_Course_Nmae : String,
  Day_4_Double_12_Course_ID : String, Day_4_Double_12_Course_Nmae : String,
  Day_4_Single_13_Course_ID : String, Day_4_Single_13_Course_Nmae : String,
  Day_4_Double_13_Course_ID : String, Day_4_Double_13_Course_Nmae : String,
  Day_5_Single_1_Course_ID : String,  Day_5_Single_1_Course_Nmae : String,
  Day_5_Double_1_Course_ID : String,  Day_5_Double_1_Course_Nmae : String,
  Day_5_Single_2_Course_ID : String,  Day_5_Single_2_Course_Nmae : String,
  Day_5_Double_2_Course_ID : String,  Day_5_Double_2_Course_Nmae : String,
  Day_5_Single_3_Course_ID : String,  Day_5_Single_3_Course_Nmae : String,
  Day_5_Double_3_Course_ID : String,  Day_5_Double_3_Course_Nmae : String,
  Day_5_Single_4_Course_ID : String,  Day_5_Single_4_Course_Nmae : String,
  Day_5_Double_4_Course_ID : String,  Day_5_Double_4_Course_Nmae : String,
  Day_5_Single_5_Course_ID : String,  Day_5_Single_5_Course_Nmae : String,
  Day_5_Double_5_Course_ID : String,  Day_5_Double_5_Course_Nmae : String,
  Day_5_Single_6_Course_ID : String,  Day_5_Single_6_Course_Nmae : String,
  Day_5_Double_6_Course_ID : String,  Day_5_Double_6_Course_Nmae : String,
  Day_5_Single_7_Course_ID : String,  Day_5_Single_7_Course_Nmae : String,
  Day_5_Double_7_Course_ID : String,  Day_5_Double_7_Course_Nmae : String,
  Day_5_Single_8_Course_ID : String,  Day_5_Single_8_Course_Nmae : String,
  Day_5_Double_8_Course_ID : String,  Day_5_Double_8_Course_Nmae : String,
  Day_5_Single_9_Course_ID : String,  Day_5_Single_9_Course_Nmae : String,
  Day_5_Double_9_Course_ID : String,  Day_5_Double_9_Course_Nmae : String,
  Day_5_Single_10_Course_ID : String, Day_5_Single_10_Course_Nmae : String,
  Day_5_Double_10_Course_ID : String, Day_5_Double_10_Course_Nmae : String,
  Day_5_Single_11_Course_ID : String, Day_5_Single_11_Course_Nmae : String,
  Day_5_Double_11_Course_ID : String, Day_5_Double_11_Course_Nmae : String,
  Day_5_Single_12_Course_ID : String, Day_5_Single_12_Course_Nmae : String,
  Day_5_Double_12_Course_ID : String, Day_5_Double_12_Course_Nmae : String,
  Day_5_Single_13_Course_ID : String, Day_5_Single_13_Course_Nmae : String,
  Day_5_Double_13_Course_ID : String, Day_5_Double_13_Course_Nmae : String,
  Day_6_Single_1_Course_ID : String,  Day_6_Single_1_Course_Nmae : String,
  Day_6_Double_1_Course_ID : String,  Day_6_Double_1_Course_Nmae : String,
  Day_6_Single_2_Course_ID : String,  Day_6_Single_2_Course_Nmae : String,
  Day_6_Double_2_Course_ID : String,  Day_6_Double_2_Course_Nmae : String,
  Day_6_Single_3_Course_ID : String,  Day_6_Single_3_Course_Nmae : String,
  Day_6_Double_3_Course_ID : String,  Day_6_Double_3_Course_Nmae : String,
  Day_6_Single_4_Course_ID : String,  Day_6_Single_4_Course_Nmae : String,
  Day_6_Double_4_Course_ID : String,  Day_6_Double_4_Course_Nmae : String,
  Day_6_Single_5_Course_ID : String,  Day_6_Single_5_Course_Nmae : String,
  Day_6_Double_5_Course_ID : String,  Day_6_Double_5_Course_Nmae : String,
  Day_6_Single_6_Course_ID : String,  Day_6_Single_6_Course_Nmae : String,
  Day_6_Double_6_Course_ID : String,  Day_6_Double_6_Course_Nmae : String,
  Day_6_Single_7_Course_ID : String,  Day_6_Single_7_Course_Nmae : String,
  Day_6_Double_7_Course_ID : String,  Day_6_Double_7_Course_Nmae : String,
  Day_6_Single_8_Course_ID : String,  Day_6_Single_8_Course_Nmae : String,
  Day_6_Double_8_Course_ID : String,  Day_6_Double_8_Course_Nmae : String,
  Day_6_Single_9_Course_ID : String,  Day_6_Single_9_Course_Nmae : String,
  Day_6_Double_9_Course_ID : String,  Day_6_Double_9_Course_Nmae : String,
  Day_6_Single_10_Course_ID : String, Day_6_Single_10_Course_Nmae : String,
  Day_6_Double_10_Course_ID : String, Day_6_Double_10_Course_Nmae : String,
  Day_6_Single_11_Course_ID : String, Day_6_Single_11_Course_Nmae : String,
  Day_6_Double_11_Course_ID : String, Day_6_Double_11_Course_Nmae : String,
  Day_6_Single_12_Course_ID : String, Day_6_Single_12_Course_Nmae : String,
  Day_6_Double_12_Course_ID : String, Day_6_Double_12_Course_Nmae : String,
  Day_6_Single_13_Course_ID : String, Day_6_Single_13_Course_Nmae : String,
  Day_6_Double_13_Course_ID : String, Day_6_Double_13_Course_Nmae : String,
  Day_7_Single_1_Course_ID : String,  Day_7_Single_1_Course_Nmae : String,
  Day_7_Double_1_Course_ID : String,  Day_7_Double_1_Course_Nmae : String,
  Day_7_Single_2_Course_ID : String,  Day_7_Single_2_Course_Nmae : String,
  Day_7_Double_2_Course_ID : String,  Day_7_Double_2_Course_Nmae : String,
  Day_7_Single_3_Course_ID : String,  Day_7_Single_3_Course_Nmae : String,
  Day_7_Double_3_Course_ID : String,  Day_7_Double_3_Course_Nmae : String,
  Day_7_Single_4_Course_ID : String,  Day_7_Single_4_Course_Nmae : String,
  Day_7_Double_4_Course_ID : String,  Day_7_Double_4_Course_Nmae : String,
  Day_7_Single_5_Course_ID : String,  Day_7_Single_5_Course_Nmae : String,
  Day_7_Double_5_Course_ID : String,  Day_7_Double_5_Course_Nmae : String,
  Day_7_Single_6_Course_ID : String,  Day_7_Single_6_Course_Nmae : String,
  Day_7_Double_6_Course_ID : String,  Day_7_Double_6_Course_Nmae : String,
  Day_7_Single_7_Course_ID : String,  Day_7_Single_7_Course_Nmae : String,
  Day_7_Double_7_Course_ID : String,  Day_7_Double_7_Course_Nmae : String,
  Day_7_Single_8_Course_ID : String,  Day_7_Single_8_Course_Nmae : String,
  Day_7_Double_8_Course_ID : String,  Day_7_Double_8_Course_Nmae : String,
  Day_7_Single_9_Course_ID : String,  Day_7_Single_9_Course_Nmae : String,
  Day_7_Double_9_Course_ID : String,  Day_7_Double_9_Course_Nmae : String,
  Day_7_Single_10_Course_ID : String, Day_7_Single_10_Course_Nmae : String,
  Day_7_Double_10_Course_ID : String, Day_7_Double_10_Course_Nmae : String,
  Day_7_Single_11_Course_ID : String, Day_7_Single_11_Course_Nmae : String,
  Day_7_Double_11_Course_ID : String, Day_7_Double_11_Course_Nmae : String,
  Day_7_Single_12_Course_ID : String, Day_7_Single_12_Course_Nmae : String,
  Day_7_Double_12_Course_ID : String, Day_7_Double_12_Course_Nmae : String,
  Day_7_Single_13_Course_ID : String, Day_7_Single_13_Course_Nmae : String,
  Day_7_Double_13_Course_ID : String, Day_7_Double_13_Course_Nmae : String
});*/


router.get('/arrange', function(req, res, next) {

var gradesDB = global.db.model('classroom',Schema);
gradesDB.find(function(error,docs){
    if(error){
        console.log(error);
        return;
    }

  res.render('arrange', {
    name: '程序员', 
    image: 'images/avatars/avatar2.jpg',
    total_a:'12',
    a:'2,3,1,2,3,1,0',
    total_b:'24',
    b:'4,6,2,4,6,2,0',
    total_credits:'24',
    credits:'4,6,2,4,6,2,0',
    data:docs
  });
});
});  


router.get('/arrange_course_information',function(req, res, next) {

var gradesDB = global.db.model('classroom', Schema);
gradesDB.find(function(error, docs){
    if(error){
        console.log(error);
        return;
    }
  
  res.render('arrange_course_information', {
    name: '程序员', 
    image: 'images/avatars/avatar2.jpg',
    total_a:'12',
    a:'2,3,1,2,3,1,0',
    total_b:'24',
    b:'4,6,2,4,6,2,0',
    total_credits:'24',
    credits:'4,6,2,4,6,2,0',
    data:docs
  });
  }); 
}); 


router.get('/arrange_course_management',function(req, res, next) {

var gradesDB = global.db.model('classroom', Schema);
gradesDB.find(function(error, docs){
    if(error){
        console.log(error);
        return;
    }
  
  res.render('arrange_course_management', {
    name: '程序员', 
    image: 'images/avatars/avatar2.jpg',
    total_a:'12',
    a:'2,3,1,2,3,1,0',
    total_b:'24',
    b:'4,6,2,4,6,2,0',
    total_credits:'24',
    credits:'4,6,2,4,6,2,0',
    data:docs
  });
  }); 
}); 


router.get('/arrange_classroom_information',function(req, res, next) {

var gradesDB = global.db.model('classroom', Schema);
gradesDB.find(function(error, docs){
    if(error){
        console.log(error);
        return;
    }

  console.log(docs[0]);

  res.render('arrange_classroom_information', {
    name: '程序员', 
    image: 'images/avatars/avatar2.jpg',
    total_a:'12',
    a:'2,3,1,2,3,1,0',
    total_b:'24',
    b:'4,6,2,4,6,2,0',
    total_credits:'24',
    credits:'4,6,2,4,6,2,0',
    data:docs
  });
  }); 
}); 


module.exports = router;
