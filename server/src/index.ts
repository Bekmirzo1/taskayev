import '@dotenvx/dotenvx';
import express from 'express';
import cors from 'cors';
import sequelize from '@/db';
import router from './router';
import errorMiddleware from './middleware/errorMiddleware';

const app = express();
const PORT = process.env.MY_PORT || 3000;
app.use(cors())
app.use(express.json())
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