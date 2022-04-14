import { Alert } from "bootstrap";
import React, { useState } from "react";
import "./CreateProducts.css";


export const CreateProducts = () => {
  const [products, setProducts] = useState([
    {
      title: "",
      publisher: "",
      author: "",
      price: "",
      description: "",
      university: "",
      cond: "",
      course: "",
      lang: "",
      topic: "",
      image: ""
    },
  ])

  const handleChangeProducts = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  const submitProduct = (e) => {
    e.preventDefault();
    const productObject = {
      Title: products.title,
      Publisher: products.publisher,
      Author: products.author,
      Price: products.price,
      Description: products.description,
      University: products.university,
      Cond: products.cond,
      Lang: products.lang,
      Topic: products.topic,
      Image: "products.image"
    };
    console.log(productObject)
    if (!(productObject.Cond == "" && productObject.Lang == "")) {
      fetch("http://localhost:3001/api/books/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: new URLSearchParams({
          'title': `${products.title}`,
          'publisher': `${products.publisher}`,
          'author': `${products.author}`,
          'price': `${products.price}`,
          'description': `${products.description}`,
          'university': `${products.university}`,
          'cond': `${products.cond}`,
          'lang': `${products.lang}`,
          'topic': `${products.topic}`,
          'image': `${products.image}`
      })
      }).then(()=>{
        console.log("Product added")
      })
    } else {
      alert.show("Please fill out the required fields")
    }
  }

  /*
.then(response => response.json())
      .then(result => {
        console.log("Success: ", result);
      }).catch(error => {
        console.log("Error: ", error);
      });
  */
  return (
    <div>
      <form className="topTest" onSubmit={submitProduct}>
        <h1>Create post</h1>
        <div className="createProducts">
        <p className="requireMark">*Please fill out all required fields</p>
          <label id="bkTitle"> Title<span className="requireMark">*</span>: </label>
          <input id="bkTitleInput" name="title" type="text" value={products.title} required onChange={handleChangeProducts} />
          <label id="bkPub">Publisher: </label>
          <input id="bkPubInput" name="publisher" type="text" value={products.publisher} onChange={handleChangeProducts} />
          <label id="bkAuth"> Author: </label>
          <input id="bkAuthInput" name="author" type="text" value={products.author} onChange={handleChangeProducts} />
          <label id="bkPrice">Price<span className="requireMark">*</span>: </label>
          <input id="bkPriceInput" name="price" type="number" value={products.price} required onChange={handleChangeProducts} />
          <label id="bkDesc">Description: </label>
          <input id="bkDescInput" name="description" type="text" value={products.description} onChange={handleChangeProducts} />
          <label id="bkUni">University<span className="requireMark">*</span>: </label>
          <input id="bkUniInput" name="university" type="text" value={products.university} required onChange={handleChangeProducts} />
          <label id="bkCon">Condition<span className="requireMark">*</span>: </label>
          <select id="bkConInput" name="cond" type="text" value={products.cond} required onChange={handleChangeProducts} >
            <option value="">Select condition</option>
            <option value="perfect">Perfect</option>
            <option value="great">Great</option>
            <option value="poor">Poor</option>
          </select>
          <label id="bkLang">Language<span className="requireMark">*</span>: </label>
          <select id="bkLangInput" name="lang" type="number" value={products.lang} required onChange={handleChangeProducts}>
            <option value="">Select language</option>
            <option value="danish">Danish</option>
            <option value="english">English</option>
          </select>
          <label id="bkTopic">Topic<span className="requireMark">*</span>: </label>
          <input id="bkTopicInput" name="topic" type="text" value={products.topic} required onChange={handleChangeProducts} />
          <label id="bkImage">Image: </label>
          <input id="bkImageInput" name="image" type="image" value={products.image} onChange={handleChangeProducts} />
          <button id="bkSubmit" type="submit" >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateProducts;
