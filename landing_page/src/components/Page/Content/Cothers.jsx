import React from "react";
import Navbar from "../Admin/Layouts/Navbar";
import Footer from "../Admin/Layouts/Footer";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import y3 from "/y3.jpg";

const Cothers = () => {
 return (
  <React.Fragment>
   {/* start mobile version & sm-device */}
   <Navbar />
   <div className="w-full h-auto p-4 bg-base-100">
    <div className="container mx-auto lg:max-w-6xl">
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
     {/* end navigasi */}
     {/* start Content */}
     <div className="grid grid-cols-2 gap-2 pt-4 md:grid-cols-3 md:gap-3 lg:flex lg:justify-evenly lg:flex-wrap">
      {/* start card */}
      <div className="aspect-square rounded border p-1 shadow-lg group sm:p-2">
       <img
        src={y3}
        alt="product"
        className="rounded-md border-b group-hover:scale-95 group-hover:rotate-3 transition-all duration-500 ease-in-out w-full"
       />
       <div className="border-t mt-2 flex justify-between">
        <div className="font-semibold text-sm flex flex-col justify-between sm:text-base lg:text-lg">
         <div className="border-b">Title:</div>
         <div className="border-b">Harga:</div>
         <div className="border-b">Stok:</div>
        </div>
        <div className="font-bold text-sm flex flex-col justify-between text-end sm:text-base lg:text-lg">
         <div className="truncate border-b">
          Title Others Product
         </div>
         <div className="truncate border-b">Rp. 24.000</div>
         <div className="truncate border-b">120 Pics</div>
        </div>
       </div>
       <div className="flex justify-between mt-4 flex-row-reverse font-bold border-t pt-2 text-center sm:p-2">
        <Link className="px-4 py-2 bg-zinc-800 text-base-100 rounded hover:bg-zinc-900 hover:rounded-md transition-all duration-300 ease-in-out hover:text-sm">
         Hapus
        </Link>
        <Link className="px-4 py-2 bg-zinc-800 text-base-100 rounded hover:bg-zinc-900 hover:rounded-md transition-all duration-300 ease-in-out hover:text-sm">
         Ubah
        </Link>
       </div>
      </div>
      <div className="aspect-square rounded border p-1 shadow-lg group sm:p-2">
       <img
        src={y3}
        alt="product"
        className="rounded-md border-b group-hover:scale-95 group-hover:rotate-3 transition-all duration-500 ease-in-out w-full"
       />
       <div className="border-t mt-2 flex justify-between">
        <div className="font-semibold text-sm flex flex-col justify-between sm:text-base lg:text-lg">
         <div className="border-b">Title:</div>
         <div className="border-b">Harga:</div>
         <div className="border-b">Stok:</div>
        </div>
        <div className="font-bold text-sm flex flex-col justify-between text-end sm:text-base lg:text-lg">
         <div className="truncate border-b">
          Title Others Product
         </div>
         <div className="truncate border-b">Rp. 24.000</div>
         <div className="truncate border-b">120 Pics</div>
        </div>
       </div>
       <div className="flex justify-between mt-4 flex-row-reverse font-bold border-t pt-2 text-center sm:p-2">
        <Link className="px-4 py-2 bg-zinc-800 text-base-100 rounded hover:bg-zinc-900 hover:rounded-md transition-all duration-300 ease-in-out hover:text-sm">
         Hapus
        </Link>
        <Link className="px-4 py-2 bg-zinc-800 text-base-100 rounded hover:bg-zinc-900 hover:rounded-md transition-all duration-300 ease-in-out hover:text-sm">
         Ubah
        </Link>
       </div>
      </div>
      <div className="aspect-square rounded border p-1 shadow-lg group sm:p-2">
       <img
        src={y3}
        alt="product"
        className="rounded-md border-b group-hover:scale-95 group-hover:rotate-3 transition-all duration-500 ease-in-out w-full"
       />
       <div className="border-t mt-2 flex justify-between">
        <div className="font-semibold text-sm flex flex-col justify-between sm:text-base lg:text-lg">
         <div className="border-b">Title:</div>
         <div className="border-b">Harga:</div>
         <div className="border-b">Stok:</div>
        </div>
        <div className="font-bold text-sm flex flex-col justify-between text-end sm:text-base lg:text-lg">
         <div className="truncate border-b">
          Title Others Product
         </div>
         <div className="truncate border-b">Rp. 24.000</div>
         <div className="truncate border-b">120 Pics</div>
        </div>
       </div>
       <div className="flex justify-between mt-4 flex-row-reverse font-bold border-t pt-2 text-center sm:p-2">
        <Link className="px-4 py-2 bg-zinc-800 text-base-100 rounded hover:bg-zinc-900 hover:rounded-md transition-all duration-300 ease-in-out hover:text-sm">
         Hapus
        </Link>
        <Link className="px-4 py-2 bg-zinc-800 text-base-100 rounded hover:bg-zinc-900 hover:rounded-md transition-all duration-300 ease-in-out hover:text-sm">
         Ubah
        </Link>
       </div>
      </div>
      {/* end card */}
     </div>
     {/* end Content */}
    </div>
   </div>
   {/* end mobile version & sm-device */}
   <Footer />
  </React.Fragment>
 );
};

export default Cothers;
