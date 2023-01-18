import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

const app = fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get("/", async () => {
  const habits = await prisma.habit.findMany();

  return { habits };
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running on port 3333 🚀");
  });
