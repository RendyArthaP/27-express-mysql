const connection = require('../config/db')

const queryProduct = `SELECT * FROM product`

module.exports = {
  getProduct: (req, res) => {
    connection.query(queryProduct, (err, data) => {
      if(err) {
        console.log(err)
      } else {
        res.json(data)
      }
    })
  },

  getProductByID: (req, res) => {
    const id = req.params.id
    connection.query(
      `${queryProduct} WHERE product.id = ${id}`,
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