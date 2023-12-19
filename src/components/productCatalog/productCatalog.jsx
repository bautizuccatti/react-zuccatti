import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import './ProductCatalog.css';
import ItemDetailContainer from '../itemDetailContainer/itemDetailContainer';

const ProductCatalog = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      "id": 1,
      "name": "Remera Stones",
      "image": "img/remera-stones.jpg",
      "description": "6 cuotas sin interés de $4.665",
      "price": 27990,
      "stock": 8,
    },
    {
      "id": 2,
      "name": "Bermuda Camel",
      "image": "img/bermuda-camel.webp",
      "description": "6 cuotas sin interés de $7.498",
      "price": 44990,
      "stock": 2,
      
    },
    {
      "id": 3,
      "name": "Camisa Legend",
      "image": "img/camisa-legend.webp",
      "description": "6 cuotas sin interés de $9.998",
      "price": 59990,
      "stock": 14,
      
    },
    {
      "id": 4,
      "name": "Remera Iron Maiden",
      "image": "img/remera-iron-maiden.jpg",
      "description": "6 cuotas sin interés de $4.665",
      "price": 27900,
      
    },
    {
      "id": 5,
      "name": "Borcego Sid",
      "image": "img/borcegos.webp",
      "description": "6 cuotas sin interés de $19.983",
      "price": 119900,
      "stock": 0,
      "status": "sin stock",
      
    },
    {
      "id": 6,
      "name": "Bermuda Stevie Virginia",
      "image": "img/bermuda-stevie-virginia.webp",
      "description": "6 cuotas sin interés de $8.332",
      "price": 49990,
      "stock": 2,
      
    },
    {
      "id": 7,
      "name": "Buzo Rolling Stones",
      "description": "6 cuotas sin interés de $7.498",
      "price": 44990,
      "stock": 8,
      "image": "img/buzo-rolling.jpg"
    },
    {
      "id": 8,
      "name": "Camisa Manga Corta Richard",
      "description": "6 cuotas sin interés de $9.998",
      "price": 59990,
      "stock": 1,
      "image": "img/camisa-manga-corta-richard.webp"
    },
    {
      "id": 9,
      "name": "Medias Nirvana",
      "description": "6 cuotas sin interés de $998",
      "price": 5990,
      "stock": 3,
      "image": "img/medias-nirvana.jpg"
    },
    {
      "id": 10,
      "name": "Remera AC/DC",
      "description": "6 cuotas sin interés de $4.665",
      "price": 27990,
      "stock": 2,
      "image": "img/remera-acdc.jpg"
    },
    {
      "id": 11,
      "name": "Remera Guns",
      "description": "6 cuotas sin interés de $4.665",
      "price": 27990,
      "stock": 4,
      "image": "img/remera-guns.jpg"
    },
    {
      "id": 12,
      "name": "Remera Black Sabbath",
      "description": "6 cuotas sin interés de $4.665",
      "price": 27990,
      "stock": 2,
      "image": "img/remera-black-sabbath.jpg"
    },
    {
      "id": 13,
      "name": "Remera Masfits",
      "description": "6 cuotas sin interés de $4.665",
      "price": 27990,
      "stock": 3,
      "image": "img/remera-masfits.webp"
    },
    {
      "id": 14,
      "name": "Remera MegaDeth",
      "description": "6 cuotas sin interés de $4.665",
      "price": 27990,
      "stock": 0,
      "image": "img/remera-megadeth.jpg"
    },
    {
      "id": 15,
      "name": "Remera Metallica",
      "description": "6 cuotas sin interés de $4.665",
      "price": 27990,
      "stock": 4,
      "image": "img/remera-metallica.jpg"
    },
    {
      "id": 16,
      "name": "Remera Motor Head",
      "description": "6 cuotas sin interés de $4.665",
      "price": 27990,
      "stock": 5,
      "image": "img/remera-motorhead.webp"
    },
    {
      "id": 17,
      "name": "Remera Nirvana",
      "description": "6 cuotas sin interés de $4.665",
      "price": 27990,
      "stock": 18,
      "image": "img/remera-nirvana.jpg"
    },
    {
      "id": 18,
      "name": "Remera White Punk",
      "description": "6 cuotas sin interés de $4.665",
      "price": 27990,
      "stock": 9,
      "image": "img/remera-punk-white.jpg"
    },
    {
    "id": 19,
    "name": "Remera Ramones",
    "description": "6 cuotas sin interés de $4.665",
    "price": 27000,
    "stock": 4,
    "image": "img/remera-ramones.webp"
  },
  {
  "id": 20,
  "name": "Remera The Beatles",
  "description": "6 cuotas sin interés de $4.665",
  "price": 27990,
  "stock": 2,
  "image": "img/remera-the-beatles.jpg"
  },
  ];

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product, selectedSize) => {
    // Implementa la lógica para agregar el producto al carrito aquí
    // Puedes usar un contexto global o pasar una función desde el componente padre
    console.log(`Agregado al carrito: ${product.name}, Talla: ${selectedSize}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="catalog-title">Catálogo de Productos</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Card className="product-card">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: '100%', height: '100%', borderRadius: '0' }}
              />
              <Card.Body>
                <Card.Title className="product-name">{product.name}</Card.Title>
                <Card.Text className="product-description">{product.description}</Card.Text>
                <Card.Text className="product-price">Precio: {product.price}</Card.Text>
                <Button
                  variant="primary"
                  className="product-buy-button"
                  onClick={() => handleBuyClick(product)}
                >
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ItemDetailContainer
          product={selectedProduct}
          showModal={showModal}
          handleClose={handleModalClose}
          handleAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default ProductCatalog;
    



