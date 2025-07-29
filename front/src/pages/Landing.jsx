import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Grid, Typography, Container } from '@mui/material';

const Landing = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/productos')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      padding: '4rem 1rem',
      background: 'linear-gradient(to bottom right, #1f2937, #065f46, #84cc16)'
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          color="white"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 4 }}
        >
          Catálogo de Productos
        </Typography>

        {productos.length === 0 ? (
          <Typography align="center" color="white" variant="h6">
            Cargando productos...
          </Typography>
        ) : (
          <Grid container spacing={2} sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
            {productos.map((prod, index) => (
              <Grid item key={index}>
                <ProductCard producto={prod} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Landing;
