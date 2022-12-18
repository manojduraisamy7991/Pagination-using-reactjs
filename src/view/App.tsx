import React, { useEffect, useState } from 'react';
import './App.css';
interface productsState {
  id: number;
  title: string;
  thumbnail: string;
}
function App() {
  const [products, setProducts] = useState<productsState[]>([]);
  const fetchProducts = async () => {
    const results = await fetch('https://dummyjson.com/products');
    const data = await results.json();
    if (data && data.products) setProducts(data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className='App'>
      {products.length > 0 && (
        <div>
          {products.map((item: productsState) => {
            return (
              <div key={item.id}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  width='40%'
                  height='40%'
                />
                <h2>{item.title}</h2>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
