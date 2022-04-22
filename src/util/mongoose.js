module.exports ={
    mutipleMogooseToObject:function(mongoose){  //hàm nhận vào, map qua và toObject được bên trong
        //biến courses là một mảng là nó có một value mới là biến courses tạo từ contrustorcủa mongoose được toObject để trwor về object bình thường
        return mongoose.map(mongoose => mongoose.toObject());
    },
    mongooseToObject:function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose; //nếu có 
    }
};