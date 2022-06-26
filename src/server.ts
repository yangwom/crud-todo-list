import dotenv from 'dotenv';
import app from './App';

dotenv.config();

const { PORT } = process.env || 3000;

app.listen(PORT);
