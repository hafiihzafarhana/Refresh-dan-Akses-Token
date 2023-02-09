const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const { data_token, add_to_list } = require('./../controllers/c_user')
const generate_a_token = require('./generate_a_token')

dotenv.config()

const refresh_token = async (req, res, next) => {
    try {
        const r_token = req.body.r_token
        const id = req.body.id
        console.log(r_token, id)
        console.log(data_token)
        if (r_token && r_token in data_token) {
            const decoded = jwt.verify(r_token, process.env.REFRESH_T)
            const a_token = generate_a_token(id)
            req.a_token = a_token

            add_to_list(r_token, a_token)

            return next()
        } else{
            return res.status(404).json({ code: 404, message: "No token" })
        }
    } catch (error) {
        return res.status(500).json({ code: 500, message: error })
    }
}

module.exports = refresh_token