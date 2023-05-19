import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Admin/Layouts/Navbar";
import Footer from "../Admin/Layouts/Footer";
import y3 from "/y3.jpg";

const Mkurma = () => {
  return (
    <React.Fragment>
      <Navbar />
      {/* ------------------- */}
      {/* Mobile Version */}
      <div className="container mx-auto px-2 md:hidden">
        {/* start Breadcrumbs */}
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to={"/project/admin/dashboard"}>Control Panel</Link>
            </li>
            <li>
              <Link to={"/project/admin/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/project/admin/dashboard/mkurma"}>Kurma</Link>
            </li>
          </ul>
        </div>
        {/* end Breadcrumbs */}
        <div className="divider">
          <Link
            to={"/"}
            className="py-2 px-4 bg-zinc-800 font-bold text-zinc-200 rounded-sm hover:rounded-md transition-all duration-300 ease-in-out hover:bg-zinc-900">
            + Kurma Baru🖐
          </Link>
        </div>

        {/* start Card Yoghurt */}
        <div className="grid grid-cols-2 gap-2 pt-3">
          {/* start Card */}
          <div className="aspect-[4/3] shadow-xl border rounded-md">
            <div className="p-1 w-full">
              <div className="w-full flex justify-center">
                <img
                  src={y3}
                  className="w-3/4 rounded-lg shadow-md hover:rounded-lg hover:scale-75 hover:-rotate-45 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="text-sm mt-2">
                <div className="flex w-full mb-2">
                  <div className="w-1/4 h-max flex flex-col justify-between font-semibold">
                    <p>Title:</p>
                    <p>Stok:</p>
                    <p>Harga:</p>
                  </div>
                  <div className="w-full flex flex-col justify-between items-end font-bold truncate">
                    <input
                      value={"Yoghurt Top Markotop"}
                      className="text-end"
                    />
                    <p>120 Pics</p>
                    <p>Rp. 12.000</p>
                  </div>
                </div>
                <div className="w-full font-bold flex flex-row-reverse justify-between border-b border-t">
                  <button className="px-4 py-2 bg-stone-800 text-slate-50 rounded-sm my-2 hover:bg-stone-900 hover:rounded-md transition-all duration-300 ease-in-out">
                    Hapus
                  </button>
                  <button className="px-4 py-2 bg-stone-800 text-slate-50 rounded-sm my-2 hover:bg-stone-900 hover:rounded-md transition-all duration-300 ease-in-out">
                    Ubah
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end Card */}
        </div>
        {/* end Card Yoghurt */}

        <div className="divider"></div>
      </div>
      {/* Mobile Version */}
      {/* ------------------- */}
      {/* Tablet Version & large */}
      {/* ------------------- */}
      <div className="hidden md:block md:w-full md:p-4">
        <div className="md:container md:mx-auto md:my-2">
          {/* start Breadcrumbs */}
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to={"/project/admin/dashboard"}>Control Panel</Link>
              </li>
              <li>
                <Link to={"/project/admin/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <Link to={"/project/admin/dashboard/mkurma"}>Kurma</Link>
              </li>
            </ul>
          </div>
          {/* end Breadcrumbs */}
          {/* start Tombol navigasi */}
          <div className="divider">
            <div className="md:flex md:justify-between md:w-full gap-2">
              <Link
                className="md:py-2 md:px-4 md:bg-zinc-800 md:w-1/2 md:font-bold md:text-slate-100 text-center md:hover:rounded-md md:rounded-sm md:hover:bg-zinc-900 md:transition-all md:duration-300 md:ease-in-out"
                to={"/"}>
                +Kurma🖐
              </Link>
              <Link
                className="md:py-2 md:px-4 md:bg-zinc-800 md:w-1/2 md:font-bold md:text-slate-100 text-center md:hover:rounded-md md:rounded-sm md:hover:bg-zinc-900 md:transition-all md:duration-300 md:ease-in-out"
                to={"/"}>
                Produk Lain😋
              </Link>
            </div>
          </div>
          {/* end Tombol navigasi */}

          {/* Card Kurma md:&lg */}
          <div className="hidden md:w-full md:flex md:justify-evenly md:flex-wrap md:gap-4 md:mt-8">
            {/* start Card */}
            <div className="w-2/5 md:p-2 md:border-2 md:shadow-lg md:rounded-lg md:hover:rounded-sm group duration-300 transition-all ease-in-out lg:w-1/4">
              <div>
                <img
                  src={y3}
                  className="md:rounded-lg md:shadow-lg md:overflow-hidden md:group-hover:scale-95 md:transition-all md:duration-700 md:ease-in-out md:group-hover:rotate-180 md:group-hover:opacity-95"
                />
              </div>

              <div className="md:flex md:w-full md:justify-between md:mt-2">
                <div className="md:w-1/4 md:h-28 md:flex md:flex-col md:justify-between md:font-semibold">
                  <p className="md:border-t">Title:</p>
                  <p>Stok:</p>
                  <p>Harga:</p>
                </div>
                <div className="md:w-3/4 md:h-28 md:flex md:flex-col md:justify-between md:text-end md:font-bold">
                  <p className="md:truncate md:border-t">Kurma Best Seller A</p>
                  <p>240 Pack</p>
                  <p>Rp. 33.500</p>
                </div>
              </div>

              <div className="md:w-full md:flex md:flex-row-reverse md:mt-2 md:justify-between md:font-bold md:text-slate-100">
                <button className="md:py-2 md:px-6 md:bg-zinc-800 md:rounded-sm md:hover:bg-zinc-900 md:hover:rounded-md transition-all duration-300 ease-in-out">
                  Hapus
                </button>
                <button className="md:py-2 md:px-6 md:bg-zinc-800 md:rounded-sm md:hover:bg-zinc-900 md:hover:rounded-md transition-all duration-300 ease-in-out">
                  Ubah
                </button>
              </div>
            </div>
            {/* end Card */}
          </div>
          {/* Card Kurma md:&lg */}

          <div className="divider"></div>
        </div>
      </div>
      {/* ------------------- */}
      {/* Tablet Version & large */}
      <Footer />
    </React.Fragment>
  );
};

export default Mkurma;
