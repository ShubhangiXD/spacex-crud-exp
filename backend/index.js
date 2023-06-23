const http = require("http");
const cors = require("cors");
const routes = require ("./Routes/routes");
console.log("hello(outside server)")
const PORT = 8000 || process.env.PORT;
/* let data = [{
    name: "Shubhangi",
    age: 20,
},
{
    name: "Rahul",
    age: 19,
}] */
//using nodejs to create a server but we use expressjs
/* http
    .createServer((request, response) => {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("hello node (on page)");
        response.end();
        console.log("hello node (on terminal)");
    })
    .listen(8000); */

const express = require("express");
const exp = express();
exp.use(cors());
const rocketRouter = require ("./Routes/RocketsRoutes");
exp.use(express.json()); //decrypting the data

exp.get("/", (request, response) => {
    response.status(200).json({
        message: "The port is running."
    });
});

exp.use("/rocket", rocketRouter);

//*retrieving user data
/* exp.get(routes);
exp.post(routes); */
//?adding user data
/* exp.post("/addUserData", (request, response) => {
    console.log(request.body);
    data = [...data, request.body]
    response.status(201).json({
        message: "Data added",
        status: 201,
        data: request.body,
    });
}); */

//!removing user data
/* exp.delete("/user", (request, response) => {
    console.log(request.body);
    data = data.find((el) => el.name !== request.body.name);
    response.status(200).json({
        message: "Data removed",
        status: 200,
        data: request.body,
    });
}); */

/* exp.put("/editUserData", (request, response) => {
    const body = request.body; */
    /* console.log(body); */
/*     const params = request.query;
    const user = data.find((ele) => ele.name === params.name);
    console.log(user);
    user.name = body.name;
    response.status(201).json({
        message: "Data updated",
        status: 201,
    });
}); */


exp.listen(PORT, () => {
    console.log("your server is running on", PORT);
});