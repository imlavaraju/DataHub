import React from "react";
import { Link } from "react-router-dom";

const Data = ({ item }) => {
  return (
    <div key={item._id} className="mb-4 p-4 border rounded shadow">
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
  );
};

export default Data;
