const express = require("express");
const app = express();

app.use(express.urlencoded());

// for the nginx we just are passing to auth0 & say to db stream ONLINE
app.post("/auth", function(req, res) {
    var key = req.body.name;
    console.log(key + "[ONLINE]");
    var channelName = "creedscode"
    if (key == "stonks") {
        // res.status(200).send();
        res.redirect(`rtmp://127.0.0.1/hls-live/${channelName}`);
        return;
    }

    res.status(403).send();
});

// say db stream OFFLINE
app.post("/done", function(req, res) {
    var key = req.body.name;
    console.log(key + " [OFFLINE]");
    res.status(200).send();
    return;
});

// auth for clients that plays this stream
app.post("/play", function(req, res) {
    var key = req.body.name;
    console.log(key + " [watching]");
    console.log(req.header("Bearer"));
    console.log(req);
    console.log("____________________________________________________");
    res.status(200).send();
    return;
});

app.listen(8000, function() { console.log("Ruining Creeds life on port: 8000"); });