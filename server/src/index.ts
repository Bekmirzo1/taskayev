import '@dotenvx/dotenvx';
import express from 'express';
import cors from 'cors';
import sequelize from '@/db';
import router from './router';
// import multer from 'multer'
import errorMiddleware from './middleware/errorMiddleware';
import fileUpload from 'express-fileupload';

const app = express();
const PORT = process.env.MY_PORT || 3000;

app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(express.static(process.env.MY_STATIC_FILES))
// app.use(multer().any())
app.use('/api', router)


app.use(errorMiddleware)
const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Сервер запустился в ${PORT} порту`))
  } catch (e) {
    console.log(e);
  }
};

start()


/* app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
}) */