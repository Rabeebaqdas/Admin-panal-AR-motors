import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { logout } from "../../redux/userRedux";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Topbar() {
   const dispatch = useDispatch();
   const history = useHistory();
   const admin = useSelector((state) => state.user.currentUser);
  const signout = () => {
   dispatch(logout());
   history.push("/login")
   }
   const signin = () => {
     history.push("/login")
   }
      return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">AR MOTORS ADMINPANAL</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
        
         {admin && <img src="https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/243065257_3052114211674116_4097698761549559816_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH_FHZgf5X5Zy5ryDHimcpE8w6Z-_eqtmnzDpn796q2afeP-IUH18ElqTLmjGahIVQfJIYu3reTQTlrvxCpR7Ga&_nc_ohc=fyBtOT9LaD8AX9NwkDT&_nc_ht=scontent.fkhi16-1.fna&oh=00_AT8YhefdqanGJueoejI33uNjDlsym_CZlC4H_W9wEXq5Eg&oe=61FCDA26" alt="" className="topAvatar" />}
        {admin ?  <Button style={{cursor:"pointer",backgroundColor:"darkblue",color:"white",marginLeft:"10px"}} onClick={signout}>Logout</Button> : <Button style={{cursor:"pointer",backgroundColor:"darkblue",color:"white",marginLeft:"10px"}} onClick={signin}>Sign In</Button>}
        </div>
      </div>
    </div>
  );
}
