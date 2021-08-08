import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";

dotenv.config();

const app = express();
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: false,
};
app.use(cors(corsOptions));

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HELLO THERE");
});

const server = require("http").createServer(app);
const io = require("socket.io")(server, {});
server.listen(process.env.PORT, () => {
    console.log(`apps is running on PORT: ${process.env.PORT}`);
});

io.on("connection", (socket: any) => {
    console.log("IM RUNNING:", socket.id);
    socket.emit("query", {
        message: "this reply is from the server, can you read it? ",
    });
    socket.on("query", (data: any) => {
        console.log("Data:", data);
        try {
            socket.emit("query_response", {
                results: [
                    {
                        name: "Jennifer my love",
                        family_name: "Rayoso",
                    },
                    {
                        name: "Eugene",
                        family_name: "Maestrado",
                    },
                ],
            });
        } catch (e) {
            console.log("Not a valid token for chat.", e);
        }
    });
});
