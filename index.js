const express = require("express")
const logger = require("morgan")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const productRouter = require("./routes/product")
const dotenv = require("dotenv")

const port = process.env.PORT || 3000

const app = express()

// Middleware
app.use(cors())
app.use(logger("dev"))
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ limit: "10mb", extended: true }))
app.use(cookieParser())

// Router
app.use("/api/product", productRouter)

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
