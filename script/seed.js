'use strict'

const {db} = require('../server/db')

const User = require('../server/db/models/user')
const Product = require('../server/db/models/product')
const Category = require('../server/db/models/category')
const Order = require('../server/db/models/order')
const Faker = require('faker')

const categoryList = ['food', 'fauna', 'flora', 'movie_tv', 'games', 'holiday']
const categoryImage = [
  `${Faker.image.food()}`,
  `${Faker.image.animals()}`,
  `${Faker.image.nature()}`,
  `${Faker.image.abstract()}`,
  `${Faker.image.sports()}`,
  `${Faker.image.nightlife()}`
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  //CATEGORY MODEL
  for (let i = 0; i < categoryList.length; i++) {
    await Category.create({
      name: categoryList[i],
      imageUrl: categoryImage[i]
    })
  }

  //PRODUCT MODEL
  for (let i = 0; i < 30; i++) {
    await Product.create({
      name: Faker.commerce.productName(),
      description: Faker.commerce.productDescription(),
      price: Faker.random.float(),
      numOfSales: 0,
      quantity: Faker.random.number(),
      imageUrl: [Faker.image.image(), Faker.image.abstract()],
      categoryId: Math.floor(Math.random() * (7 - 1) + 1)
    })
  }

  //USER MODEL
  for (let i = 0; i < 5; i++) {
    await User.create({
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      email: Faker.internet.email(),
      password: '1234567',
      imageUrl: Faker.image.avatar()
    })
  }

  const admins = {
    firstName: 'Kade',
    lastName: 'Cahe',
    password: '1234567',
    email: 'kadecahe@gmail.com',
    imageUrl: Faker.image.avatar(),
    isAdmin: true
  }

  await User.create(admins)

  await Order.create({
    totalAmount: 25.99,
    isComplete: false
  })

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
