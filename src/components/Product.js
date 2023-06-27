import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';

const Product = () => {

     const dispatch = useDispatch();
     const {data: products} = useSelector(state => state.products);
     console.log(products.data);

     useEffect(() => {

          dispatch(getProducts());

               // fetch('https://fakestoreapi.com/products')
               //      .then((data) => data.json())
               //      .then((result) => setProducts(result))

     },[]);

     const addToCart = product =>  dispatch(add(product));
     

     const cards = products.map((product) => (
          <div className='col-md-3' style={{ marginBottom: '5px' }}>
               <Card key={product.id} className='h-100'>
                    <div className='text-center'>
                         <Card.Img variant="top" src={product.image} style={{ width: '120px', height: '150px' }} />
                    </div>
                    <Card.Body>
                         <Card.Title>{product.title}</Card.Title>
                         <Card.Text>
                              INR {product.price}
                         </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: 'white' }}>
                         <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                    </Card.Footer>
               </Card>
          </div>
     ));

     return (
          <>
               <h1>Product dashboard</h1>

               <div className='row'>
                    {cards}
               </div>
          </>
     )
}

export default Product
