import { config } from 'dotenv';
import app from './app';

config();

const port = process.env.APP_PORT;

app.listen(port);
