import app from './App';
import dotenv from 'dotenv';
dotenv.config();

const { PORT } = process.env || 3000

app.listen(PORT, () => console.log('class é muito top'))
