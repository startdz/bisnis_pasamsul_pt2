import React, { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  useNavigate,
  Link,
  useParams,
} from "react-router-dom";
import Navbar from "../Admin/Layouts/Navbar";
import Footer from "../Admin/Layouts/Footer";

const OthersUpdate = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState(null);
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [preview, setPreview] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const waktu = new Date()
  const tahun = waktu.getFullYear()
  const bulan = waktu.getMonth()
  const tanggal = waktu.getDate()
  const days = waktu.getDay()
  const hari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ];
  const hariIni = hari[days];

  const refreshToken = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/auth/security/"
      );
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
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

  const _get = async () => {
    try {
      const update = await axiosJWT.get(
        `http://localhost:5000/api/product/others/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle(update.data.title);
      setDesc(update.data.description);
      // setImg(update.data.image);
      setUrl(update.data.url);
      setPrice(update.data.price);
      setStock(update.data.stock);

    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message)
      }
    }
  };

  const loadImg = (e) => {
    const img = e.target.files[0]
    setImg(img)
    setPreview(URL.createObjectURL(img))
  }

  useEffect(() => {
    refreshToken();
    _get();
  }, []);

  const updateOthers = async (e) => {
    e.preventDefault()

    const updateData = new FormData()
    updateData.append('title', title)
    updateData.append('description', desc)
    updateData.append('image', img)
    updateData.append('price', price)
    updateData.append('stock', stock)

    try {
      await axiosJWT.put(`http://localhost:5000/api/product/others/${id}`, updateData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      })
      navigate("/project/admin/dashboard/cothers/")
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      }
    }
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="w-full p-5 my-2 bg-base-100">
        <div className="container mx-auto">
          {/* start navigasi */}
          <div className="divider">
            <div className="flex w-full justify-between gap-2">
              <div className="group">
                <Link
                  to={""}
                  className="px-5 py-2 bg-zinc-800 text-base-100 rounded group-hover:bg-zinc-900 group-hover:text-sm duration-300 transition-all ease-in-out">
                  +Baru
                </Link>
              </div>
              <div>
                <Link
                  to={""}
                  className="px-5 py-2 bg-zinc-800 text-base-100 rounded">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
          {/* end navigasi */}
          {/* start form card */}
          <div className="mb-4 px-7 mt-5 border py-5 text-center rounded shadow-lg uppercase font-bold group hover:bg-zinc-900 transition-all duration-500 ease-in-out hover:rounded-lg hover:px-4">
            <span className="group-hover:text-base-100">Form Update Produk Lain</span>
          </div>
          <div className="flex flex-col w-full gap-1 items-center">
            <form action="" className="border p-1 rounded shadow-lg" onSubmit={updateOthers}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Title Baru Produk</span>
                  <span className="label-text-alt italic">Enter new Title Produk</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={title} onChange={e => setTitle(e.target.value)} />
                <label className="label">
                  <span className="label-text-alt">{message}</span>
                  <span className="label-text-alt">{`${hariIni}, ${tanggal}/${bulan}/${tahun}`}</span>
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Deskripsi Baru</span>
                  <span className="label-text-alt italic">New Desc</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={desc} onChange={e => setDesc(e.target.value)}/>
                <label className="label">
                  <span className="label-text-alt">{message}</span>
                  <span className="label-text-alt">{`${hariIni}, ${tanggal}/${bulan}/${tahun}`}</span>
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Harga Baru</span>
                  <span className="label-text-alt italic">New Price</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={price} onChange={e => setPrice(e.target.value)}/>
                <label className="label">
                  <span className="label-text-alt">{message}</span>
                  <span className="label-text-alt">{`${hariIni}, ${tanggal}/${bulan}/${tahun}`}</span>
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Ubah Stok</span>
                  <span className="label-text-alt italic">Update Stock?</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={stock} onChange={e => setStock(e.target.value)}/>
                <label className="label">
                  <span className="label-text-alt">{message}</span>
                  <span className="label-text-alt">{`${hariIni}, ${tanggal}/${bulan}/${tahun}`}</span>
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Upload Gambar</span>
                  <span className="label-text-alt italic">Upload Image</span>
                </label>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={loadImg} />
                <label className="label">
                  <span className="label-text-alt">{message}</span>
                  <span className="label-text-alt">{`${hariIni}, ${tanggal}/${bulan}/${tahun}`}</span>
                </label>
              </div>

              <div className="mb-3 text-center">
                <button className="block w-2/3 mx-auto px-5 py-2 bg-zinc-800 text-white rounded hover:rounded-lg transition-all duration-300 ease-in-out active:ring-1 active:ring-zinc-400 hover:bg-zinc-900 hover:w-full" type="submit">
                  Update
                </button>
              </div>

            </form>

            {
              !preview ? (
                <div className="avatar group flex flex-col">
                  <div className="w-3/4 mask mask-squircle mx-auto group-hover:w-full transition-all duration-700 ease-in-out">
                    <img src={url} className="block" />
                  </div>
                </div>
              ) : (
                <div className="avatar group flex flex-col">
                  <div className="w-3/4 mask mask-squircle mx-auto group-hover:w-full transition-all duration-700 ease-in-out">
                    <img src={preview} className="block" />
                  </div>
                </div>
              )
            }



          </div>
          {/* end form card */}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default OthersUpdate;
