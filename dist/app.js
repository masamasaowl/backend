"use strict";
// Express setup
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const prisma = global.prisma || new client_1.PrismaClient();
if (process.env.NODE_ENV !== "production")
    global.prisma = prisma;
const app = (0, express_1.default)();
// --- Middlewares ---
app.use((0, cors_1.default)({
    origin: "*"
}));
app.use(express_1.default.json());
// --- POST Route ---
app.post("/api/form", async (req, res) => {
    try {
        // destructure incoming formdata via axios
        const { name, email, branch, reg, phone, priority, reason, domain, bestProject } = req.body;
        // validate incoming enums
        // INSERT formData into the database
        const newSubmission = await prisma.formSubmission.create({
            data: {
                name,
                email,
                branch,
                reg,
                phone,
                reason,
                bestProject,
                priority,
                domain,
            },
        });
        // send success response
        return res.status(201).json(newSubmission);
    }
    catch (error) {
        console.error(error);
        // handle known Prisma errors
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                return res.status(400).json({ error: "Email or Registration already exists" });
            }
        }
        // handle unknown errors
        return res.status(500).json({ error: "Server error" });
    }
});
// --- Export app for server.ts ---
exports.default = app;
