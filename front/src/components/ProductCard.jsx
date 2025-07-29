import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProductCard = ({ producto }) => {
  const [expanded, setExpanded] = useState(false);

  const nombre = producto.NombreArticulo?.trim() || 'Sin nombre';
  const imagen = producto.IdArticulo
  ? `http://localhost:3001/imagen/${producto.IdArticulo}`
  : 'https://dummyimage.com/400x300/cccccc/000000&text=Sin+Imagen';

  const stock = producto.Stock?.toLowerCase() === 'si' ? 'Disponible' : 'Sin stock';

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
    sx={{
      height: 420,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              minHeight: '2.8em',
              lineHeight: '1.4em',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {nombre}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary">
            Precio: ${producto.PrecioConIva}
          </Typography>
        }
        sx={{ pb: 0 }} 
      />

      <CardMedia
        component="img"
        height="160"
        image={imagen}
        alt={nombre}
        onError={(e) => {
          e.target.src = 'https://dummyimage.com/400x300/cccccc/000000&text=Sin+Imagen';
        }}
        sx={{
          objectFit: 'contain',
          backgroundColor: '#f9f9f9',
          px: 1,
        }}
      />

      <CardActions disableSpacing sx={{ px: 2 }}>
        <Typography
          variant="body2"
          color={stock === 'Disponible' ? 'green' : 'red'}
          fontWeight="bold"
        >
          {stock}
        </Typography>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="mostrar más"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Familia: {producto.Familia?.trim() || 'N/A'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rubro: {producto.Rubro?.trim() || 'N/A'}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProductCard;
