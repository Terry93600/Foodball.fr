const express = require("express")
const app = express()

require('dotenv').config()

const roleRouter = require('./routes/roleRouter')
const typeEventRouter = require('./routes/typeEventRouter')
const teamRouter = require('./routes/teamRouter')
const userRouter = require('./routes/userRouter')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api/v1/role", roleRouter)
app.use("/api/v1/typeEvent", typeEventRouter)
app.use("/api/v1/team", teamRouter)
app.use("/api/v1/User", userRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server ....")
})