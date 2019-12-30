"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Create Express server
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(morgan_1.default("dev"));
app.get("/", (req, res) => {
    return res.status(200).json({
        massage: "Welcome to Boilerplate TypeScript Elfin Sanjaya"
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map