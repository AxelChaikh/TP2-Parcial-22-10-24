import express from "express";
import Router from "./routes/CtaBancaria.route.js";

const app = express();
const PORT = 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/", new Router().start())




// app.get("/", (req, res) => {
//     res.send("Ok!")
// })

app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`)})
app.on("error", (err) => {console.log("Ha ocurrido un error en el servidor: ", err)})