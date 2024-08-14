const express = require("express");
const routes = require("./route/Pizza_item.js");

const app = express();
const PORT = 5001;

app.use(express.json());

app.use("/item", routes);

app.listen(PORT, () => console.log("Server is running at port " + PORT));
