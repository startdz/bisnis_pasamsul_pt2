import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Admin/Layouts/Navbar";
import Footer from "../Admin/Layouts/Footer";
import y3 from "/y3.jpg";

const Myoghurt = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container mx-auto px-2">
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
            + Yoghurt Baru🖐
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
      <Footer />
    </React.Fragment>
  );
};

export default Myoghurt;
