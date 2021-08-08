"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var app = express_1.default();
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
    credentials: false,
};
app.use(cors_1.default(corsOptions));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send("HELLO THERE");
});
var server = require("http").createServer(app);
var io = require("socket.io")(server, {});
server.listen(process.env.PORT, function () {
    console.log("apps is running on PORT: " + process.env.PORT);
});
io.on("connection", function (socket) {
    console.log("IM RUNNING:", socket.id);
    socket.emit("query", {
        message: "this reply is from the server, can you read it? ",
    });
    socket.on("query", function (data) {
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
        }
        catch (e) {
            console.log("Not a valid token for chat.", e);
        }
    });
});
//# sourceMappingURL=app.js.map