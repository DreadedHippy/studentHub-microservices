import express from 'express';
import cors from 'cors';
import mailRoutes from './routes/mail.js'
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json()); //Body Parser
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.use('/api/mail', mailRoutes)

export default app