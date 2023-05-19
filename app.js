const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express(); //подключение к серверу

app.use('/api/auth', require('./routes/auth.routes'))//модуль авторизации

app.use(express.json({ extended: true }))

const PORT = config.get('port') || 5000 //метод get для того, чтобы получить строчку config default

async function start() {
  try {
    await mongoose.connect(config.get('mongoUrl'), { //первый параметр - url адресс по которому мы будем добавлять базу данных
      useNewUrlParser: true, //параметры mongoose для успешной работы connect 
      useUnifiedTopology: true
      //useCreateIndex: true
    })

    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`)) //первый параметр - порт, второй - колбэк

  } catch (e) {
    console.log('Server Error', e.message)//если ошибка
    process.exit(1)
  }
} //вызываем метод connect для подключения к базе данных

start();

