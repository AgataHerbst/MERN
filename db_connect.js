const config = require('config');
const mongoose = require('mongoose');



async function st() {
  const res = await mongoose.connect(config.get('mongoUrl'), { //первый параметр - url адресс по которому мы будем добавлять базу данных
    useNewUrlParser: true, //параметры mongoose для успешной работы connect 
    useUnifiedTopology: true
    //useCreateIndex: true
  });
  console.log(res);
}
st();



