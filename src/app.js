import express from 'express';
import cors from 'cors';
import io from 'socket.io';
import http from 'http';

import routes from './routes';

import './database';

class App {
    constructor() {
        this.app = express();
        this.server = http.Server(this.app);
        this.io = io(this.server);

        this.socket();

        this.middlewares();
        this.routes();
    }

    socket() {
        this.io.on('connection', (socket) => {
            console.log(`User ${socket.id} is connected.`);

            socket.on('create room', ({ roomId }) => {
                socket.join(roomId);
            });

            socket.on('disconect', () => {
                console.log(`User ${socket.id} is disconnected.`);
            });
        });
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());

        this.app.use((req, res, next) => {
            req.io = this.io;

            next();
        });
    }

    routes() {
        this.app.use(routes);
    }
}

export default new App().server;
