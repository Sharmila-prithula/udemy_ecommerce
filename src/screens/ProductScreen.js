import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails, listProductvariations } from '../actions/productActions'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Product from '../components/Product'

function ProductScreen() {
    const [qty, setQty] = useState(1)
    const { id } = useParams();
    let navigate = useNavigate();
    let varis = []
    let uniqueVaris = []
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product } = productDetails

    const productvariation = useSelector(state => state.productvariation)
    const { error: errorVariations, loading: loadingVariations, productvariations } = productvariation

    useEffect(() =>{
      dispatch(listProductvariations(id))
      dispatch(listProductDetails(id))
    }, [dispatch])

    const addToCartHandler = () =>{
      navigate(`/cart/${id}?qty=${qty}`)
    }
    return (
      <div>
        <Link to="/" className="btn btn-light my-3">
          Go back
        </Link>
        
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            {productvariations.length > 0 ? (
              <Row>
                <h3>{product.product_name}</h3>
                <Col md={6}>
                  <Image src={product.image} alt={product.product_name} fluid />
                </Col>

                <Col md={3}>
                  <ListGroup variant="flush">
                    {/* <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                    color={"#f8e825"}
                  />
                </ListGroup.Item> */}

                    <ListGroup.Item>
                      Description: {product.description}
                    </ListGroup.Item>
                    <ListGroup.Item>Price: ${product.min_price}</ListGroup.Item>
                  </ListGroup>
                  {productvariations.map((productvar) => (
                    <Col key={productvar.id} sm={12} md={6} lg={4} xl={3}>
                      {productvar.product.variants.map((variant) => (
                        // varis = (variant) => [...new Set(variant)],
                        varis.push(variant),
                        uniqueVaris = varis.filter((v, i, a) => a.indexOf(v) === i),
                        console.log(uniqueVaris)
                      ))}
                    </Col>
                  ))}
                  
                  <Row>
                       
                          {uniqueVaris.map((vari)=>(
                            <h3>{vari}</h3>
                          ))}
                         </Row>
                </Col>
                
                <Col md={3}>
                  <Card>
                  
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Row>
                          <Col>Price:</Col>
                          <Col>
                            <strong>${product.min_price}</strong>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Status:</Col>
                          <Col>
                            {product.countInStock > 0
                              ? "In Stock"
                              : "Out of Stock"}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      {product.countInStock > 0 && (
                        <ListGroup.Item>
                          <Row>
                            <Col>Qty</Col>
                            <Col xs="auto" className="my-1">
                              <Form.Control
                                as="select"
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                              >
                                {[...Array(product.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </Form.Control>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      )}
                      <ListGroup.Item>
                        <Button
                          onClick={addToCartHandler}
                          className="btn-block"
                          disabled={product.countInStock == 0}
                          type="button"
                        >
                          Add to Cart
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            ) : (
              <Row>
                <h3>nai{product.product_name}</h3>
                <Col md={6}>
                  <Image src={product.image} alt={product.product_name} fluid />
                </Col>

                <Col md={3}>
                  <ListGroup variant="flush">
                    {/* <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                    color={"#f8e825"}
                  />
                </ListGroup.Item> */}

                    <ListGroup.Item>
                      Description: {product.description}
                    </ListGroup.Item>
                    <ListGroup.Item>Price: ${product.min_price}</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={3}>
                  <Card>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Row>
                          <Col>Price:</Col>
                          <Col>
                            <strong>${product.min_price}</strong>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Status:</Col>
                          <Col>
                            {product.countInStock > 0
                              ? "In Stock"
                              : "Out of Stock"}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      {product.countInStock > 0 && (
                        <ListGroup.Item>
                          <Row>
                            <Col>Qty</Col>
                            <Col xs="auto" className="my-1">
                              <Form.Control
                                as="select"
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                              >
                                {[...Array(product.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </Form.Control>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      )}
                      <ListGroup.Item>
                        <Button
                          onClick={addToCartHandler}
                          className="btn-block"
                          disabled={product.countInStock == 0}
                          type="button"
                        >
                          Add to Cart
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            )}
            
          </Row>
        )}
      </div>
    );
}

export default ProductScreen