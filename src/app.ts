import express from "express";
import dotenv from "dotenv";
import expressPlayground from "graphql-playground-middleware-express";
import { initializeApolloServer } from "./domains";
// import { Server } from "socket.io";
import http from "http";
import cors from "cors";
// import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
// var corsOptions = {
//     origin: "*",
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//     credentials: false,
// };
// app.use(cors(corsOptions));

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", expressPlayground({ endpoint: "/graphql" }));

const server = require("http").createServer(app);
const io = require("socket.io")(server);
app.listen(process.env.PORT, () => {
    console.log(`appsss is running ssson PORT: ${process.env.PORT}`);
    initializeApolloServer(app);
});

// const server = http.createServer(app);

// const io = new Server(server, { pingTimeout: 30000 });
// // console.log("IO:", io);

io.on("connection", (socket: any) => {
    console.log("IM RUNNING");
    socket.on("dataFromClient", (data: any) => {
        console.log("Data:", data);
        try {
        } catch (e) {
            console.log("Not a valid token for chat.", e);
        }
    });
});
