import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Form/Admin/Register";
import Login from "./components/Form/Admin/Login";
import Dashboard from "./components/Page/Admin/Dashboard";
import Home from "./components/Home/Home";
import Yoghurt from "./components/Product/Yoghurt";
import Kurma from "./components/Product/Kurma";
import Tailw from './Tailw'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Tailw />} /> */}
        <Route path="/produk/yoghurt" element={<Yoghurt />} />
        <Route path="/produk/kurma" element={<Kurma />} />
        <Route path="/produk/others" element={<Home />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/project/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
