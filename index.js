const  express = require("express")
const  ejs =  require("ejs")
require("./config/config")


const app = express()

const PORT = process.env.PORT

app.use(express.json())

app.get("/", (req, res) => {
    res.send("happy coding")
})

app.listen(PORT, console.log(`app running on port ${PORT}`))