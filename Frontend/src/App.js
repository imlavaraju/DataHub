import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage";
import SignUppage from "./pages/SignUppage";
import EditQuestion from "./pages/EditQuestion";
import DeleteQuestion from "./pages/DeleteQuestion";
import ShowData from "./pages/ShowData";
import ProtectedRoute from "./components/protectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Loginpage />} />
      <Route path="/Signup" element={<SignUppage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/edit/data/:id" element={<EditQuestion />} />
        <Route path="/delete/data/:id" element={<DeleteQuestion />} />
        <Route path="/show/data" element={<ShowData />} />
      </Route>
    </Routes>
  );
};

export default App;
