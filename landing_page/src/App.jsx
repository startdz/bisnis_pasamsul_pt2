import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Form/Admin/Register";
import Login from "./components/Form/Admin/Login";
import Dashboard from "./components/Page/Admin/Dashboard";
import Home from "./components/Home/Home";
import Yoghurt from "./components/Product/Yoghurt";
import Kurma from "./components/Product/Kurma";
import Mkurma from "./components/Page/Content/Mkurma";
import Myoghurt from "./components/Page/Content/Myoghurt";
import Cothers from "./components/Page/Content/Cothers";
import CreateO from "./components/Form/Dashboard/Create/CreateO";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produk/yoghurt" element={<Yoghurt />} />
        <Route path="/produk/kurma" element={<Kurma />} />
        <Route path="/produk/others" element={<Home />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/project/admin/dashboard" element={<Dashboard />} />
        <Route path="/project/admin/dashboard/mkurma" element={<Mkurma />} />
        <Route path="/project/admin/dashboard/myoghurt" element={<Myoghurt />} />
        <Route path="/project/admin/dashboard/cothers" element={<Cothers />} />
        <Route path="/project/admin/dashboard/cothers/create" element={<CreateO />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
