/**
* Created by Gnnng on 5/30/15.
*/
var router = require('express').Router();
var modelPath = '../../db/group1db/';
var debug = require('debug')('resource');
var Course = require(modelPath + 'CourseModel');
var Person = require(modelPath + 'PersonModel');
var homeworkModel = require("../../db/resource/homework");
var File = require("./basicfileop");
var Tree = require('./basictreeop');
var fileTree = require("../../db/resource/pan");

/*
  functions
*/
function getCourseList(userid, callback) {
  Person.findbyid(userid, function (err, user) {
    debug('user is ' + user);
    var cstlist = user[0].cstlist;
    debug('cstlist is ' + cstlist);
    Course.findbylist(cstlist, function (err, _courseList) {
      var courseList = _courseList ? _courseList : [];
      debug(courseList);
      callback(err, courseList);
    });
  });
}


function isValidCourseID(req, res, next) {
  if (!('cid' in req.query)) {
    // has no query of cid, default access at first course
    req.query.cid = encodeURIComponent(req.session.courseList[0]._id);
  } else {
    //has a query of cid, then check validation
    debug(JSON.stringify(req.session.courseList));
    var cList = req.session.courseList;
    var in_flag = false;
    for (var i = 0; i < cList.length; i++) {
      if (req.query.cid === cList[i]._id) {
        in_flag = true;
        break;
      }
    }
    if (!in_flag)
      next(Error("Invalid course id"));
  }

  // finish and next
  next();
}

function cache_courseList(req, res, next) {
  debug('cache_courseList');
  if ('courseList' in req.session) {
    next();
  } else {
    getCourseList(req.session.user.userid, function(err, courseList) {
      if (err)
        next(err);
      else {
        //debug(courseList);
        req.session.courseList = courseList;
        next();
      }
    })
  }
}

function cache_slide_course_data(req, res, next) {
  debug('cache_slide_course_data');
  if (!('slide_course' in req.session)) {
    var arr = [];
    debug('arr length is ' + arr.length);
    for(var i = 0; i < req.session.courseList.length; i++) {
      var c = req.session.courseList[i];
      debug('arr at ' + i + ' is ' + c);
      arr.push({
        courseid: c._id,
        coursename: c.coursename
      });
    }
    debug('arr length is ' + arr.length);
    req.session.slide_course = {
      courses: arr
    };
    debug('slide_course is ' + JSON.stringify(req.session.slide_course));
  }
  next();
}

/*
  routes
*/

router.use(
  function cache_courseList(req, res, next) {
    debug('cache_courseList');
    if ('courseList' in req.session) {
      next();
    } else {
      getCourseList(req.session.user.userid, function (err, courseList) {
        if (err)
          next(err);
        else {
          //debug(courseList);
          req.session.courseList = courseList;
          next();
        }
      })
    }
  },
  function cache_slide_course_data(req, res, next) {
    debug('cache_slide_course_data');
    if (!('slide_course' in req.session)) {
      var arr = [];
      debug('arr length is ' + arr.length);
      for (var i = 0; i < req.session.courseList.length; i++) {
        var c = req.session.courseList[i];
        debug('arr at ' + i + ' is ' + c);
        arr.push({
          courseid: c._id,
          coursename: c.coursename
        });
      }
      debug('arr length is ' + arr.length);
      req.session.slide_course = {
        courses: arr
      };
      debug('slide_course is ' + JSON.stringify(req.session.slide_course));
    }
    next();
  }
  );

router.use(cache_courseList, cache_slide_course_data);


router.get('/', function (req, res, next) {
  res.redirect('/resource/course/data');
});

router.get('/data', function (req, res, next) {
  var render_data = {
    current_cid: decodeURIComponent(req.query.cid),
    slide_course: req.session.slide_course,
    path_prefix: 'data'
  };
//  console.log(req.query.cid);
  console.log(req.session.slide_course);
  var cid = req.session.slide_course.courses[0].courseid;
  console.log(cid);
  if (req.query.cid) {
    cid = req.query.cid;
    req.session.nowcid = cid;
  }
  fileTree.findbyuser(cid, function(err, resu) {
    console.log("in findbyuser");
    if (err) {
      console.log("in err");
      console.log(err);
    } else {
      console.log(resu);
      req.session.ctreeP = resu[0].tree;
      console.log(req.session.ctreeP);
      var nowUserId = req.session.user.userid;
      console.log("ok");
      fileTree.findbyuser(nowUserId, function(err, result) {
        console.log("in findbyuser");
        if (err) {
          console.log("in err");
          console.log(err);
        } else {
          console.log("before render");
          req.session.treeP = result[0].tree;
          render_data.cfileTree = req.session.ctreeP;
          render_data.fileTree = req.session.treeP;
          debug(render_data);
          res.render('resource/course_data', render_data);
        }  
      });   
    }
  });
});
router.post('/newfile',function(req,res,next){
  console.log('coursenewfile');
  console.log(req.body.fromUrl);
  console.log(req.body.toUrl);
  var spurl = req.body.fromUrl.split('\.');
  var filename;
  var furl="";
  spurl.forEach(function(node, index){
    console.log(node,index);
    if (spurl.length == index) {
      filename = node;
      Tree.move(req.body.furl, filename, req.body.toUrl, req.session.treeP, req.session.ctreeP, 0, function() {
        var newdata = {
          uid : req.session.nowcid,
          tree : req.session.ctreeP
        };
        fileTree.updatetree(req.session.nowcid, newdata, function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log(req.session.ctreeP);
            res.json({code:200,newTree: req.session.ctreeP});
          }
        });
      });
    } else {
      furl=furl+"."+node;
    }
  });
});
router.get('/info', isValidCourseID, function (req, res, next) {
  var render_data = {
    current_cid: decodeURIComponent(req.query.cid),
    slide_course: req.session.slide_course,
    path_prefix: 'info'
  };

  res.render('resource/course_info', render_data);
});

router.get('/homework/upload', function (req, res, next) {
  var html = '<form action="/resource/course/homework/upload?cid=g1&hw=hw1"enctype="multipart/form-data" method="post"> ' +
    '<h1> Upload your file </h1> ' +
    'Please specify a file, or a set of files:<br> ' +
    '<input type="file" name="file" size="40" multiple="multiple">  ' +
    '<div> <input type="submit" > </div> </form>';
  res.send(html);
  res.end();
});

/*

  file upload api

*/
router.get('/homework/insertdemo', function (req, res, next) {
  homeworkModel.insertdemo(function (error, doc) {
    console.log(doc);
  });
});

router.get('/homework/download', function(req,res,next){
  var fileid = decodeURIComponent(req.query.fid);
  var filename = decodeURIComponent(req.query.fname);
  console.log(fileid);
  console.log(filename);
  File.dowloadbyid(fileid,filename,req,res,next,function (){
    res.redirect('/resource/course');
  });
});

router.post('/homework/upload', function (req, res, next) {
  var cid = decodeURIComponent(req.query.cid);
  var homework = decodeURIComponent(req.query.hw);
  File.upload(req, function (fileinfo) {
    console.log(fileinfo);
    var file = {
      stid: req.session.user.userid,
      filename: fileinfo.name,
      contentType: fileinfo.options.content_type,
      id: fileinfo.id,
      uploadtime : new Date()
    };
    console.log("file");
    console.log(file);
    homeworkModel.findbycourseid(cid, function (error, result) {
      if (error) {
        console.log(error);
      } else {
        var homeworkList = result[0].homeworklist;
        for (var i = 0; i < homeworkList.length; i++) {
          if (homeworkList[i].homework == homework) {
            homeworkList[i].uploadfile.push(file);
            break;
          }
        };
        homeworkModel.updatehw(cid, homeworkList, function (error, doc) {
          console.log('update');
          console.log(doc);
          if (error) {
            console.log(error);
          } else {
            res.redirect('/resource/course/data');
          }
        });
      }
    });
  });
});

router.get('/homework/', isValidCourseID, function (req, res, next) {
  var cid = decodeURIComponent(req.query.cid);
  var hw = decodeURIComponent(req.query.hw);
  Person.findbyid(req.session.user.userid, function (err, user) {
    if (!('hw' in req.query)) {
      homeworkModel.findbycourseid(cid, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          var homeworkList = result[0].homeworklist;
          var render_data = {
            homeworkLisr: homeworkList,
            current_cid: decodeURIComponent(req.query.cid),
            slide_course: req.session.slide_course,
            path_prefix: 'homework'
          };
          res.render('resource/course_homework', render_data);
        }
      });
    } else {
      homeworkModel.findbycourseid(cid, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          var homeworkList = result[0].homeworklist;
          var filelist = [];
          for (var i = 0; i < homeworkList.length; i++) {
            if (homeworkList[i].homework == hw) {
              var thisuploadfile = homeworkList[i].uploadfile;
              if (user.status == '学生') {
                for (var j = 0; j < thisuploadfile.length; j++) {
                  if (thisuploadfile[j].stid == user.userid) {
                    filelist.push(thisuploadfile[i]);
                  }
                }
              } else {
                filelist = thisuploadfile;
              }
            }
          }
          var render_data = {
            homeworkname: hw,
            filelist: filelist,
            current_cid: decodeURIComponent(req.query.cid),
            slide_course: req.session.slide_course,
            path_prefix: 'homework'
          };
          res.render('resource/course_homework', render_data);
        }
      });
    }
  });
});

router.get('/feedback', function (req, res, next) {
  var render_data = {
    current_cid: decodeURIComponent(req.query.cid),
    slide_course: req.session.slide_course,
    path_prefix: 'feedback'
  };

  res.render('resource/course_feedback', render_data);

});


/*
  exports
*/
exports.router = router;

exports.getCourseList = getCourseList;
exports.cache_courseList = cache_courseList;
exports.cache_slide_course_data = cache_slide_course_data;