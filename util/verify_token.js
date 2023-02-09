const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const verify_token = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            console.log(token)
            return res.status(403).send('A token is required for authentication');
        }

        const decoded = jwt.verify(token, process.env.ACCES_T);
        req.decoded = decoded;
        return next()
    } catch (error) {
        return res.json({ code: 500, message: error })
    }
}

module.exports = verify_token