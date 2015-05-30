var express = require('express');
var router = express.Router();

var PersonModel = require('../../db/group1db/PersonModel');
var CourseModel = require('../../db/group1db/CourseModel');
var gradesDB = require('../../db/group6db/gradesDB.js');
var motionModel = require('../../db/group6db/motion.js');

function handler(req, res, next) {

    if(!req.session.user){return res.redirect('../info/login');}
    if(typeof req.body.cmd !== 'undefined') {
        if( req.body.cmd == 'accept' ) {
            console.log('accept')
            var detail = {
                "teacherid":req.body.teacherid,
                "studentid":req.body.studentid,
                "courseid":req.body.courseid,
                "newvalue":req.body.newvalue,
                "admin":req.session.user[0].userid,
                "comment":"accept"
            }
            motionModel.acceptbyid(detail, function(error, other) {
                if(error){
                    console.log(error);
                    return;
                }
            });
        } else if( req.body.cmd == 'reject') {
            console.log('reject')
            var detail = {
                "teacherid":req.body.teacherid,
                "studentid":req.body.studentid,
                "courseid":req.body.courseid,
                "admin":req.session.user[0].userid,
            }
            motionModel.rejectbyid(detail, function(error, other) {
                if(error){
                    console.log(error);
                    return;
                }
            });
        }

    }
    var query = {
        "status":"pending"
    }
    motionModel.findbystatus(query, function(error,motions){
        if(error){
            console.log(error);
            return;
        }
        res.render('grades/admin_gradesaudit', {
  	        name: '程序员', 
  	        image: 'images/avatars/avatar1.jpg',
  	        total_a:'12',
  	        a:'2,3,1,2,3,1,0',
  	        total_b:'24',
  	        b:'4,6,2,4,6,2,0',
    	    total_credits:'24',
  	        credits:'4,6,2,4,6,2,0',
            data:motions
        });
    }); 
}

router.get('/gradesAudit',handler);


module.exports = router;
module.exports = handler;
