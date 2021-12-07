import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts, searchProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ProductCarousel from '../components/ProductCarousel'
import { useLocation, useNavigate } from 'react-router-dom'

function HomeScreen() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList
    let navigate = useNavigate();

    const search = useLocation().search;
    const keyword = new URLSearchParams(search).get('search')   
    
    // useEffect(() => {
    //   if (!keyword){
    //     dispatch(listProducts());
    //   }
    //   dispatch(searchProducts(keyword));
    // }, [keyword, dispatch])

    useEffect(() => {
      dispatch(listProducts());
    },[dispatch])
    
    return (
      <div>
        {/* {!keyword && <ProductCarousel />} */}
        <h1>Latest Products</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            {products.map((product)=> (
              <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))
            }
          </Row>
        )}
      </div>
    );
}

export default HomeScreen
