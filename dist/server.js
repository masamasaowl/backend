"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Entry point from port
const app_1 = __importDefault(require("./app"));
let port = 8080;
app_1.default.listen(port, () => {
    console.log("Server is listening on 8080");
});
