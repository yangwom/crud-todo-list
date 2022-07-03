import app from './App';
import connection from './model/connection';

const PORT = 3000;

app.listen(PORT, async() => {
	await connection.sync();
});
