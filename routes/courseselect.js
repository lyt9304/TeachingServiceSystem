var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var tmp=[];
tmp.push({couresname:'initial_name',teacher:'initial_teacher',exametime:'initial_exametime',room:'initial_room',college:'initial_college'});

router.get('/courseselect', function(req, res, next) {
    res.render('courseselect',{
    	course_data:tmp,
        selectresult:'请提交表单'
    });
});

router.post('/courseselect',function(req, res, next){
	console.log("post:courseselect");
	var CourseModel = require('../db/group1db/CourseModel');

	CourseModel.findbyname(req.body.coursename, function(error, data){
		if(error) {
			console.log('find error!'+error);
		} else {
			console.log('find ok!'+data);
		}
		console.log('data : '+data);
		res.render('courseselect',{
			selectresult:'搜索结果：',
			course_data: data
		});
	});
});

module.exports = router;

