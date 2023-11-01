import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import { useShoppingCart } from './ShoppingCartContext';
import { ObjectId } from 'mongoose';

export interface Product {
  _id: ObjectId
  id: string;
  name: string;
  category: string;
  producer: string;
  description: string;
  price: number;
  inventory: number;
  imageUrl: string;
}

const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useShoppingCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/products/${productId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography variant="h4">{product.name}</Typography>
      <img src={process.env.PUBLIC_URL + product.imageUrl} alt={product.name} />
      <Typography>{product.description}</Typography>
      <Typography variant="h6">Price: ${product.price}</Typography>
      <Typography>Inventory: {product.inventory} units</Typography>
      <Typography>Producer: {product.producer}</Typography>
      <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </Container>
  );
};

export default ProductPage;
