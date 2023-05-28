import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Admin/Layouts/Navbar";
import Footer from "../Admin/Layouts/Footer";
import y3 from "/y3.jpg";

const Mkurma = () => {

  const [token, setToken] = useState("")
  const [username, setUsername] = useState("")
  const [expire, setExpire] = useState("")
  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/security/')
      setToken(response.data.accessToken)
      const decoded = jwtDecode(response.data.accessToken)
      setUsername(decoded.username)
      setExpire(decoded.exp)
    } catch (error) {
      if (error.response) {
        navigate("/auth/login")
      }
    }
  }

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
        const decoded = jwtDecode(response.data.accessToken);
        setUsername(decoded.username);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    refreshToken();
  })

  return (
    <React.Fragment>
      <Navbar username={username} />
      <div className="w-full p-4 bg-base-100">
        <div className="container mx-auto max-w-sm lg:max-w-lg">
          <div className="divider pt-16">
            <div className="flex justify-between gap-2 font-bold text-base-100 text-center">
              <Link to={""} className="px-5 py-2 bg-zinc-800 rounded hover:rounded-lg hover:bg-zinc-900 transition-all duration-300 ease-in-out hover:scale-95">Tambah🖐</Link>
              <Link to={""} className="px-5 py-2 bg-zinc-800 rounded hover:rounded-lg hover:bg-zinc-900 transition-all duration-300 ease-in-out hover:scale-95">Lihat😊</Link>
            </div>
          </div>
        </div>
      </div>

      {/* start Content */}
      <React.Fragment>
        <div className="w-full bg-base-100 p-4">
          <div className="container max-w-sm mx-auto">
            <div className="flex gap-2 justify-between">
              <div className="aspect-square rounded-md shadow-xl group transition-all duration-500 ease-in-out">
                <div className="shadow-lg p-2">
                  <img src={y3} alt="" className="rounded shadow-lg hover:scale-105 transition-all duration-500 ease-in-out"/>
                </div>
                <div className="p-1 flex justify-between gap-1">
                  <div className="w-1/4 font-semibold flex flex-col justify-between text-sm">
                    <p>Title</p>
                    <p>Harga</p>
                    <p>Jenis</p>
                    <p>Stock</p>
                  </div>
                  <div className="w-3/4 text-sm font-bold flex flex-col justify-between items-end">
                    <p className="truncate">Kurma Mantap</p>
                    <p className="truncate">Rp. 12.000</p>
                    <p className="truncate">Impor</p>
                    <p className="truncate">15 Pack</p>
                  </div>
                </div>
                <div className="flex justify-between flex-row-reverse  p-1 mt-2 mb-4 text-base-100 font-bold scale-95">
                  <button className="px-5 py-2 bg-zinc-800 rounded hover:scale-90 hover:rounded-lg hover:bg-zinc-900 transition-all duration-300 ease-in-out">Hapus</button>
                  <button className="px-5 py-2 bg-zinc-800 rounded hover:scale-90 hover:rounded-lg hover:bg-zinc-900 transition-all duration-300 ease-in-out">Ubah</button>
                </div>
              </div>
              <div className="aspect-square border">
                <div>
                  <img src={y3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
      {/* end Content */}

      <Footer />
    </React.Fragment>
  );
};

export default Mkurma;
