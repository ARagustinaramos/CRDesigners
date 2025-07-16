import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Landing = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/productos')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Catálogo de Productos</h1>

        {productos.length === 0 ? (
          <p className="text-center text-gray-500">Cargando productos...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productos.map(prod => (
              <ProductCard key={prod.IdArticulo} producto={prod} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;



