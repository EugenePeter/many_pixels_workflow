"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeApolloServer = void 0;
var apollo_server_express_1 = require("apollo-server-express");
var apollo_server_express_2 = require("apollo-server-express");
var resolvers_1 = require("./artwork/resolvers");
var typeDefs_1 = require("./artwork/typeDefs");
var unsplash_api_1 = require("../utils/unsplash.api");
// const expressPlayground = require("graphql-playground-middleware-express").default;
var defaultTypeDefs = apollo_server_express_2.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query {\n        _empty: String\n    }\n"], ["\n    type Query {\n        _empty: String\n    }\n"])));
var initializeApolloServer = function (app) {
    console.log("INITIALIZING APOLLO SERVER");
    var apolloServer = new apollo_server_express_1.ApolloServer({
        typeDefs: [defaultTypeDefs, typeDefs_1.artist_type_Defs],
        resolvers: [resolvers_1.artist_resolvers],
        context: {
            all_photos: unsplash_api_1.getAllPhotos,
        },
    });
    apolloServer.applyMiddleware({ app: app });
};
exports.initializeApolloServer = initializeApolloServer;
var templateObject_1;
//# sourceMappingURL=index.js.map