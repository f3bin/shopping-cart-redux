import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart);

  const removeFromCart = id => dispatch(remove(id));


  const cards = cartProducts.map((product) => (
    <div className='col-md-12' style={{ marginBottom: '5px' }}>
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
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove from Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className='row'>
      {cards}
    </div>
  )
}

export default Cart
