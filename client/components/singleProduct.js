import React from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../store/reducers/singleproduct'
import {
  Card,
  DropdownButton,
  Dropdown,
  Carousel,
  Spinner
} from 'react-bootstrap'

class SingleProduct extends React.Component {
  componentDidMount() {
    console.log('singleProduct did mount')
    const id = this.props.match.params.id
    this.props.loadProduct(id)
  }

  render() {
    const product = this.props.product
    if (!product) return <Spinner animation="border" />
    console.log('product', product)

    return (
      <div
        style={{display: 'flex', justifyContent: 'space-evenly'}}
        className="container-product"
      >
        <Carousel
          style={{width: '40rem', padding: '1rem', alignSelf: 'center'}}
        >
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://i.etsystatic.com/20356291/r/il/d1e50b/2273980567/il_1588xN.2273980567_6mq1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://i.etsystatic.com/20356291/r/il/27c672/2226393122/il_794xN.2226393122_tsu1.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.etsystatic.com/20356291/r/il/7b5b8d/2273980767/il_794xN.2273980767_e8cc.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Card style={{width: '40rem', margin: '1rem'}} className="shadow-sm">
          <Card.Body>
            <Card.Title style={{fontSize: '2rem'}}>{product.name}</Card.Title>
            <Card.Text>
              Take your mechanical keyboard to Hanamura with this handcrafted
              cherry blossom keycap! This is a single key 1x profiled for the
              Esc, Function, or number row.
            </Card.Text>
            <Card.Text>Stem: Cherry MX*</Card.Text>
            <Card.Text>Profile: OEM**, 1x Fn-row</Card.Text>

            <Card.Text>
              *Each key is individually tested to function well on an original
              Cherry MX switch with an RGB LED. They should also function on
              exact clones like Gaterons, Kailh Speeds, Outemus, Zealios, Halos,
              Holy Pandas, etc. These keycaps will not fit on other switch types
              like ALPS, Matias, Topre, Razer Opto-mechanical (Huntsman), or
              Logitech Romer-G switches. SteelSeries Apex keyboards are
              incompatible due to unusually-shaped LEDs. Stems are calibrated to
              fit snug on a particularly narrow Cherry MX clone stem, or tightly
              on an original Cherry MX. These will likely take a little more
              force to mount than your stock keycaps--that's normal for artisan
              caps.
            </Card.Text>
            <Card.Text>In stock</Card.Text>
            <DropdownButton
              id="dropdown-basic-button"
              variant="dark"
              title="Quantity"
            >
              <Dropdown.Item href="#/action-1">1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">3</Dropdown.Item>
            </DropdownButton>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

const mapState = state => ({
  product: state.singleProduct
})

const mapDispatch = dispatch => ({
  loadProduct: id => dispatch(fetchProduct(id))
})

export default connect(mapState, mapDispatch)(SingleProduct)
