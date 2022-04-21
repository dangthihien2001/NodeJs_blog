const express = require('express'); // gọi module express để sử dụng
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express(); // xay nha - tao dich vu host
const port = process.env.PORT || 3000; //bao rang dich vu se su dung port 5000
const path = require('path');
const { resolveSoa } = require('dns');

//HTTP Logger
// app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public'))) //cấu hình để sử dụng thư mục public 
app.listen(port, () => {
    console.log('Sever running ...');
});

app.engine('hbs', exphbs.engine({
    extname: '.hbs'
}));   //tạo ra engine
app.set('view engine', 'hbs');   //sử dụng view engine
app.set('views', path.join(__dirname, 'resource/views')); // ', ' mặc định nó sẽ chuyển thành trong Window sẽ là 'resources\\views' cho mình
// app.get('/',(req,res)=> res.send('Hello world'))
app.get('/',(req,res)=> res.render('home'))
app.get('/news',(req,res)=> res.render('news'))

