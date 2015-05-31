var express = require('express');
var router = express.Router();
var motionModel = require('../../db/group6db/motion.js');
var PersonModel = require('../../db/group1db/PersonModel');
var CourseModel = require('../../db/group1db/CourseModel');
var gradesDB = require('../../db/group6db/gradesDB.js');
var gradesfix = require('./teacher_gradesfix.js');

function classmanage(req, res, next) {

    if(!req.session.user){return res.redirect('../info/login');}
    //result of modifing db
    var result = true;
    var criteria = {courseid : req.body.courseid};
    //console.log("coursestatus:" + req.body.coursestatus);
    if(typeof req.body.userid !== 'undefined') {
        if( req.body.coursestatus == "on")
            gradesfix(req, res);
        else {
            
            console.log('create a motion:' + req.body.reason)
            console.log('user:' + req.session.user[0].userid)
            var motion = {
                "teacherid" : req.session.user[0].userid,
                "teachername" : req.session.user[0].username,
                "studentid":req.body.userid,
                "courseid": req.body.courseid,
                "oldvalue": req.body.oldvalue,
                "newvalue":req.body.score,
                "reason":req.body.reason
                }
            motionModel.insert(motion, function(error, instance) {
                if(error) {
                    console.log(error);
                } 
            });
            
        }
    }



gradesDB.find(criteria,function(error,grades){
    if(error){
        console.log(error);
        return;
    }
    
    var studentList=[];
    
    for(var i=0;i<grades.length;i++){
      studentList.push(grades[i].userid);
    }
    
    
   PersonModel.findbylist(studentList,function(error,persons){
     
        // console.log("what is" + persons);
   CourseModel.findbyid(req.body.courseid,function(error,courses){
     
     
     // console.log("what is persons:" + persons);
      //console.log("what is courses:" + courses);
      //console.log("what is grades:" + grades);
    warning = !result;
    console.log("isWarning:" + warning);
    res.render('grades/teacher_classmanage', {
  	name: '程序员', 
  	image: 'images/avatars/avatar1.jpg',
  	total_a:'12',
  	a:'2,3,1,2,3,1,0',
  	total_b:'24',
  	b:'4,6,2,4,6,2,0',
  	total_credits:'24',
  	credits:'4,6,2,4,6,2,0',
    data:grades,
    studentslist:persons,
    courses:courses,
    warning:warning
  });   
   });
   });
    
  }); 
}

router.post('/classManagement', classmanage);

module.exports = router;
