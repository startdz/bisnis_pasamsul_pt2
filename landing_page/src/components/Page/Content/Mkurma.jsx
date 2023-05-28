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

  const [dataKurma, setDataKurma] = useState([])

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
    _getDataKurma()
  }, [])

  const _getDataKurma = async () => {
    try {
      const response = await axiosJWT.get('http://localhost:5000/api/product/kurma', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setDataKurma(response.data)
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      }
    }
  }

  const dropOther = async (id) => {
    try {
      await axiosJWT.delete(`http://localhost:5000/api/product/kurma/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      _getDataKurma()
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      }
    }
  }

  const cancel = () => {
    window.location.reload()
  }

  return (
    <React.Fragment>
      {/* start mobile version & sm-device */}
      <Navbar username={username}/>
      <div className="w-full h-auto bg-base-100">
        <div className="container mx-auto p-4 lg:max-w-4xl">
          {/* start navigasi */}
          <div className="divider pt-16">
            <div className="flex w-full justify-between gap-4">
              <div>
                <Link
                  to={"/project/admin/dashboard/ckurma/create"}
                  className="px-4 py-2 bg-zinc-800 font-bold text-base-100 rounded-sm hover:rounded-md hover:bg-zinc-900 transition-all duration-300 ease-in-out hover:text-sm">
                  Tambah Produk🖐
                </Link>
              </div>
              <div>
                <Link
                  to={"/project/admin/dashboard/"}
                  className="px-4 py-2 bg-zinc-800 font-bold text-base-100 rounded-sm hover:rounded-md hover:bg-zinc-900 transition-all duration-300 ease-in-out hover:text-sm">
                  Lihat Dashboard😎
                </Link>
              </div>
            </div>
          </div>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to={"/project/admin/dashboard"}>Control Panel</Link>
              </li>
              <li>
                <Link to={"/project/admin/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <Link to={"/project/admin/dashboard/ckurma"}>Kurma</Link>
              </li>
            </ul>
          </div>
          {!message ? '' : (<div className="text-center font-bold">
            {message}
          </div>)}
          {/* end navigasi */}
          {/* start Content */}
          <div className="grid grid-cols-2 gap-2 pt-4 md:grid-cols-3 md:gap-3 lg:flex lg:flex-wrap lg:justify-around">
            {/* start card */}
            {dataKurma.map(other => (
              <div className="aspect-square rounded p-1 shadow-lg group sm:p-2 lg:w-2/5 lg:border-2 lg:aspect-video" key={other._id}>
                <img
                  src={other.url}
                  alt="product"
                  className="rounded-md border-b group-hover:scale-95 group-hover:-rotate-3 transition-all duration-500 ease-in-out w-full"
                />
                <div className="border-t mt-2 flex justify-between">
                  <div className="font-semibold text-sm flex flex-col justify-between sm:text-base lg:text-lg">
                    <div className="border-b">Title:</div>
                    <div className="border-b">Jenis:</div>
                    <div className="border-b">Harga:</div>
                    <div className="border-b">Stok:</div>
                  </div>
                  <div className="font-bold text-sm flex flex-col justify-between text-end sm:text-base lg:text-lg">
                    <div className="truncate border-b">
                      {other.title}
                    </div>
                    <div className="truncate border-b">
                      {other.jenis}
                    </div>
                    <div className="truncate border-b">{other.price}</div>
                    <div className="truncate border-b">{other.stock} Pics/Pack</div>
                  </div>
                </div>

                <div className="flex justify-between mt-4 flex-row-reverse font-bold border-t pt-2 text-center sm:p-2">
                  <label className="px-4 py-2 bg-zinc-800 text-base-100 rounded hover:bg-zinc-900 hover:rounded-md transition-all duration-300 ease-in-out hover:text-sm" htmlFor="my-modal-6">
                    Hapus
                  </label>
                  <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                      <p className="py-4">Menghapus produk ini sayang lho🙂</p>
                      <h3 className="font-bold text-lg">Yakin Hapus Produk ini ?</h3>
                      <div className="flex justify-around mt-4 mb-2">
                        <button className="btn" onClick={cancel}>Batal</button>
                        <button onClick={() => dropOther(other._id)}  className="btn">Hapus</button>
                      </div>
                    </div>
                  </div>
                  <Link className="px-4 py-2 bg-zinc-800 text-base-100 rounded hover:bg-zinc-900 hover:rounded-md transition-all duration-300 ease-in-out hover:text-sm" to={`/project/admin/dashboard/ckurma/${other._id}`}>
                    Ubah
                  </Link>
                </div>
              </div>
            ))}


            {/* end card */}
          </div>
          {/* end Content */}
        </div>
      </div>
      {/* end mobile version & sm-device */}
      <React.Fragment>
        <div className="w-full">
          <div className="container max-w-4xl mx-auto">
            <div className="divider">
              🙂
            </div>
          </div>
        </div>
      </React.Fragment>
      <Footer />
    </React.Fragment>
  );
};

export default Mkurma;
