const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Seed the User table
    const user1 = await prisma.user.create({
        data: {
            name: 'Alice',
            created_at: new Date(),
        },
    });

    const user2 = await prisma.user.create({
        data: {
            name: 'Bob',
            created_at: new Date(),
        },
    });

    console.log({ user1, user2 });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
