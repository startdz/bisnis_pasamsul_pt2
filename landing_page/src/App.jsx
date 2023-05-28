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
import OthersUpdate from "./components/Form/Dashboard/Update/OthersUpdate";
import CreateY from "./components/Form/Dashboard/Create/CreateY";
import CreateK from "./components/Form/Dashboard/Create/CreateK";
import YoghurtUpdate from "./components/Form/Dashboard/Update/YoghurtUpdate";
import KurmaUpdate from "./components/Form/Dashboard/Update/KurmaUpdate";

const App = () => {
  return (
    <React.Fragment>
      <Routes>

        {/* start Route Page */}
        <Route path="/" element={<Home />} />
        {/* end Route Page */}

        {/* start Client Page */}
        <Route path="/produk/yoghurt" element={<Yoghurt />} />
        <Route path="/produk/kurma" element={<Kurma />} />
        <Route path="/produk/others" element={<Home />} />
        {/* end Client Page */}

        {/* Auth Page Admin */}
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        {/* Auth Page Admin */}

        {/* start Dashoard Route */}
        <Route path="/project/admin/dashboard" element={<Dashboard />} />
        <Route path="/project/admin/dashboard/mkurma" element={<Mkurma />} />
        <Route path="/project/admin/dashboard/myoghurt" element={<Myoghurt />} />
        {/* end Dashoard Route */}

        {/* start Create Product */}
        <Route path="/project/admin/dashboard/cyoghurt/create" element={<CreateY />} />
        <Route path="/project/admin/dashboard/cothers/create" element={<CreateO />} />
        <Route path="/project/admin/dashboard/ckurma/create" element={<CreateK/>}/>
        {/* end Create Product */}

        {/* start List Product*/}
        <Route path="/project/admin/dashboard/cothers" element={<Cothers />} />
        <Route path="/project/admin/dashboard/myoghurt" element={<Myoghurt />} />
        <Route path="/project/admin/dashboard/mkurma" element={<Mkurma />} />
        {/* end List Product*/}

        {/* start for Route Product ID */}
        <Route path="/project/admin/dashboard/cothers/:id" element={<OthersUpdate/>}/>
        <Route path="/project/admin/dashboard/myoghurt/:id" element={<YoghurtUpdate/>}/>
        <Route path="/project/admin/dashboard/ckurma/:id" element={<KurmaUpdate/>}/>
        {/* end for Route Product ID */}

      </Routes>
    </React.Fragment>
  );
};

export default App;
