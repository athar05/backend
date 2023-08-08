"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const e_commerce_routes_1 = __importDefault(require("./routes/e-commerce.routes"));
// load env vars
dotenv_1.default.config({ path: './config/config.env' });
const app = (0, express_1.default)();
app.use('/', e_commerce_routes_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running on port ${PORT}`));
