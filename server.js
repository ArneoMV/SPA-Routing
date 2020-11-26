// const { Console } = require("console");
const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// koji god path pošaljem serveru svi ce se uvijek vratiti na index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 5070, () => console.log("Server running..."));