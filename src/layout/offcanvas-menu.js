import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

function OffCanvasMenu({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>Menu</button>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function OffCanvasBtn() {
  return (
    <>
      {['top'].map((placement, idx) => (
        <OffCanvasMenu key={idx} placement={placement} />
      ))}
    </>
  );
}

export default OffCanvasBtn;
