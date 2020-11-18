import React from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

const SingleCartItem = props => {
  const {item, increaseItem, decreaseItem, deleteCartItem} = props

  function handleDecrement(currentItem) {
    decreaseItem(currentItem.product, currentItem)
  }

  function handleIncrement(currentItem) {
    increaseItem(currentItem.product, currentItem)
  }

  function handleDelete(id) {
    deleteCartItem(id)
  }

  return (
    <>
      <Row className="m-3">
        <Card>
          <Container>
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  src={item.product.imageUrl[0]}
                  alt="test-img"
                  className=""
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Text>
                    <Link
                      to={`/listing/${item.product.id}`}
                      className="product-name"
                    >
                      {item.product.name}
                    </Link>
                  </Card.Text>
                  <Card.Text>
                    <span style={{fontWeight: 'bold'}}>Price:</span> ${item.product.price.toFixed(
                      2
                    )}
                  </Card.Text>
                  <Card.Text>
                    <span
                      style={{
                        fontWeight: 'bold'
                      }}
                    >
                      Total:
                    </span>{' '}
                    ${(item.productQuantity * item.product.price).toFixed(2)}
                  </Card.Text>
                  <Row className="d-flex flex-wrap">
                    <Row className="mx-3">
                      <Button
                        type="button"
                        variant="danger"
                        onClick={() => handleDecrement(item)}
                      >
                        -
                      </Button>
                      <div className="align-self-center mx-2">
                        {item.productQuantity ? (
                          <Card.Text>{item.productQuantity}</Card.Text>
                        ) : (
                          handleDelete(item.id)
                        )}
                      </div>
                      <Button
                        type="button"
                        variant="success"
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </Button>
                    </Row>
                  </Row>
                  <div style={{paddingTop: '.5rem', textAlign: 'right'}}>
                    <Button
                      type="button"
                      variant="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Container>
        </Card>
      </Row>
    </>
  )
}

export default SingleCartItem
