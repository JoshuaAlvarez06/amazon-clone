import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Order from "../order/Order";
import { useStateValue } from "../../StateProvider";
import "./Orders.css";

const Orders = () => {
  const [{ user }] = useStateValue();
  const [viewCount, setViewCount] = useState(3);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>{user ? "Your Orders" : "You must be logged in to view orders"}</h1>
      <div className="ordersOrder">
        {orders?.map(
          (order, index) => index < viewCount && <Order order={order} />
        )}
        {orders.length > viewCount ? (
          <button
            className="ordersBtn"
            onClick={() => setViewCount(viewCount + 3)}
          >
            View More Orders
          </button>
        ) : (
          <button className="ordersBtn" onClick={() => setViewCount(3)}>
            View Less Orders
          </button>
        )}
      </div>
    </div>
  );
};

export default Orders;
