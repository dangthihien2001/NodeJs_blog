const Course = require('../models/Course')
const {mutipleMogooseToObject} = require('../../util/mongoose')
class SiteController{  

    // [GET] /
    index(req, res,next){
        Course.find({})
            .then(courses =>
                {
                    res.render('home',
                    {
                        courses: mutipleMogooseToObject(courses)
                    }) 
                })  //truyền biến Courses (key: value) bên view sử dụng  
            .catch(next)
        // res.render('home');
    }

    //[GET] /search
    search(req,res){
        res.render('search');  
    }
}

module.exports = new SiteController; //khởi tạo controller, tạo một đối tượng của controller và nó exports ra ngoài