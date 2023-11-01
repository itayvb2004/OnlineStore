import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useShoppingCart } from './ShoppingCartContext';

const ShoppingCartPage: React.FC = () => {
  const { cartItems, removeFromCart } = useShoppingCart();

  if (cartItems.length === 0) {
    return (
      <Container>
        <Typography variant="h4">Your Shopping Cart is empty.</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4">Shopping Cart</Typography>
      {cartItems.map((item) => (
        <div key={item.id}>
          <Typography>{item.name}</Typography>
          <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
        </div>
      ))}
      <Button variant="contained" color="primary">
        Move to Payment
      </Button>
    </Container>
  );
};

export default ShoppingCartPage;
