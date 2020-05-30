import express from 'express';
import cors from 'cors';
import io from 'socket.io';
import http from 'http';

import routes from './routes';

class App {
    constructor() {
        this.app = express();
        this.server = http.Server(this.app);
        this.io = io(this.server);

        this.middlewares();
        this.routes();
    }

    socket() {
        this.io.on('connection', (socket) => {
            console.log(`User ${socket.id} is connected`);
        });
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(routes);
    }
}

export default new App().server;
