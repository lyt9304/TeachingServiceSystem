var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var formidable = require('formidable');
var fs = require('fs');
var PersonModel = require('../../db/group1db/PersonModel');

var tmp={
    userid:"3120",
    username:"admin",
    age:"20",
    major:"计算机科学与技术专业",
    college:"计算机学院",
    title:"教授",
    tel:"18868101234",
    email:"18868101234@163.com"
};

router.get('/', function(req, res,next) {
    res.render('info/personmodify',{
        name: '程序员', 
        image: 'images/avatars/avatar3.jpg',
        total_a:'12',
        a:'2,3,1,2,3,1,0',
        total_b:'24',
        b:'4,6,2,4,6,2,0',
        total_credits:'24',
        credits:'4,6,2,4,6,2,0',

        useridErr: "",
        userNameErr: "",
        passwordErr: "",
        emailerr: "",
        ageerr: "",
        telerr: "",
        data: tmp,
        modifyresult:'请提交表单'
    });
});

router.post('/',function(req,res,next){
    console.log("post:personmodify");
    
    var form = new formidable.IncomingForm(); //创建上传表单
    form.encoding = 'utf-8';		//设置编辑
    form.uploadDir = 'public/images';//设置上传目录
    form.keepExtensions = true;	 // 保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;//文件大小
    form.parse(req, function(err, fields, files)
    {
        var useridErr = '';
        var userNameErr = '';
        var passwordErr = '';
        var emailerr = '';
        var ageerr = '';
        var telerr ='';
        var doc = {
            photo: b64data,
            userid  : fields.userid,
            username : fields.username,
            userpassword : fields.password1,
            status : fields.status,
            sex : fields.sex,
            age : fields.age,
            major : fields.major,
            college : fields.college,
            title : fields.title,
            tel : fields.tel,
            email : fields.email,
        };

        if(doc.userid == ''){useridErr = '学工号不能为空!';}
        for(var i = 0, userid = doc.userid; i < userid.length; i++){
            if(userid.charAt(i)>'9' || userid.charAt(i) < '0'){
                useridErr = 'ID illegal!';
                break;
            }
        }

        //userNameErr
        if(doc.username == ''){userNameErr = '姓名不能为空!';}

        //paswwordErr
        if(fields.password1 == ""){passwordErr = '密码不能为空!';}
        if(fields.password1 != fields.password2){passwordErr = 'password different!';}


        //emailerr
        var email = doc.email;
        var index = email.indexOf('@');
        console.log("index : "+index);
        console.log("indexOf : "+email.indexOf('@',index+1));
        if(index == -1 || index == 0){emailerr = 'format incorrect!';}
        else if(email.indexOf('@',index+1) != -1){emailerr = 'too much @!';}//more than one @
        else if(email.indexOf('.',index+1) == -1 || email.indexOf('.',index+1) == index + 1){emailerr = 'incorrect .';}

        //aggerr
        if(doc.age == ''){ageerr = '年龄不能为空!';}
        for(var i = 0, age = doc.age; i < age.length; i++){
            if(age.charAt(i)>'9' || age.charAt(i) < '0'){
                ageerr = '年龄非整数!';
                break;
            }
        }
        if(ageerr == ''){
            var age = doc.age;
            if(age > '120' && age.length >= 3 || age.length ==1 && age <'5'){ageerr = '年龄不合理!';}
        }


        //telerr
        if(doc.tel == ''){telerr = '电话不能为空!';}
        for(var i = 0, tel = doc.tel; i < tel.length; i++){
            if(tel.charAt(i) > '9' || tel.charAt(i) < '0'){
                telerr = '电话非整数!';
                break;
            }
        }

        if(userNameErr != '' || emailerr != '' || ageerr != '' || telerr != '' || passwordErr != '' || useridErr != ''){
            res.render('info/personmodify',{
                name: '程序员',
                image: 'images/avatars/avatar3.jpg',
                total_a:'12',
                a:'2,3,1,2,3,1,0',
                total_b:'24',
                b:'4,6,2,4,6,2,0',
                total_credits:'24',
                credits:'4,6,2,4,6,2,0',

                useridErr: useridErr,
                userNameErr: userNameErr,
                passwordErr: passwordErr,
                emailerr: emailerr,
                ageerr: ageerr,
                telerr: telerr,

                data: doc,
                modifyresult:'表单解析失败'

            });
            fs.unlink(files.fulAvatar.path);
            return;
        }
        else{
            if (err) {
                res.locals.error = err;
                console.log("Err:formidable.parse fail");
                res.render('info/personmodify',{
                    name: '程序员',
                    image: 'images/avatars/avatar3.jpg',
                    total_a:'12',
                    a:'2,3,1,2,3,1,0',
                    total_b:'24',
                    b:'4,6,2,4,6,2,0',
                    total_credits:'24',
                    credits:'4,6,2,4,6,2,0',


                    useridErr: useridErr,
                    userNameErr: userNameErr,
                    passwordErr: passwordErr,
                    emailerr: emailerr,
                    ageerr: ageerr,
                    telerr: telerr,
                    data: doc,
                    modifyresult:'表单解析失败'
                });
                fs.unlink(files.fulAvatar.path);
                return;
            }
            var extName = '';//后缀名
            switch (files.fulAvatar.type)
            {
                case 'image/pjpeg':				extName = 'jpg';break;
                case 'image/jpeg':				extName = 'jpg';break;
                case 'image/png':				extName = 'png';break;
                case 'image/x-png':				extName = 'png';break;
            }
            if(extName.length == 0){
                console.log("Err:invalid image type");
                res.render('info/personmodify',{
                    name: '程序员',
                    image: 'images/avatars/avatar3.jpg',
                    total_a:'12',
                    a:'2,3,1,2,3,1,0',
                    total_b:'24',
                    b:'4,6,2,4,6,2,0',
                    total_credits:'24',
                    credits:'4,6,2,4,6,2,0',

                    useridErr: useridErr,
                    userNameErr: userNameErr,
                    passwordErr: passwordErr,
                    emailerr: emailerr,
                    ageerr: ageerr,
                    telerr: telerr,
                    data: doc,
                    modifyresult:'只支持png和jpg格式图片'
                });
                fs.unlink(files.fulAvatar.path);
                return;
            }
            //console.log(files.fulAvatar);
            if(files.fulAvatar.size > 1000000){
                console.log("Err:Too large image ");
                res.render('info/personmodify',{
                    name: '程序员',
                    image: 'images/avatars/avatar3.jpg',
                    total_a:'12',
                    a:'2,3,1,2,3,1,0',
                    total_b:'24',
                    b:'4,6,2,4,6,2,0',
                    total_credits:'24',
                    credits:'4,6,2,4,6,2,0',

                    useridErr: useridErr,
                    userNameErr: userNameErr,
                    passwordErr: passwordErr,
                    emailerr: emailerr,
                    ageerr: ageerr,
                    telerr: telerr,
                    data: doc,
                    modifyresult:'图片大小不能超过1000,000'
                });
                fs.unlink(files.fulAvatar.path);
                return;
            }
            var data = fs.readFileSync(files.fulAvatar.path);
            var b64data="data:image/gif;base64,"+data.toString('base64');
            fs.unlink(files.fulAvatar.path);
            var doc = {
                photo: b64data,
                userid : fields.userid,
                username : fields.username,
                status : fields.status,
                sex : fields.sex,
                age : fields.age,
                major : fields.major,
                college : fields.college,
                title : fields.title,
                tel : fields.tel,
                email : fields.email
            };
            console.log("doc:"+doc.username);
            PersonModel.findbyid(fields.userid, function(error, user){
                if(error){
                    console.log('find error!'+error);
                }
                else if (!user | user == ''){
                    return res.render('info/personmodify',{
                        name: '程序员', 
                        image: 'images/avatars/avatar3.jpg',
                        total_a:'12',
                        a:'2,3,1,2,3,1,0',
                        total_b:'24',
                        b:'4,6,2,4,6,2,0',
                        total_credits:'24',
                        credits:'4,6,2,4,6,2,0',

                        useridErr: useridErr,
                        userNameErr: userNameErr,
                        passwordErr: passwordErr,
                        emailerr: emailerr,
                        ageerr: ageerr,
                        telerr: telerr,
                        data: doc,
                        modifyresult:'学工号不存在'
                    });
                }
                else{
                    PersonModel.modifybyid(doc,function(err,data){
                        if(err){
                            console.log("modify err : "+err);
                            res.render('info/personmodify',{
                                name: '程序员',
                                image: 'images/avatars/avatar3.jpg',
                                total_a:'12',
                                a:'2,3,1,2,3,1,0',
                                total_b:'24',
                                b:'4,6,2,4,6,2,0',
                                total_credits:'24',
                                credits:'4,6,2,4,6,2,0',

                                useridErr: useridErr,
                                userNameErr: userNameErr,
                                passwordErr: passwordErr,
                                emailerr: emailerr,
                                ageerr: ageerr,
                                telerr: telerr,
                                data: doc,
                                modifyresult:'用户修改失败！'
                            })
                        }
                        else{
                            console.log('data'+data);
                            console.log('Update Model OK!');
                            console.log(doc.username);
                            res.render('info/personmodify',{
                                name: '程序员',
                                image: 'images/avatars/avatar3.jpg',
                                total_a:'12',
                                a:'2,3,1,2,3,1,0',
                                total_b:'24',
                                b:'4,6,2,4,6,2,0',
                                total_credits:'24',
                                credits:'4,6,2,4,6,2,0',

                                useridErr: useridErr,
                                userNameErr: userNameErr,
                                passwordErr: passwordErr,
                                emailerr: emailerr,
                                ageerr: ageerr,
                                telerr: telerr,
                                data: doc,
                                modifyresult:'用户修改成功！'
                            });
                        }
                    });
                }
            });
        }
    });
});

module.exports = router;