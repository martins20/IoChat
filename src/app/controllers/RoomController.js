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
            const { participants } = req.body;

            const room = await Room.create({ participants });

            return res.json(room);
        } catch (err) {
            console.log(err);
            return res.json({ err });
        }
    }

    async update(req, res) {
        try {
            const { senderId, message } = req.body;
            const { roomId } = req.params;

            const sender = await User.findByPk(senderId);

            const room = await Room.findByPk(roomId);

            const messages = await room.update({
                messages: [
                    ...room.messages,
                    {
                        sender,
                        message,
                    },
                ],
            });

            return res.json(messages);
        } catch (err) {
            return res.json({ err });
        }
    }
}

export default new RoomController();
