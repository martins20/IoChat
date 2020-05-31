import Room from '../models/Room';
import User from '../models/User';

class RoomController {
    async index(req, res) {
        try {
            const rooms = await Room.findAll();

            return res.json(rooms);
        } catch (err) {
            return res.json({ err });
        }
    }

    async store(req, res) {
        try {
            const { io } = req;
            const { participants } = req.body;

            const room = await Room.create({ participants });

            return res.json(room);
        } catch (err) {
            return res.json({ err });
        }
    }

    async update(req, res) {
        try {
            const { io } = req;
            const { senderId, message } = req.body;
            const { roomId } = req.params;

            const generatedId = String(Math.random());

            const sender = await User.findByPk(senderId);

            const room = await Room.findByPk(roomId);

            const id = generatedId;

            const messages = await room.update({
                messages: [
                    ...room.messages,
                    {
                        id,
                        sender,
                        message,
                    },
                ],
            });

            io.to(roomId).emit('message', messages.messages);

            return res.json(messages);
        } catch (err) {
            return res.json({ err });
        }
    }

    async show(req, res) {
        const { io } = req;
        const { roomId } = req.params;

        const room = await Room.findByPk(roomId);

        io.emit('create room', { roomId });

        return res.json(room);
    }
}

export default new RoomController();
