const { PrismaClient } = require("@prisma/client");
const { debug } = require("console");

const prisma = new PrismaClient();

async function transactionalUpdateDebug() {
    let facets = [
      {
        data: {
          type: {
            connect: {
              name: ":STANDARD-FACET",
            },
          },
          supertype: {
            connect: [
              {
                name: ":FACET",
              },
              {
                name: ":META-CLASS",
              },
              {
                name: ":SYSTEM-CLASS",
              },
              {
                name: ":THING",
              },
            ],
          },
        },
        where: {
          name: "clean_demo_v4_with_v505EUP_Class4",
        },
      },
      {
        data: {
          type: {
            connect: {
              name: ":STANDARD-FACET",
            },
          },
          supertype: {
            connect: [
              {
                name: ":FACET",
              },
              {
                name: ":META-CLASS",
              },
              {
                name: ":SYSTEM-CLASS",
              },
              {
                name: ":THING",
              },
            ],
          },
        },
        where: {
          name: "clean_demo_v4_with_v505EUP_Class5",
        },
      },
    ]
    let updateTasks = []
    console.log('Prepare update tasks : START')
    for (const facet of facets) {
      let task = await prisma.facet.update(facet);
      updateTasks.push(task);
      console.log('Prepareed update task :\n' + JSON.stringify(facet, null, 1))
    }
    console.log('Prepare update tasks : END')
    console.log('Execute update tasks : START')
    try {
        await prisma.transaction(updateTasks);
    } catch (error) {
        throw(error)
    } finally {
        await prisma.disconnect();
    }
    console.log('Execute update tasks : END')
  }
  
  transactionalUpdateDebug();
  