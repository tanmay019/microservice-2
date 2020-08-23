const fs = require("fs");
const http = require("http");
const path = require("path");
const port = 3099;

// const deployFolder = 'public';
// const cwd = process.cwd();
// const dir = path.join(cwd, deployFolder);
// const index = '/index.html';

console.log("Server started @ port", port);

const server = http.createServer(function (req, res) {
  let url = req.url;

  const ms2 = `
  .::       .:: .::     .::    .:::::::         .::::        .:: ::   .:::::::: .:::::::     .::         .:: .::     .::    .::::::::                
  .: .::   .::: .::  .::   .:: .::    .::     .::    .::   .::    .:: .::       .::    .::    .::       .::  .::  .::   .:: .::               .:::.: 
  .:: .:: . .:: .:: .::        .::    .::   .::        .::  .::       .::       .::    .::     .::     .::   .:: .::        .::              .:    .:
  .::  .::  .:: .:: .::        .: .::       .::        .::    .::     .::::::   .: .::          .::   .::    .:: .::        .::::::   .:::::     .:: 
  .::   .:  .:: .:: .::        .::  .::     .::        .::       .::  .::       .::  .::         .:: .::     .:: .::        .::                .::   
  .::       .:: .::  .::   .:: .::    .::     .::     .::  .::    .:: .::       .::    .::        .::::      .::  .::   .:: .::              .::     
  .::       .:: .::    .::::   .::      .::     .::::        .:: ::   .:::::::: .::      .::       .::       .::    .::::   .::::::::        .:::::::
  `;
  const e404 = `
  .:::::::: .:::::::     .:::::::         .::::      .:::::::                                                  
  .::       .::    .::   .::    .::     .::    .::   .::    .::                .::        .::            .::   
  .::       .::    .::   .::    .::   .::        .:: .::    .::              . .::      .::  .::       . .::   
  .::::::   .: .::       .: .::       .::        .:: .: .::       .:::::    .: .::    .::     .::     .: .::   
  .::       .::  .::     .::  .::     .::        .:: .::  .::             .::  .::    .::      .::  .::  .::   
  .::       .::    .::   .::    .::     .::     .::  .::    .::          .:::: .: .::  .::    .::  .:::: .: .::
  .:::::::: .::      .:: .::      .::     .::::      .::      .::              .::       .:::            .::   
  `;
  // return res.end(`URL is ${url}, or maybe not. Microservice working tho..`);
  // convert it to a 404 page...
  console.log(`log of 'url: ${url}' added @`, new Date());
  if (url.substr(0, 6) === "/log") {
    res.writeHead(200);
    return res.end(ms2);
  }
  res.writeHead(200);
  return res.end(e404);
});

server.listen(port);
