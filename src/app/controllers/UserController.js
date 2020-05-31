import User from '../models/User';

class UserController {
    async store(req, res) {
        try {
            const { name } = req.body;

            const checkUser = await User.findOne({ name });

            if (checkUser)
                return res.status(401).json({ error: 'User already exists.' });

            if (!name)
                return res.status(401).json({ error: 'Name cannot be empty' });

            await User.create({ name });

            return res.json({ name });
        } catch (err) {
            return res.json({ err });
        }
    }
}

export default new UserController();
