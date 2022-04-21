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
    },
  ])
  const [fileImage, setFileImage] = useState();

  const saveFile = (e) => {
    setFileImage(e.target.files[0])
  }

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
    };

    const formData = new FormData();
    formData.append('image', fileImage);
    formData.append('title', products.title);
    formData.append('publisher', products.publisher);
    formData.append('author', products.author);
    formData.append('price', products.price);
    formData.append('description', products.description);
    formData.append('university', products.university);
    formData.append('cond', products.cond);
    formData.append('lang', products.lang);
    formData.append('topic', products.topic);

    console.log(productObject)
    console.log(fileImage)
    console.log(fileImage.name)
    console.log(formData)

    if (!(productObject.Cond === "" && productObject.Lang === "")) {
      fetch("https://stoodle.bhsi.xyz/api/books", {
        method: 'POST',
        action: "/",
      body: formData
      }).then(() => {
        console.log("Product added")
      })
    } else {
      alert.show("Please fill out the required fields")
    }
  }

  return (
    <div>
      <form className="topTest" onSubmit={submitProduct}>
        <h1>Create post</h1>
        <div className="createProducts">
          <div className="leftCreateProducts">
            <label id="bkImage">Image: </label>
            <input id="bkImageInput" name="image" type="file" accept='image/*' onChange={saveFile} />
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
