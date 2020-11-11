/* global describe beforeEach it */

const {expect} = require('chai')
const {db} = require('../index')
const Category = db.model('category')

describe.only('Category model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Category has a name and an imageUrl', () => {
    let nature

    beforeEach(async () => {
      nature = await Category.create({
        name: 'Nature',
        imageUrl:
          'https://i.etsystatic.com/12037351/r/il/b50db7/1906584793/il_794xN.1906584793_c4zm.jpg'
      })
    })

    it('Category has a valid name', () => {
      expect(nature.name).not.to.equal(null)
      expect(typeof nature.name).to.be.a('string')
      expect(nature.name).to.equal('Nature')
    })

    it('Category has a valid imageUrl', () => {
      // expect(nature.imageUrl).not.to.equal(null)
      expect(typeof nature.imageUrl).to.be.a('string')
      expect(nature.imageUrl).to.equal(
        'https://i.etsystatic.com/12037351/r/il/b50db7/1906584793/il_794xN.1906584793_c4zm.jpg'
      )
    })
  }) //end describe category has name and imageUrl
}) // end describe(Category model)
