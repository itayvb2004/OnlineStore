import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from './ProductPage';


const SearchBar: React.FC<{ products: Product[] }> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    // Filter products based on the query
    const results = products.filter((product) =>
      product.name.toLowerCase().startsWith(query)
    );

    setSearchResults(results);
  };

  const handleProductClick = (product: Product) => {
    // Handle the click on a product from search results
    // You can navigate to the product page here
    navigate(`/products/${product.id}`);
    handleSearchClose(); // Close the search bar after selecting a product
  };

  const handleSearchClose = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((product) => (
            <li key={product.id} onClick={() => handleProductClick(product)}>
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
