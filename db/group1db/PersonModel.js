var mongoose = require('mongoose');
// Schema 结构
var PersonSchema = new mongoose.Schema({
    photo       : {type :Buffer},//头像
    userid      : {type : String},  //学工号 unique
    username	: {type : String, default : '匿名用户'},   //用户名
    password    : {type : String, default : '123456'},    //密码
    status		: {type : String, default : '学生'},      //用户身份 系统管理员/教务管理员/教师/学生
    sex			: {type : String},    //性别
    cstlist     : [],   //课程列表
    age			: {type : Number},    //年龄
    major       : {type : String},  //专业
    college		: {type : String}, //学院
    title       : {type : String, default : '无'},   //职称
    tel			: {type : String},    //电话
    email		: {type : String},   //邮件
    time     : {type : Date, default: Date.now} //创建时间
});
var CollectionName = 'persons';

// PersonSchema.statics.findbyid = function(userid, callback) {
//     return this.model('PersonModel').find({userid: userid}, callback);
// }
PersonSchema.statics.findbyid = function(userid, callback) {
     return this.model('PersonModel').find({userid: userid}, callback);
}


PersonSchema.statics.findbyname = function(username, callback) {
     return this.model('PersonModel').find({username: username}, callback);
}

PersonSchema.statics.deletebyid = function(userid, callback) {
    return this.model('PersonModel').remove({userid: userid}, callback);
}

PersonSchema.statics.modifybyid = function(req, callback) {
    return this.model('PersonModel').update(
        {userid: req.userid},
        {
            $set:{
                username : req.username,
                password : req.password,
                status : req.status,
                photo :req.photo,
                sex : req.sex,
                age : req.age,
                major : req.major,
                college : req.college,
                title : req.title,
                tel : req.tel,
                email : req.email
            }//,
 //           $currentDate : { lastModified: true }
        },
        callback);
}

PersonSchema.statics.findbylist = function(stulist, callback) {
    return this.model('PersonModel').find({userid: {$in:stulist}}, callback);
}


var PersonModel = mongoose.model('PersonModel',PersonSchema,CollectionName);
module.exports=PersonModel;