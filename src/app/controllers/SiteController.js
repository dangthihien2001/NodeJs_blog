class SiteController{  

    // [GET] /
    index(req, res){
        res.render('home');
    }

    //[GET] /search
    search(req,res){
        res.render('search');  
    }
}

module.exports = new SiteController; //khởi tạo controller, tạo một đối tượng của controller và nó exports ra ngoài