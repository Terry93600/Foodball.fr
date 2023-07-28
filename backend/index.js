const express = require("express")
const app = express()

require('dotenv').config()

const roleRouter = require('./routes/roleRouter')
const typeEventRouter = require('./routes/typeEventRouter')
const teamRouter = require('./routes/teamRouter')
const userRouter = require('./routes/userRouter')
const restaurantRouter = require('./routes/restaurantRouter')
const eventrouter = require('./routes/eventRouter')
const restaurantEventrouter = require('./routes/restaurantEventRouter')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api/role", roleRouter)
app.use("/api/typeEvent", typeEventRouter)
app.use("/api/team", teamRouter)
app.use("/api/user", userRouter)
app.use("/api/restaurant", restaurantRouter)
app.use("/api/event", eventrouter)
app.use("/api/restaurantEvent", restaurantEventrouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server ....")
})