const bcrpt = require('bcrypt')
const dataUser = require('./../datas/user')
const generate_a_token = require('./../util/generate_a_token')
const generate_r_token = require('./../util/generate_r_token')

const data_token = {}

const login = async (req, res, next) => {
    try {
        const findUser = dataUser.find((item) => item.username === req.body.username)

        if (findUser) {
            const checkValidPassword = await bcrpt.compare(req.body.password, findUser.password)

            if (checkValidPassword) {
                const a_token = generate_a_token(findUser.id)
                req.a_token = a_token
                
                const r_token = generate_r_token(findUser.id)
                req.r_token = r_token
                req.id = findUser.id
                
                add_to_list(r_token, a_token)
                return next()
            } else {
                return res.status(404).json({ message: "wrong password" })
            }
        } else {
            return res.status(404).json({ message: "No user" })
        }

    } catch (error) {
        return res.status(500).json({ code: 500, message: "error" })
    }
}

const add_to_list = (r_token, a_token) => {
    data_token[r_token] = {
        status: "Logged in",
        a_token,
        r_token
    }
}

const convert_password = async (req, res) => {
    try {
        let pass = req.body.password
        bcrpt.genSalt(10, function (err, salt) {
            bcrpt.hash(pass, salt, function (err, hash) {
                // Store hash in your password DB.
                return res.status(201).json({code: 201, hash})
            });
        });
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

module.exports = { login, convert_password, data_token, add_to_list }