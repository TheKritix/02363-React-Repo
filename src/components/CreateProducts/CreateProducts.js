import React, { useState } from "react";
import "./CreateProducts.css";
import pic from "../AddBook/Images/CameraImage.svg"


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
  const [previewImg, setPreviewImage] = useState(pic);
  
  const saveFile = (e) => {
    setFileImage(e.target.files[0])
    setPreviewImage(URL.createObjectURL(e.target.files[0]))
  }

  const handleChangeProducts = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  const setDefaultState = () => {
    setPreviewImage(pic)
    setFileImage("")
    setProducts({
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
    })
  }

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

    if (!(productObject.Cond === "" && productObject.Lang === "" && productObject.price === "" && productObject.topic === "" && productObject.university === "" && productObject.title === "" )) {
      fetch("https://stoodle.bhsi.xyz/api/books", {
        method: 'POST',
        action: "/",
        body: formData
      }).then(() => {
        setDefaultState()
        console.log("Product added")
      })
    } else {
      alert.show("Please fill out the required fields")
    }
  }

  return (
    <div>
      <form className="topTest" onSubmit={submitProduct}>
        <div className="createProducts">
          <div className="leftCreateProducts">
              <img className="creaProdPreviewImg" src = {previewImg} ></img>
              <label id="creaProdUploadImg"> Upload an image<span className="requireMark">*</span> </label>
              <input id="creaProdImageInput" name="image" type="file" accept='image/*' onChange={saveFile} />
              <label id="creaProdDesc">Description: </label>
              <textarea id="creaProdDescInput" name="description" type="text" value={products.description} onChange={handleChangeProducts} rows="5" cols="60" ></textarea>

          </div>
          <div className="rightCreateProducts">
            <p className="requireMark">*Please fill out all required fields</p>
            <label id="creaProdTitle"> Title<span className="requireMark">*</span>: </label>
            <input id="creaProdTitleInput" name="title" type="text" value={products.title} required onChange={handleChangeProducts} />
            <div className="gridCreateProducts">
              <div className="gridItem">
                <label id="creaProdPrice">Price<span className="requireMark">*</span>: </label>
                <input id="creaProdPriceInput" name="price" type="number" value={products.price} required onChange={handleChangeProducts} />
              </div>
              <div className="gridItem">
                <label id="creaProdCon">Condition<span className="requireMark">*</span>: </label>
                <select id="creaProdConInput" name="cond" type="text" value={products.cond} required onChange={handleChangeProducts} >
                  <option value="">Select condition</option>
                  <option value="perfect">Perfect</option>
                  <option value="great">Great</option>
                  <option value="poor">Poor</option>
                </select>
              </div>
              <div className="gridItem">
                <label id="creaProdLang">Language<span className="requireMark">*</span>: </label>
                <select id="creaProdLangInput" name="lang" type="number" value={products.lang} required onChange={handleChangeProducts}>
                  <option value="">Select language</option>
                  <option value="danish">Danish</option>
                  <option value="english">English</option>
                </select>
              </div>
              <div className="gridItem">
                <label id="creaProdTopic">Topic<span className="requireMark">*</span>: </label>
                <input id="creaProdTopicInput" name="topic" type="text" value={products.topic} required onChange={handleChangeProducts} />
              </div>
            </div>
            <label id="creaProdUni">University<span className="requireMark">*</span>: </label>
            <input id="creaProdUniInput" name="university" type="text" value={products.university} required onChange={handleChangeProducts} />
            <label id="creaProdPub">Publisher: </label>
            <input id="creaProdPubInput" name="publisher" type="text" value={products.publisher} onChange={handleChangeProducts} />
            <label id="creaProdAuth"> Author: </label>
            <input id="creaProdAuthInput" name="author" type="text" value={products.author} onChange={handleChangeProducts} />

          <button id="creaProdSubmit" type="submit" >
            Submit
          </button>
        </div>
    </div>
      </form >
    </div >
  );
};
export default CreateProducts;
