import "./widgetLg.css";
import React,{useState,useEffect} from 'react';
import { userRequest } from "../requestMethod";
import { format } from "timeago.js";
export default function WidgetLg() {
  const [order,setorder] = useState([])

  useEffect(() => {
   const fetchOrders = async() => {
     const res = await userRequest.get("orders");
     setorder(res.data);
   }
   fetchOrders();
  }, [])
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {order.map((order)=>(
          <tr className="widgetLgTr" key={Math.random()}>
          <td className="widgetLgUser">
            <img
              src="https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/243065257_3052114211674116_4097698761549559816_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH_FHZgf5X5Zy5ryDHimcpE8w6Z-_eqtmnzDpn796q2afeP-IUH18ElqTLmjGahIVQfJIYu3reTQTlrvxCpR7Ga&_nc_ohc=fyBtOT9LaD8AX9NwkDT&_nc_ht=scontent.fkhi16-1.fna&oh=00_AT8YhefdqanGJueoejI33uNjDlsym_CZlC4H_W9wEXq5Eg&oe=61FCDA26"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{order.userId}</span>
          </td>
          <td className="widgetLgDate">{format(order.createdAt)}</td>
          <td className="widgetLgAmount">${order.amount}</td>
          <td className="widgetLgStatus">
            <Button type={order.status} />
          </td>
        </tr>
        ))}
      
      </table>
    </div>
  );
}
