const  express = require("express")
const  ejs =  require("ejs")
const db = require("./config/config").MongoURL
const mongoose = require("mongoose")

const app = express()

const PORT = process.env.PORT

app.use(express.json())

mongoose.Promise = global.Promise

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.get("/", (req, res) => {
        res.send("happy coding")
    })
    console.log("connected to mongo database")
})
    .catch(err => console.log(err))
   
  
app.listen(PORT, console.log(`app running on port ${PORT}`))
