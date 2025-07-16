import React from 'react';

const ProductCard = ({ producto }) => {
  const nombre = producto.NombreArticulo?.trim() || 'Sin nombre';
  const imagen = producto.ImagenWeb?.trim() || 'https://dummyimage.com/200x200/cccccc/000000&text=Sin+Imagen';
  const stock = producto.Stock?.toLowerCase() === 'si' ? 'Disponible' : 'Sin stock';

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col items-center">
      <div className="w-full flex justify-center mb-4">
        <img
          src={imagen}
          alt={nombre}
          className="h-32 max-w-[150px] object-contain rounded-md bg-gray-100"
          onError={(e) => {
            e.target.src = 'https://dummyimage.com/200x200/cccccc/000000&text=Sin+Imagen';
          }}
        />
      </div>
      <h2 className="text-lg font-semibold text-center text-gray-800">{nombre}</h2>
      <p className="text-gray-600 mt-2">Precio: <span className="font-bold">${producto.PrecioConIva}</span></p>
      <p className={`text-sm mt-1 ${stock === 'Disponible' ? 'text-green-600' : 'text-red-500'}`}>
        {stock}
      </p>
      <p className="text-xs text-gray-400 mt-1">{producto.Familia?.trim()} - {producto.Rubro?.trim()}</p>
    </div>
  );
};

export default ProductCard;



  