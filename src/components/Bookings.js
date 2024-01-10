import React, { useEffect, useState, useCallback } from "react";
import Login from "./Login";
import useToken from "./useToken";

export default function StaffPage() {
  // const [token, setToken] = useState();
  const { token, setToken } = useToken();  
  const [orders, setOrders] = useState([
    { name: "", table: "", foodOrder: [""] },
  ]);

  const fetchData = useCallback(() => {
    const settings = {
      method: "GET",
      headers: {
        Authorization: token,
      },
    };
    const url = "http://localhost:3001/itineraries";
    fetch(url, settings)
      .then((response) => response.json())
      .then((incomingData) => {
        console.log(incomingData);
        let customerOrder = [{ name: "", table: "", foodOrder: [] }];
        let formattedData = incomingData.map((item, index) => {
          let name = item.order[0];
          let table = item.order[1];
          let foodOrder = item.order.slice(2, item.order.length);
          customerOrder[index] = { name, table, foodOrder };
        });
        setOrders(customerOrder);
      })
      .catch((err) => console.error(err));
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="container-fluid">
      <h1 className="headingStyleLeft">Bookings Dashboard</h1>
      <div>
        <h2 className="headingStyleLeft">Current Bookings</h2>
        {orders.map((item) => (
          <>
            <h3 className="headingStyleLeft">
              Booking for nights: {item.table} Customer name: {item.name}
            </h3>
            <ul className="list-group">
    {item.foodOrder.map((element, idx) => (
      <div key={idx} className="headingStyleLeft">
        {/* Check if element is an object and render its value for the key 'one night' */}
        <li className="list-group-item">
          {typeof element === 'object' ? element['one night'] : element}
        </li>
      </div>
    ))}
  </ul>
          </>
        ))}
      </div>
    </div>
  );
}
