import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    await prisma.user.create({
        data : {
            email: "mohitchoudhary@gmail.com",
            name: "Mohit"
        }
    })
}

main()
  .then(async() =>{
    console.log("Done");
    await prisma.$disconnect()
  })
  .catch(async(e) =>{
    console.log(e);
    await prisma.$disconnect();
    process.exit(1)
  })