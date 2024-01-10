import React, { useContext, useState } from "react";
import OrderContext from "./OrderContext";
import Modal from "./Modal";
import useModal from "./useModal";

const SubmitOrder = () => {
  const [order, setOrder] = useContext(OrderContext);
  const [nameField, setNameField] = useState("");
  const [tableField, setTableField] = useState("");
  const [arrivalDate, setArrivalDate] = useState(""); // Correctly declared state variable for arrival date

  const [message, setMessage] = useState("");
  const [isShowingModal, toggleModal] = useModal();

  const addOrder = () => {
    let newOrder = [nameField, tableField, ...order];
    const orderString = JSON.stringify(newOrder);
    fetch(`http://localhost:3001/addOrder`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*     ",
        "Content-Type": "application/json",
      },
      body: orderString,
    })
      .then(() => {
        setMessage(
          "Hi " +
            nameField +
            " Thanks you for booking at Luxury Bookings. You've booked " +
            order
        );
        setOrder([]);
        setNameField("");
        setTableField("");
        toggleModal(message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Confirm your  booking</h2>
      <label> Enter your name:</label>
      <input
        className="form-control"
        type="text"
        placeholder="Enter your name here ..."
        value={nameField}
        onChange={(e) => setNameField(e.target.value)}
      />
      <label> Enter how long is the stay:</label>
      
      <input
      required
        className="form-control"
        type="text"
        placeholder="enter number of nights"
        value={tableField}
        onChange={(e) => setTableField(e.target.value)}
        />
        {/* Date of Arrival Field */}
        <label>Date of arrival:</label>
        <input
          className="form-control"
          type="date"
          placeholder="Enter your date of arrival ..."
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
        />
      <button className="button btn btn-primary" onClick={addOrder}>
        Submit booking
      </button>
      <div className="modalContainer">
        <Modal
          show={isShowingModal}
          onCloseButtonClick={toggleModal}
          message={message}
        />
      </div>
    </div>
  );
};
export default SubmitOrder;
