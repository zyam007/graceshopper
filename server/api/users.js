const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

// this is a great first usecase for when we'd need to think about security.
// should any type of user be able to make this request - or just admins?
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
