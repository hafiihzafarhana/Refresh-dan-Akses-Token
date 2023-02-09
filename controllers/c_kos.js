const dataKos = require('./../datas/kos')

const getAllBook = async (req, res) => {
    try {
        return res.json({code: 201, message: dataKos})
    } catch (error) {
        return res.json({code: 404, message: error})
    }
}

module.exports = { getAllBook }