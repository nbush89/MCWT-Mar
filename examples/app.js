"use strict";
const http = require("http");
const randomFacts = [
    "I can solve a rubiks cube",
    "I launched an 8 foot tall model rocket",
    "My favorite soda is Squirt or Mountain Dew",
    "I have worked with AWS for 3 years",
    "I fly a drone for fun",
    "I have been an instructor at Grand Circus for 1.5 years",
    "I can do a single handed clap"
];
http.createServer((req, res) => {
  res.writeHead(200, {"Content-type": "text/plain"});
  const randomIndex = Math.floor(Math.random() * (randomFacts.length))
  res.write(randomFacts[randomIndex]);
  res.end();
}).listen(80);