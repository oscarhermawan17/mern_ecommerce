import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

import Product from '../components/Product'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    // const fetchProduct = () => {
    //   axios.get('/api/products')
    //     .then((response) => {
    //       console.log('res', response)
    //       setProducts(response.data)
    //     })
    //     .catch((error) => {
    //       setProducts([])
    //     })
    // }
    fetchProduct()
  }, [])

  return (
    <div>
      <h1>Lates Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
