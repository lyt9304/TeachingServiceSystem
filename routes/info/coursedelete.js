var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 
var CourseModel = require('../../db/group1db/CourseModel');

router.get('/coursedelete', function(req, res,next) {
    if(!req.session.user){return res.redirect('login');}
    res.render('info/coursedelete',{
        name: '程序员', 
        image: 'images/avatars/avatar3.jpg',
        total_a:'12',
        a:'2,3,1,2,3,1,0',
        total_b:'24',
        b:'4,6,2,4,6,2,0',
        total_credits:'24',
        credits:'4,6,2,4,6,2,0',

        deleteresult:'请提交表单'
    });
});

router.post('/coursedelete',function(req,res,next){
    CourseModel.deletebyid(req.body.courseid2, function(error, data){
        if(error) {
            console.log('find error!'+error);
        } else {
            console.log('find ok!'+data);
        }
        console.log('data : '+data);
        res.render('info/coursedelete',{
            name: '程序员', 
            image: 'images/avatars/avatar3.jpg',
            total_a:'12',
            a:'2,3,1,2,3,1,0',
            total_b:'24',
            b:'4,6,2,4,6,2,0',
            total_credits:'24',
            credits:'4,6,2,4,6,2,0',

            deleteresult:'课程删除成功'
        });
    });
});

module.exports = router;