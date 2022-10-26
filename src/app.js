const express = require("express");
const app = express();

const mainRoutes = require("./routes/mainRoutes");

app.set("views engine", "ejs");

app.use("../public");

app.use("/", mainRoutes);

const port = process.env.PORT || 9090;
app.listen(port, () => console.log("Servidor iniciado exitosamente en: http://127.0.0.1:" + port));