const connection = require('../config/db')

const queryOrder = `
  SELECT orders.id, user.user, product.namaProduk as product, product.harga, orders.totalHarga 
  FROM orders 
  JOIN user on orders.userID = user.id
  JOIN product on orders.productID = product.id
` 

module.exports = {
  getOrder: (req, res) => {
    connection.query(queryOrder, (err, data) => {
      if(err) {
        console.log(err)
      } else {
        res.json(data)
      }
    })
  },

  getOrderByID: (req, res) => {
    const id = req.params.id
    connection.query(
      `${queryOrder} WHERE orders.id = ${id}`,
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