import React from 'react';
import axios from 'axios';

const Products = ({ apiDomain, apiEndpoint }) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${apiDomain}${apiEndpoint}`)
      .then(response => setProducts(response.data.products.slice(0, 6))) // Limit to 6 products
      .catch(error => console.error(error));
  }, [apiDomain, apiEndpoint]);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Dummy Products</h2>

      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div className="bg-gray-200 p-4 rounded" key={product.id}>
            <img src={product.thumbnail} alt={product.title} className="w-full mb-4 rounded" />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-700">{product.description}</p>
            <div className="flex items-center mt-4">
              <span className="text-green-600 font-semibold">${product.price}</span>
              {product.discountPercentage && (
                <span className="ml-2 text-gray-600 line-through">${product.price}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
