import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../Page/Admin/Layouts/Navbar";
import Footer from "../../../Page/Admin/Layouts/Footer";
import y3 from "/y3.jpg";
import axios from "axios";

const CreateO = () => {
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
 const [hargaProduk, setHargaProduk] = useState("");
 const [stokProduk, setStokProduk] = useState(0);
 const [fileTerpilih, setFileTerpilih] = useState(null);
 const [fileGambar, setFileGambar] = useState("");

 const handleFileTerpilih = (data) => {
  const file = data.target.files[0];
  setFileTerpilih(file);

  if (file) {
   const reader = new FileReader();
   reader.onloadend = () => {
    setFileGambar(reader.result);
   };
   reader.readAsDataURL(file);
  } else {
   setFileGambar("");
  }
 };

 const SaveOthersProduct = async () => {
  
 };

 return (
  <React.Fragment>
   <Navbar />
   <div className="w-full p-4 bg-base-100 my-2">
    <div className="container mx-auto">
     {/* start navigasi */}
     <div className="divider">
      <div className="flex w-full justify-between gap-4">
       <div>
        <Link
         to={"/project/admin/dashboard/cothers/create"}
         className="px-4 py-2 bg-zinc-800 font-bold text-base-100 rounded-sm hover:rounded-md hover:bg-zinc-900 transition-all duration-300 ease-in-out hover:text-sm">
         ➕Produk Lain🖐
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
     <div className="text-sm breadcrumbs">
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
      😴 Form Tambah Produk Lain
     </div>
     {/* start form-create produk lain */}
     <div>
      <form
       action=""
       onSubmit={SaveOthersProduct}
       className="border p-2 shadow-xl rounded-lg"
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
          {"tempat notif kesalahan!"}
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
          {"tempat notif kesalahan!"}
         </span>
         <span className="label-text-alt">
          {`${hariIni} , ${tanggal}/${bulan}/${tahun}`}
         </span>
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
          {"tempat notif kesalahan!"}
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
          {"tempat notif kesalahan!"}
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
          notif kesalahan
         </span>
         <span className="label-text-alt">{"ahayy"}</span>
        </label>
       </div>

       {/* start Preview image & button sumbit */}
       {fileGambar && (
        <div className="w-full flex justify-between items-center p-4">
         <div className="w-1/2 font-bold text-base-100 group">
          <button
           className="py-2 px-5 block bg-zinc-700 group-hover:rounded-md transition-all duration-500 ease-in-out group-hover:bg-zinc-900"
           type="submit">
           ➕Tambah Baru
          </button>
         </div>
         <div className="w-1/2 group">
          <img
           src={fileGambar}
           alt=""
           className="rounded-lg group-hover:scale-110 transition-all duration-500 ease-in-out"
          />
         </div>
        </div>
       )}
       {/* end Preview image & button sumbit */}

      </form>
     </div>
     {/* end form-create produk lain */}
    </div>
   </div>
   <Footer />
  </React.Fragment>
 );
};

export default CreateO;
