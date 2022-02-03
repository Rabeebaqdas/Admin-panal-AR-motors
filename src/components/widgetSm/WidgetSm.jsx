import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import React,{useState,useEffect} from "react";
import { userRequest } from "../requestMethod";
export default function WidgetSm() {
  const [users,setUsers] = useState([]);
  useEffect(() => {
      const getUsers = async() => {
          const res = await userRequest.get("/users/?new=true");
          setUsers(res.data); 
      }
      getUsers();
  }, [users])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
      {users.map((user)=>(
 <li className="widgetSmListItem" key={user.username}>
 <img
   src={user.img ||   "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
   alt=""
   className="widgetSmImg"
 />
 <div className="widgetSmUser">
   <span className="widgetSmUsername">{user.username}</span>
   <span className="widgetSmUserTitle">{user.email}</span>
 </div>
 <button className="widgetSmButton">
   <Visibility className="widgetSmIcon" />
   Display
 </button>
</li>
       ))}
      </ul>
    </div>
  );
}
