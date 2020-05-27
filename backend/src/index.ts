import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
/*   const allUsers = await prisma.user.create({
    data: {
      name: 'Vinicius',
      email: 'vynnyprud@gmail.com',
      posts: {
        create: [
          { title: 'Post 1' },
          { title: 'Post 2' }
        ]
      }
    }
  }); */

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true
    }
  });

  console.log(allUsers);
}

/* prisma.user.create({
  data: {
    name: 'Vinicius Prudencio',
    email: 'vynnyprudencio@gmail.com/'
  }
}).then(() => {
  console.log('Cadastrou!')
}) */

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.disconnect()
  })