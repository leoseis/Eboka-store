import React, { useEffect, useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Confetti from "react-confetti"; // Optional

function Home() {
  const [showModal, setShowModal] = useState(true);
  const username = localStorage.getItem("username");

  useEffect(() => {
    toast.success(`Hello, ${username}! You're logged in.`, {
      position: "top-right",
      autoClose: 3000,
    });
  }, [username]);

  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* <Confetti width={window.innerWidth} height={window.innerHeight} /> */}

      <ToastContainer />

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>🎉 Welcome!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Hello <strong>{username}</strong>, we're glad you're here.</h5>
          <p>Explore the dashboard and enjoy your experience.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Let’s go!
          </Button>
        </Modal.Footer>
      </Modal>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container className="text-center mt-5">
          <h1 className="display-4">Welcome, {username}!</h1>
          <p className="lead">You've successfully logged in. Feel free to explore the features.</p>
        </Container>
      </motion.div>
    </>
  );
}

export default Home;
