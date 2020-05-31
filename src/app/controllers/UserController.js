import User from '../models/User';

class UserController {
    async store(req, res) {
        try {
            const { name } = req.body;

            const user = await User.create({ name });

            return res.json(user);
        } catch (err) {
            return res.json({ err });
        }
    }
}

export default new UserController();
