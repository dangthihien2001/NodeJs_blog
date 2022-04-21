class NewsController{  

    // [GET] /news
    index(req, res){
        res.render('news');
    }

    //[GET] /news/:slug/
    show(req,res){
        res.send('News Details');
    }
}

module.exports = new NewsController; //khởi tạo controller, tạo một đối tượng của controller và nó exports ra ngoài