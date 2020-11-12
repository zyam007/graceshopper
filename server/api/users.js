const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

const isAdminMiddleware = (req, res, next) => {
  if (!req.user) {
    const err = new Error('Please sign up or long in')
    err.status = 401
    next(err)
  } else if (!req.user.isAdmin) {
    const err = new Error('You are not authorized to perform this action')
    err.status = 401
    next(err)
  } else {
    next()
  }
}

router.get('/', isAdminMiddleware, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['firstName', 'lastName', 'id', 'email']
    })
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
