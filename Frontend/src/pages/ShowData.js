import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const ShowData = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const token = Cookies.get("token");
    try {
      const response = await axios.get("https://data-hub-rho.vercel.app/user/get/data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(response.data); // Assuming response.data is an array
    } catch (err) {
      console.log(err);
    }
  };
  const createPDF = () => {};

  return (
    <div>
      <div className="flex justify-between  items-center mb-4">
        <Link to="/">
          <button className="bg-gray-500 mt-3 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Back to Home
          </button>
        </Link>
        <h1 className="text-2xl font-bold text-center flex-grow">
          Edit Question
        </h1>
        <button
          onClick={createPDF}
          className="bg-gray-500 mt-3 mr-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create PDF
        </button>
      </div>
      {items.map((item, index) => (
        <div key={index} className="mb-4 p-4 border rounded shadow">
          <h3 className="text-xl font-semibold">{item.question}</h3>
          <p className="text-gray-700">{item.answer}</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to={`/edit/data/${item._id}`}>
              <button className="flex items-center bg-green-400 text-white py-2 px-4 rounded">
                <i className="fas fa-edit mr-2"></i>Edit
              </button>
            </Link>
            <Link to={`/delete/data/${item._id}`}>
              <button className="flex items-center bg-red-400 text-white py-2 px-4 rounded">
                <i className="fas fa-trash-alt mr-2"></i>Delete
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowData;
