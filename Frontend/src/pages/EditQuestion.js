import { useEffect, useState } from "react";
import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const EditQuestion = () => {
  const [question, setQuestion] = useState("");
  const [Answer, setAnswer] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const token = Cookies.get("token");
    console.log(token);
    await axios
      .get(`https://data-hub-rho.vercel.app/user/get/singledata/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAnswer(res.data.answer);
        setQuestion(res.data.question);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  const onSave = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    await axios
      .put(
        `http://localhost:5555/user/update/data/${id}`,
        { question: question, answer: Answer },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
    // Add your update logic here
    navigate("/");
  };

  const createPDF = () => {
    // Logic to create PDF
    console.log("Creating PDF...");
  };

  return (
    <div className="container mx-auto p-4">
      <Link to="/">
        <button className="bg-gray-500 mt-3 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Back to Home
        </button>
      </Link>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-center flex-grow">
          Edit Question
        </h1>
      </div>
      <form onSubmit={onSave}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="question"
          >
            Question
          </label>
          <input
            id="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Answer"
          >
            Answer
          </label>
          <textarea
            id="Answer"
            value={Answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditQuestion;
