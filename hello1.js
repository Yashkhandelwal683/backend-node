// const http= require("http");
// const myserver= http.createServer((req,res)=>{
//     //routing
//     // if(req.url==='/home'){
//     //     res.writeHead(200,{'content-type':'text/html'});
//     //     res.end('<h1> welcome to home page </h1>');
//     // }
//     // else if(req.url==='/about'){
//     //     res.writeHead(200,{'content-type':'text/html'});
//     //     res.end('<h1> welcome to about page </h1>');
//     // }
//     // res.writeHead(200,{'content-type':'text/html'});
//     // res.end('<h1> welcome to our website </h1>');
//     // // send json file
//     const server =http.createServer((req,res)=>{
//         res.writeHead(200,{'content-type':'application/json'});
//         res.end(JSON.stringify({message:'Hello World!'}));
// });
// myserver.listen (3000,()=> console.log("server started"));});





// Post by Akash Gupta
// Akash Gupta
// Created 2:22 PM2:22 PM
// Task -2: Create an HTTP server using the Node.js http module that runs on port 3000 and handles the following GET routes:


// • / → Return a plain text welcome message
// • /about → Return a simple HTML response
// • /user → Read name and age from query parameters and return a JSON response

// Rules to Follow:


// • Set proper Content-Type headers for text, HTML, and JSON
// • Use JSON.stringify() when sending JSON data
// • Return 404 Page Not Found for invalid routes
// • Use only the Node.js http module


const http=require("http");

const url = require('url');

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("welcome to our website");
    }
    else if(req.url==="/about"){
        res.writeHead(200,{'content-type':'text/html'});
        res.end("<h1> welcome to about page </h1>");
    }
    else if (pathname === "/user") {
        const name = query.name;
        const age = query.age;

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            message: `Hello ${name}, you are ${age} years old!`
        }));
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.end("404 Page Not Found");
    }
});

server.listen(3000,()=> console.log("server started"));