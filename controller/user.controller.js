const connection = require('../config/db');

const queryUser = `SELECT * FROM user`

module.exports = {
  getUsers: (req, res) => {
    connection.query(queryUser, (err, data) => {
      if(err) {
        console.log(err)
      } else {
        res.json(data)
      }
    })
  },
  getUsersByID: (req, res) => {
    const id = req.params.id
    connection.query(
      `${queryUser} WHERE user.id = ${id}`,
      (err, data) => {
        if(err) {
          console.log(err)
        } else {
          res.json(data)
        }
      }
    )
  }
}