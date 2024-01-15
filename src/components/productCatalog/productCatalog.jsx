import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { pedirDatos } from '../../utils/utils';


const ProductCatalog = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products  = pedirDatos ;
    

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product, selectedSize) => {
    console.log(`Agregado al carrito: ${product.name}, Talla: ${selectedSize}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="catalog-title">CATALOGO</h2>
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
    



