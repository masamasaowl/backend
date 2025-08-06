// Express setup

// imports
import express from "express";
import cors from "cors";
import { PrismaClient, Prisma } from "@prisma/client";

// --- Prisma Singleton (prevents multiple instances in dev) ---
declare global {
  // Prevents TS errors for global variable
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

const app = express();

// --- Middlewares ---
app.use(cors({
  origin: "*"
}
  
));
app.use(express.json());

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

  } catch (error: unknown) {
    console.error(error);

    // handle known Prisma errors
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return res.status(400).json({ error: "Email or Registration already exists" });
      }
    }

    // handle unknown errors
    return res.status(500).json({ error: "Server error" });
  }
});

// --- Export app for server.ts ---
export default app;
