import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ username }) => {
 const navigate = useNavigate();

 const Logout = async () => {
  try {
   await axios.delete(
    `http://localhost:5000/api/business/auth/logout`
   );
   navigate("/auth/login");
  } catch (error) {
   console.log(error);
  }
 };

 return (
  <React.Fragment>
   <div className="navbar bg-base-100 fixed z-[99] ">
    <div className="navbar-start">
     <div className="dropdown">
      <label
       tabIndex={0}
       className="btn btn-ghost lg:hidden">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         d="M4 6h16M4 12h8m-8 6h16"
        />
       </svg>
      </label>
      <ul
       tabIndex={0}
       className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       <li>
        <Link to={"/admin/project/testimoni/"}>
         Testimoni
        </Link>
       </li>
       <li tabIndex={0}>
        <a className="justify-between">
         Manajemen Produk
         <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
         </svg>
        </a>
        <ul className="p-2 bg-base-100">
         <li>
          <Link to={"/project/admin/dashboard/myoghurt"}>
           Produk Yoghurt
          </Link>
         </li>
         <li>
          <Link to={"/project/admin/dashboard/mkurma"}>
           Produk Kurma
          </Link>
         </li>
         <li>
          <Link to={"/project/admin/dashboard/cothers"}>
           Produk Lain
          </Link>
         </li>
        </ul>
       </li>
       <li tabIndex={0}>
        <a className="justify-between">
         Pengaturan Lain
         <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
         </svg>
        </a>
        <ul className="p-2 bg-base-100">
         <li>
          <a>Ubah Sosmed</a>
         </li>
         <li>
          <a>Pengaturan Akun</a>
         </li>
         <li>
          <button onClick={Logout}>Logout</button>
         </li>
        </ul>
       </li>
       <li>
        <a>Mode</a>
       </li>
      </ul>
     </div>
     <Link
      to={"/project/admin/dashboard"}
      className="btn btn-ghost normal-case text-xl">
      <span>Halo🖐,&nbsp;</span>
      {username}
     </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1">
      <li>
       <Link to={"/project/admin/dashboard/testimonial"}>
        Testimoni
       </Link>
      </li>
      <li tabIndex={0}>
       <a>
        Manajemen Produk
        <svg
         className="fill-current"
         xmlns="http://www.w3.org/2000/svg"
         width="20"
         height="20"
         viewBox="0 0 24 24">
         <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
       </a>
       <ul className="p-2 bg-base-100">
        <li>
         <Link to={"/project/admin/dashboard/myoghurt"}>
          Produk Yoghurt
         </Link>
        </li>
        <li>
         <Link to={"/project/admin/dashboard/mkurma"}>
          Produk Kurma
         </Link>
        </li>
        <li>
         <Link to={"/project/admin/dashboard/cothers"}>
          Produk Lain
         </Link>
        </li>
       </ul>
      </li>
      <li tabIndex={0}>
       <a>
        Pengaturan Lain
        <svg
         className="fill-current"
         xmlns="http://www.w3.org/2000/svg"
         width="20"
         height="20"
         viewBox="0 0 24 24">
         <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
       </a>
       <ul className="p-2 bg-base-100">
        <li>
         <Link to={"/project/admin/dashboard/myoghurt"}>
          Pengaturan Akun
         </Link>
        </li>
        <li>
         <Link to={"/project/admin/dashboard/mkurma"}>
          Ubah Sosmed
         </Link>
        </li>
        <li>
         <button onClick={Logout}>Logout</button>
        </li>
       </ul>
      </li>
      <li>
       <a>Mode</a>
      </li>
     </ul>
    </div>
    <div className="navbar-end">
     <button
      className="btn hover:rounded-lg transition-all duration-300 ease-in-out hover:bg-red-500 hover:border-white"
      onClick={Logout}>
      Sign Out
     </button>
    </div>
   </div>
  </React.Fragment>
 );
};

export default Navbar;
