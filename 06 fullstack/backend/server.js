// starting the server and connecting to DB

require("dotenv").config();
const app = require("./src/app")
const connectToDb = require("./src/config/db")

app.listen(process.env.PORT,async () => {
    console.log(`server is running on PORT ${process.env.PORT}`)
    await connectToDb()
})