const express = require("express")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.get("/", (req, res) => {
    return res.json({ message: "Happy coding"})
})

app.listen(PORT, console.log(`app running on port ${PORT}`))