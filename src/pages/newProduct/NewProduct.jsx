import "./newProduct.css";
import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/apiCalls";
import Sidebar from "../../components/sidebar/Sidebar";

export default function NewProduct() {
  const [inputs, setinputs] = useState({});
  const [inStock, setstock] = useState(true);
  const [files, setfiles] = useState(null);
  const [cat, setcat] = useState([]);
  const [year, setyear] = useState([]);
  const [color, setcolor] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setinputs(prev => {
      return { ...prev, [e.target.name]: e.target.value, inStock }
    })
    console.log(inputs);
  }

  const handleCat = (e) => {
    setcat(e.target.value.split(","))

  }
  const handleYear = (e) => {
    setyear(e.target.value.split(","))

  }

const handleColor = (e) => {
setcolor(e.target.value.split(","))
}

  const handleClick = (e) => {
    e.preventDefault();
    const Img = new Date().getTime + files.name;
    const storage = getStorage(app);
    const storageRef = ref(storage,Img);
    const uploadTask = uploadBytesResumable(storageRef, files);

uploadTask.on('state_changed', 
  (snapshot) => {

    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
    }
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
     const product = {...inputs ,catagories:cat,year:year,color:color, img:downloadURL};
      addProduct(product,dispatch);
     
    });
  }
);
alert("Product Added Successfully")
 }

  return (
    <><Sidebar /><div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={(e) => setfiles(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="Title" onChange={handleChange} />
          <label>Stock</label>
          <select name="inStock" onChange={(e) => setstock(e.target.value)}>
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
          <label style={{ marginTop: 10 }}>Description</label>
          <input name="desc" type="text" placeholder="Description...." onChange={handleChange} />
          <label>Price</label>
          <input name="price" type="number" placeholder="Price" onChange={handleChange} />
          <label>Year</label>
          <input type="text" placeholder="year,year" onChange={handleYear} />
          <label>Color</label>
          <input type="text" placeholder="color" onChange={handleColor} />
          <label>Categories</label>
          <input type="text" placeholder="car, tesla" onChange={handleCat} />

        </div>
        <button className="addProductButton" onClick={handleClick}>Create</button>
      </form>
    </div></>
  );
}
