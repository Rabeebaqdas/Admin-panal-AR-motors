import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { Link, useHistory } from 'react-router-dom';
import '../App.css';
const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.user?.currentUser?.isAdmin);
  const {isFetching,error} = useSelector(state=>state.user)
  if(admin){
    history.push("/");
  }
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });

  };

  

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
      <h1 style={{marginBottom:20}}>SIGN IN</h1>
      <input
      required
      value={username}
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)} autoFocus />
      <input
      required
      value={password}
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)} />
      <button className="btn" onClick={handleClick} disabled={isFetching} style={{ padding: 10, width: 120 ,backgroundColor:"teal", border:"none", color:"white" }}>
        Login
      </button>
      {error && <span style={{color:"red",cursor:"not-allowed"}}>Something went wrong</span>}
      <h4>Don't have an account, <Link style={{textDecoration:"none", color:"black"}} to="register"><em style={{cursor:"pointer"}}>CLICK HERE</em></Link></h4>
    </div></>
  
  );
};

export default Login;