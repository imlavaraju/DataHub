import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const DeleteQuestion = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const onDelete = () => {
    const token = Cookies.get("token");
    console.log(id);
    axios
      .post(
        `http://localhost:5555/user/delete/data/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.error(
          "Error deleting data:",
          err.response ? err.response.data : err.message
        );
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Are you sure you want to delete this Data?
      </h1>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onDelete}
        >
          Delete
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteQuestion;
