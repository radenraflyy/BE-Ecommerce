const Mongoose = require("mongoose")

const productSchema = new Mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    supplier: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    product_location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = Mongoose.model("Product", productSchema)
