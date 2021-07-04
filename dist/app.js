"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
var domains_1 = require("./domains");
var cors_1 = __importDefault(require("cors"));
// import jwt from "jsonwebtoken";
dotenv_1.default.config();
var app = express_1.default();
// var corsOptions = {
//     origin: "*",
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//     credentials: false,
// };
// app.use(cors(corsOptions));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.get("/", graphql_playground_middleware_express_1.default({ endpoint: "/graphql" }));
var server = require("http").createServer(app);
var io = require("socket.io")(server);
app.listen(process.env.PORT, function () {
    console.log("appsss is running ssson PORT: " + process.env.PORT);
    domains_1.initializeApolloServer(app);
});
// const server = http.createServer(app);
// const io = new Server(server, { pingTimeout: 30000 });
// // console.log("IO:", io);
io.on("connection", function (socket) {
    console.log("IM RUNNING");
    socket.on("dataFromClient", function (data) {
        console.log("Data:", data);
        try {
        }
        catch (e) {
            console.log("Not a valid token for chat.", e);
        }
    });
});
//# sourceMappingURL=app.js.map