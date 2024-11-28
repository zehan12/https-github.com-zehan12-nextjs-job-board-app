const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function testConnection() {
  try {
    const jobs = await prisma.job.findMany();
    console.log(jobs);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
