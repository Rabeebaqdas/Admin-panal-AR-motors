import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  register } from "../redux/apiCalls";
import { useHistory } from 'react-router-dom';
const Register = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [email, setemail] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch,{username,email,password});
    history.push("/login");
      setPassword("");
      setUsername("");
    console.log("hello")
    }

  return (
    <>
    <div style={{ backgroundColor: "teal",height:"70px", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}><h1>Admin Panal</h1></div>
    <div
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{marginBottom:20}}>SIGN UP</h1>
      <input
      required
      value={username}
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)} autoFocus />
          <input
      required
      value={email}
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}  />
      <input
      required
      value={password}
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)} />
        <input
      required
      value={cpassword}
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="confrim password"
        onChange={(e) => setcPassword(e.target.value)} />
{ password === cpassword ? <button onClick={handleClick} style={{ padding: 10, width: 120 ,backgroundColor:"teal", border:"none", color:"white" , cursor:"pointer"}}>
        SIGN UP
      </button>
    :
    <button disabled style={{ padding: 10, width: 120 ,backgroundColor:"teal", border:"none", color:"white",cursor:"not-allowed" }}>
        SIGN UP
      </button>  
    }

    </div></>
  
  );
};

export default Register;