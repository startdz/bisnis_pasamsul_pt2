import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Navbar from "../../../Page/Admin/Layouts/Navbar";
import Footer from "../../../Page/Admin/Layouts/Footer";
import y3 from "/y3.jpg";
import axios from "axios";

const CreateK = () => {

  const navigate = useNavigate()

  const sekarang = new Date();
  const tanggal = sekarang.getDate();
  const days = sekarang.getDay();
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
  const bulan = sekarang.getMonth();
  const tahun = sekarang.getFullYear();

  const [titleOthers, setTitleOthers] = useState("");
  const [descProduct, setDescProduct] = useState("");
  const [jenisKurma, setJenisKurma] = useState("");
  const [hargaProduk, setHargaProduk] = useState("");
  const [stokProduk, setStokProduk] = useState(0);

  const [fileTerpilih, setFileTerpilih] = useState(null);

  const [fileGambar, setFileGambar] = useState("");
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("")
  const [expire, setExpire] = useState("")
  const [message, setMessage] = useState("")

  const [nameFile, setNameFile] = useState("")
  const [typeFile, setTypeFile] = useState("")
  const [binFile, setBinFile] = useState("")


  useEffect(() => {
    refreshToken();
  }, [])

  /**
   * File {
   * name, size, type}
   */

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

  const handleFileTerpilih = (data) => {
    const file = data.target.files[0];
    setFileTerpilih(file);
    setNameFile(file.name)
    setTypeFile(file.type)
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileGambar(reader.result);
        setBinFile(reader.result)
      };
      reader.readAsDataURL(file);
    } else {
      setFileGambar("");
    }
  };

  const SaveProductKurma = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('title', titleOthers)
    formData.append('image', fileTerpilih)
    formData.append('description', descProduct)
    formData.append('jenis', jenisKurma)
    formData.append('data', binFile)
    formData.append('originalName', nameFile)
    formData.append('ContentType', typeFile)
    formData.append('url', fileGambar)
    formData.append('price', hargaProduk)
    formData.append('stock', stokProduk)

    try {
      await axiosJWT.post("http://localhost:5000/api/product/kurma", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      })
      navigate("/project/admin/dashboard/mkurma")
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      }
    }
  };

  return (
    <React.Fragment>
      <Navbar username={username} />
      <div className="w-full bg-base-100">
        <div className="container p-4 mx-auto">
          {/* start navigasi */}
          <div className="divider pt-16">
            <div className="flex w-full justify-between gap-4">
              <div>
                <Link
                  to={"/project/admin/dashboard/ckurma/create"}
                  className="px-4 py-2 bg-zinc-800 font-bold text-base-100 rounded-sm hover:rounded-md hover:bg-zinc-900 transition-all duration-300 ease-in-out hover:text-sm">
                  Tambah Kurma 🖐
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
          {/* end navigasi */}
          {/* startBreadcrumbs */}
          <div className="text-sm breadcrumbs p-4">
            <ul>
              <li>
                <Link to={"/project/admin/dashboard"}>
                  Control Panel
                </Link>
              </li>
              <li>
                <Link to={"/project/admin/dashboard"}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to={"/project/admin/dashboard/mkurma"}>
                  Kurma
                </Link>
              </li>
            </ul>
          </div>
          {/* end breadcrumbs*/}
          <div className="divider font-bold">
            😴 Form Tambah Produk Kurma
          </div>
          {/* start form-create produk kurma */}
          <div className="flex flex-col justify-between items-center gap-2 md:flex-row lg:flex-row-reverse lg:max-w-4xl lg:mx-auto">
            <form
              action=""
              onSubmit={SaveProductKurma}
              className="border p-2 shadow-xl rounded-lg flex flex-col"
              encType="multipart/form-data">
              <div className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                  <span className="label-text">
                    Masukan Title Produk
                  </span>
                  <span className="label-text-alt italic">
                    Enter your title product
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Masukan Title Produk Baru..."
                  className="input input-bordered w-full max-w-xs rounded"
                  value={titleOthers}
                  onChange={(e) => {
                    setTitleOthers(e.target.value);
                  }}
                  required
                />
                <label className="label">
                  <span className="label-text-alt text-red-600">
                    {!message ? '' : message}
                  </span>
                  <span className="label-text-alt">
                    {`${hariIni} , ${tanggal}/${bulan}/${tahun}`}
                  </span>
                </label>
              </div>

              <div className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                  <span className="label-text">
                    Masukan Desc Produk
                  </span>
                  <span className="label-text-alt italic">
                    Enter your Desc product
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Masukan Desc Produk Baru..."
                  className="input input-bordered w-full max-w-xs rounded"
                  value={descProduct}
                  onChange={(e) => {
                    setDescProduct(e.target.value);
                  }}
                  required
                />
                <label className="label">
                  <span className="label-text-alt text-red-600">
                    {!message ? '' : message}
                  </span>
                  <span className="label-text-alt">
                    {`${hariIni} , ${tanggal}/${bulan}/${tahun}`}
                  </span>
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Jenis Kurma</span>
                  <span className="label-text-alt italic">Choose the taste</span>
                </label>
                <select value={jenisKurma} onChange={e => setJenisKurma(e.target.value)}  className="select select-bordered">
                  <option value={""}>Pilih Jenis</option>
                  <option value={"Kurma Ajwa"}>Kurma Ajwa</option>
                  <option value={"Kurma Safawi"}>Kurma Safawi</option>
                  <option value={"Kurma Muda"}>Kurma Muda</option>
                  <option value={"Kurma Mazafati"}>Kurma Mazafati</option>
                  <option value={"Kurma Barhi"}>Kurma Barhi</option>
                  <option value={"Kurma Medjool"}>Kurma Medjool</option>
                  <option value={"Kurma Sayer"}>Kurma Sayer</option>
                  <option value={"Kurma Sukari"}>Kurma Sukari</option>
                  <option value={"Kurma Zahidi"}>Kurma Zahidi</option>
                  <option value={"Kurma Ruthob"}>Kurma Ruthob</option>
                </select>
                <label className="label">
                  <span className="label-text-alt">{!message ? '' : message}</span>
                  <span className="label-text-alt">{`${hariIni} , ${tanggal}/${bulan}/${tahun}`}</span>
                </label>
              </div>

              <div className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                  <span className="label-text">
                    Masukan Harga Produk
                  </span>
                  <span className="label-text-alt italic">
                    Enter your Price product
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Rp 20.000"
                  className="input input-bordered w-full max-w-xs rounded"
                  value={hargaProduk}
                  onChange={(e) => {
                    setHargaProduk(e.target.value);
                  }}
                  required
                />
                <label className="label">
                  <span className="label-text-alt text-red-600">
                    {!message ? '' : message}
                  </span>
                  <span className="label-text-alt">
                    {`${hariIni} , ${tanggal}/${bulan}/${tahun}`}
                  </span>
                </label>
              </div>

              <div className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                  <span className="label-text">
                    Masukan Stock Produk
                  </span>
                  <span className="label-text-alt italic">
                    Enter your Stock product
                  </span>
                </label>
                <input
                  type="number"
                  min={0}
                  placeholder="000"
                  className="input input-bordered w-full max-w-xs rounded"
                  value={stokProduk}
                  onChange={(e) => {
                    setStokProduk(e.target.value);
                  }}
                  required
                />
                <label className="label">
                  <span className="label-text-alt text-red-600">
                    {!message ? '' : message}
                  </span>
                  <span className="label-text-alt">
                    {`${hariIni} , ${tanggal}/${bulan}/${tahun}`}
                  </span>
                </label>
              </div>

              <div className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                  <span className="label-text">Upload Gambar</span>
                  <span className="label-text-alt">
                    Insert an Image
                  </span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                  onChange={handleFileTerpilih}
                />
                <label className="label">
                  <span className="label-text-alt text-red-600">
                    {!message ? '' : message}
                  </span>
                  <span className="label-text-alt">{console.log()}</span>
                </label>
              </div>

              <div className="font-bold text-base-100 group">
                <button
                  className="py-2 block w-full bg-zinc-800 group-hover:rounded-lg transition-all rounded duration-500 ease-in-out group-hover:bg-zinc-900 group-hover:w-1/2 mx-auto"
                  type="submit">
                  😴Tambah Baru
                </button>
              </div>
            </form>
            {/* start Preview image & button sumbit */}
            {fileGambar && (
              <div className="w-3/4 lg:w-2/3 flex items-center p-4">
                <div className="group">
                  <img
                    src={fileGambar}
                    alt=""
                    className="rounded-lg group-hover:scale-110 transition-all duration-500 ease-in-out lg:group-hover:scale-105"
                  />
                </div>
              </div>
            )}
            {/* end Preview image & button sumbit */}

          </div>
          {/* end form-create produk lain */}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default CreateK