import React, { useState } from 'react';
import ItemDetailContainer from '../itemDetailContainer/itemDetailContainer';
import { Card, Button } from 'react-bootstrap';
import './Women.css';


const Women = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);



  const womenProducts = [
    {
        "id": 21,
        "name": "Buzo Guns W",
        "description": "6 cuotas sin interés de $9.998",
        "price": 44990,
        "stock": 6,
        "image": "img/women/buzo-guns.webp"
        },
        {
          "id": 22,
          "name": "Campera De Jean",
          "description": "6 cuotas sin interés de $10.000",
          "price": 60000,
          "stock": 2,
          "image": "img/women/campera-jean.webp"
          },
          {
            "id": 23,
            "name": "Pantalones Cargo",
            "description": "6 cuotas sin interés de $7490",
            "price": 44990,
            "stock": 4,
            "image": "img/women/cargo-camuflaje.jpg"
            },
            {
              "id": 24,
              "name": "Medias FF",
              "description": "6 cuotas sin interés de $900",
              "price": 5400,
              "stock": 6,
              "image": "img/women/medias-ff.jpg"
              },
              {
                "id": 25,
                "name": "Remera Ramones W",
                "description": "6 cuotas sin interés de $4665",
                "price": 27990,
                "stock": 6,
                "image": "img/women/remera-ramones-w.jpg"
                },
                {
                  "id": 26,
                  "name": "Zapatillas mick",
                  "description": "6 cuotas sin interés de $9.998",
                  "price": 44990,
                  "stock": 6,
                  "image": "img/women/zapatillas-cuero.jpg"
                  }
      
  ];


  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    // Implementa la lógica para agregar el producto al carrito aquí
  };

  return (
    <div className="container mt-5">
      <h2 className="catalog-title">Women</h2>
      <div className="row">
        {womenProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Card className="product-card">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: '100%', height: 'auto',borderRadius: '0' }}
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
          handleClose={handleClose}
          handleAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default Women;
    
    