import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            email: "mohitchoudhary@gmail.com",
            name: "Mohit",
            posts : {
                create: [
                    {
                        title: "Mohit title 1"
                    },{
                        title: "Mohit title 2"
                    }
                ]
            }
        }
    })
}

main()
  .then(async() => {
    console.log("Done")
    await prisma.$disconnect()
  })
  .catch(async(e) => {
    console.error(e);
    await prisma.$disconnect()
    process.exit(1);
  })