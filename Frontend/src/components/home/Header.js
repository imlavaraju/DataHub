import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logout = () => {
    Cookies.remove("token"); // Remove the token cookie
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <ul className="flex items-center space-x-6">
            <li className="font-bold cursor-pointer hover:bg-black ">
              DATAHUB
            </li>
          </ul>
        </div>
        <ul className="flex items-center space-x-4 relative">
          <Link to="/show/data">
            <li className="font-medium hover:bg-white">All Data</li>
          </Link>
          <li onClick={toggleDropdown} className="cursor-pointer">
            <MDBIcon far icon="user" size="1x" />
          </li>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-32 w-48 bg-white text-black border border-gray-300 rounded-md shadow-lg z-50">
              <ul>
                <li
                  className="px-4 py-2 hover:bg-gray-100"
                  onClick={toggleDropdown}
                >
                  <Link to="/">My Profile</Link>
                </li>
                <li
                  onClick={logout}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
