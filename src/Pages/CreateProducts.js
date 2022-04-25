
import React, { useState } from "react";
import "./CreateProducts.css";


export const CreateProducts = () => {
  const [products, setProducts] = useState([
    {
      title: "",
      publisher: "",
      author: "",
      price: 0,
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
      title: products.title,
      publisher: products.publisher,
      author: products.author,
      price: products.price,
      description: products.description,
      university: products.university,
      cond: products.cond,
      lang: products.lang,
      topic: products.topic,
      image: "products.image"
    };
    console.log(productObject)
    if (!(productObject.Cond === "" && productObject.Lang === "")) {
      fetch("https://stoodle.bhsi.xyz/api/books", {
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
      }).then(() => {
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
          <div className="leftCreateProducts">
            <label id="bkImage">Image: </label>
            <input id="bkImageInput" name="image" type="image" value={products.image} onChange={handleChangeProducts} />
            <label id="bkDesc">Description: </label>
            <input id="bkDescInput" name="description" type="text" value={products.description} onChange={handleChangeProducts} />
          </div>
          <div className="rightCreateProducts">
            <p className="requireMark">*Please fill out all required fields</p>
            <label id="bkTitle"> Title<span className="requireMark">*</span>: </label>
            <input id="bkTitleInput" name="title" type="text" value={products.title} required onChange={handleChangeProducts} />
            <div className="gridCreateProducts">
              <div className="gridItem">
                <label id="bkPrice">Price<span className="requireMark">*</span>: </label>
                <input id="bkPriceInput" name="price" type="number" value={products.price} required onChange={handleChangeProducts} />
              </div>
              <div className="gridItem">
                <label id="bkCon">Condition<span className="requireMark">*</span>: </label>
                <select id="bkConInput" name="cond" type="text" value={products.cond} required onChange={handleChangeProducts} >
                  <option value="">Select condition</option>
                  <option value="perfect">Perfect</option>
                  <option value="great">Great</option>
                  <option value="poor">Poor</option>
                </select>
              </div>
              <div className="gridItem">
                <label id="bkLang">Language<span className="requireMark">*</span>: </label>
                <select id="bkLangInput" name="lang" type="number" value={products.lang} required onChange={handleChangeProducts}>
                  <option value="">Select language</option>
                  <option value="danish">Danish</option>
                  <option value="english">English</option>
                </select>
              </div>
              <div className="gridItem">
                <label id="bkTopic">Topic<span className="requireMark">*</span>: </label>
                <input id="bkTopicInput" name="topic" type="text" value={products.topic} required onChange={handleChangeProducts} />
              </div>
            </div>
            <label id="bkUni">University<span className="requireMark">*</span>: </label>
            <input id="bkUniInput" name="university" type="text" value={products.university} required onChange={handleChangeProducts} />
            <label id="bkPub">Publisher: </label>
            <input id="bkPubInput" name="publisher" type="text" value={products.publisher} onChange={handleChangeProducts} />
            <label id="bkAuth"> Author: </label>
            <input id="bkAuthInput" name="author" type="text" value={products.author} onChange={handleChangeProducts} />

            <button id="bkSubmit" type="submit" >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CreateProducts;
/*
new URLSearchParams({
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
      */ 