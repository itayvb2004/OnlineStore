import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@mui/material';

interface Product {
  id: string;
  name: string;
  category: string;
  producer: string;
}

const CategoryPage: React.FC = () => {
  const { category, producer } = useParams<{ category: string; producer: string }>();
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `/products?category=${category}${producer ? `&producer=${producer}` : ''}`; // Construct the URL
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCategoryProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [category, producer]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Category: {category}</h2>
      {producer && <h3>Producer: {producer}</h3>}
      <div>
        {categoryProducts.map((product) => (
          <Button
            key={product.id}
            component={Link}
            to={`/products/${product.id}`}
            variant="outlined"
            style={{ margin: '10px' }}
          >
            {product.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
