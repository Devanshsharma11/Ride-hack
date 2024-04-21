const express=require("express");
const app= express();
const path = require("path");
const pg = require("pg");
app.use(express.static(path.join(__dirname, "public")));

app.listen("3000",function()
{
    console.log("server done");
})

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});



