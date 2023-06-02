import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ShowModal = ({ movie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSetLocalStorage = (event) => {
    event.preventDefault();
    const form = event.target;
    const showName = form.showName.value;
    const runtime = form.runtime.value;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const bookingInfo = {
      showName,
      runtime,
      userName,
      userEmail,
    };
    console.log(bookingInfo);
    const existingBookingInfo = localStorage.getItem("bookingInfo");
    const bookingInfoArray = existingBookingInfo
      ? JSON.parse(existingBookingInfo)
      : [];
    bookingInfoArray.push(bookingInfo);
    localStorage.setItem("bookingInfo", JSON.stringify(bookingInfoArray));
    console.log(bookingInfoArray);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Book a Show
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Book a Show !!</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSetLocalStorage}>
          {" "}
          <Modal.Body>
            <img
              src={movie.show.image.medium}
              alt=""
              className="d-block mb-3 w-25 mx-auto"
            />
            <label>Show Name</label>
            <input
              type="text"
              defaultValue={movie.show.name}
              disabled
              name="showName"
              className="d-block rounded mb-2 w-100"
            />
            <label htmlFor="runtime">Runtime(minutes)</label>
            <input
              className="d-block rounded w-100"
              type="text"
              id="runtime"
              disabled
              name="runtime"
              defaultValue={movie.show.runtime}
            />
            <label htmlFor="user-name">Name</label>
            <input
              className="d-block rounded w-100"
              type="text"
              name="name"
              placeholder="Your Name"
              id="user-name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              className="d-block rounded w-100"
              type="text"
              name="email"
              placeholder="Email"
              id="email"
              required
            />
          </Modal.Body>
          <Modal.Footer>
            <input
              type="submit"
              value="Book Now"
              className="btn btn-secondary"
            />
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ShowModal;
