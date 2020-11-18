const router = require('express').Router()
const {User} = require('../db/models')
const isAdminMiddleware = require('./adminMiddleware')
module.exports = router

router.get('/', isAdminMiddleware, async (req, res, next) => {
  try {
    const users = await User
      .findAll
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      // {attributes: ['id', 'email']{}
      ()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)

    if (!user) return res.sendStatus(404)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await User.create(req.body)
    res.send(201)
  } catch (err) {
    next(err)
  }
})
