import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProductCatalog.css';  

const ProductCatalog = () => {
  const products = [
    {
      id: 1,
      name: 'Remera Stones',
      description: '6 cuotas sin interés de $4.665',
      price: '$27.990',
      image: 'img/remera-stones.jpg', 
    },

    {
        id: 2,
        name: 'Bermuda Camel',
        description: '6 cuotas sin interés de $7.498 ',
        price: '$44.990',
        image: 'img/bermuda-camel.webp'
      },
    
  

  {
    id: 3,
    name: 'Camisa Legend',
    description: '6 cuotas sin interés de $9.998',
    price: '$59.990',
    image: 'img/camisa-legend.webp'
  },

  {
    id: 4,
    name: 'Remera Iron Maiden',
    description: '6 cuotas sin interés de $4.665',
    price: '$27.900',
    image: 'img/remera-iron-maiden.jpg'
  }, 
  
  {
    id: 5,
    name: 'Borcego Sid',
    description: '6 cuotas sin interés de $19.983',
    price: '$119.900',
    image: 'img/borcegos.webp'
  },

  {
    id: 6,
    name: 'Bermuda Stevie Virginia',
    description: '6 cuotas sin interés de $8.332',
    price: '$49.990',
    image: 'img/bermuda-stevie-virginia.webp'
  },
];

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Card className="product-card">     
            <Card.Img
                variant="top"
                src={product.image}
                style={{ width: '100%', height: 'auto' }} 
              />
              <Card.Body>
                <Card.Title className="product-name">{product.name}</Card.Title>
                <Card.Text className="product-price">Precio: {product.price}</Card.Text>
                <Card.Text className="product-description">{product.description}</Card.Text>
                <Button variant="primary" className="product-button">Comprar</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;