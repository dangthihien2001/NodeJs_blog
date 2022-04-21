const newsRouter = require('./news')
function route(app){

    app.get('/',(req,res)=> res.render('home'))
   //định nghĩa tuyến đường cho phương thức là get trên router
    app.get('/search',(req,res)=>{ 
        // console.log(req.query)
        res.render('search')})
    
    app.post('/search',(req,res)=>{ 
        console.log(req.body)
        res.send('')})

    app.use('/news',newsRouter)
}

module.exports = route;
