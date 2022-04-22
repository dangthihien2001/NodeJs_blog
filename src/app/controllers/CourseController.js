const Course = require('../models/Course')
const {mongooseToObject} = require('../../util/mongoose')
class CourseController{  

    // [GET] /

    //[GET] /search
    show(req,res,next){
        //findone tìm một bản ghi (key: value)
        Course.findOne({slug: req.params.slug })
            .then( course =>{
                res.render('courses/show',{course: mongooseToObject(course) })
           })
            .catch(next);
         //chọc vô database qua model
    }
}

module.exports = new CourseController; //khởi tạo controller, tạo một đối tượng của controller và nó exports ra ngoài