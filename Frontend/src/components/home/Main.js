import React, { useEffect, useState } from "react";
import Data from "./Data";
import axios from "axios";
import Cookies from "js-cookie";

const Main = () => {
  const [question, setQuestion] = useState("");
  const [Answer, setAnswer] = useState("");
  const [data, setData] = useState([]);

  const onSave = (e) => {
    e.preventDefault();
    postData();
    setQuestion("");
    setAnswer("");
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get("http://localhost:5555/user/get/data", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userdata = response.data;
      setData(userdata);

      console.log(data);
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const postData = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.post(
        "http://localhost:5555/user/post/data",
        { question: question, answer: Answer },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      getData(); // Refresh data after posting
    } catch (error) {
      console.error(
        "Error posting data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4">
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
            Save
          </button>
        </form>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        {data.slice(-5).map((item, index) => (
          <Data key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Main;
