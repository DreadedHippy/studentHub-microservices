import express from 'express';
import cors from 'cors';
import mailRoutes from './routes/mail.js'
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(bodyParser.json()); //Body Parser
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.use('/api/mail', mailRoutes)

export default app