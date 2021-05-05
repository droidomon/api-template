import express from "express"
import routes from "./routes/index"

const app = express()

app.use(express.json())
app.use(routes)

app.use("*", (req, res)=> {
    res.status(404).json({ success: false, data: [], message: "Page not found!"})
})

export default app