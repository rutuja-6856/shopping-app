
import express from "express"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import { UserRouter } from "./routes/user.js"
import orderRoutes from "./routes/Order.js";
import cors from "cors"

const KEY = "JwtTokenKey"

const app = express()
const port = 9090

app.use(express.json())

app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true
}))
app.use("/order", orderRoutes);

app.use(cookieParser())

const conn = mongoose.connect('mongodb://127.0.0.1:27017/E-Commerce-App');

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use("/auth", UserRouter)


app.listen(port, () => {
  console.log(`E-Commerce app listening on port ${port}`)
})