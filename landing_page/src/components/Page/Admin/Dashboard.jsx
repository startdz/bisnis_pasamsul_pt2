import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import Content from "../Content/Content";

const Dashboard = () => {

  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [listAdmin, setListAdmin] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    admin();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/auth/security/"
      );
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setUsername(decoded.username);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/auth/login");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get(
          "http://localhost:5000/api/auth/security/"
        );
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setUsername(decoded.username);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const admin = async () => {
    const response = await axiosJWT.get(
      "http://localhost:5000/api/business/account/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setListAdmin(response.data);
  };

  return (
    <React.Fragment>
      <Navbar username={username} />
      <div className="w-full bg-base-100 min-h-screen">
        {/* start lg:sidebar/flex md:grid/flex sm:block */}
        <div className="container mx-auto p-4 pt-16">
          {/* start breadcrumbs */}
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to={"/project/admin/dashboard"}>Control Panel</Link>
              </li>
              <li>
                <Link to={"/project/admin/dashboard"}>Dashboard</Link>
              </li>
            </ul>
          </div>
          {/* end breadcrumbs */}
          {/* Start Content */}
          <Content />
          {/* end Content */}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Dashboard;
