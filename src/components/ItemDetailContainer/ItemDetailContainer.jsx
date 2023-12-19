import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import './ItemDetailContainer.css';


const ItemDetailContainer = ({ product, showModal, handleClose, handleAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState('');
    const handleSizeChange = (size) => {
      setSelectedSize(size);
    };
  
    const handleBuyClick = () => {
      handleAddToCart(product, selectedSize);
      handleClose();
    };
  
    return (
      <Modal show={showModal} onHide={handleClose} className="item-detail-modal">
        <Modal.Header closeButton className="closeButton">
          <Modal.Title className="modal-title">{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={product.image}
            alt={product.name}
            className="modal-image"
            style={{ width: '100%', height: '100%' }}
          />
          <p className="modal-description">{product.description}</p>
  
        <Form.Group controlId="formSizeModal">
          <Form.Label className="modal-label">Tallas:</Form.Label>
          <div className="size-options">
            <Form.Check
              type="radio"
              label="S"
              name="sizeModal"
              id="size-s-modal"
              checked={selectedSize === 'S'}
              onChange={() => handleSizeChange('S')}
            />
            <Form.Check
              type="radio"
              label="M"
              name="sizeModal"
              id="size-m-modal"
              checked={selectedSize === 'M'}
              onChange={() => handleSizeChange('M')}
            />
            <Form.Check
              type="radio"
              label="L"
              name="sizeModal"
              id="size-l-modal"
              checked={selectedSize === 'L'}
              onChange={() => handleSizeChange('L')}
            />
            <Form.Check
              type="radio"
              label="XL"
              name="sizeModal"
              id="size-xl-modal"
              checked={selectedSize === 'XL'}
              onChange={() => handleSizeChange('XL')}
            />
          </div>
        </Form.Group>

        <Button variant="primary" onClick={handleBuyClick} className="buy-button">
          Comprar
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ItemDetailContainer;