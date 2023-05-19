import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [listAdmin, setListAdmin] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    admin();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/auth/security/"
      );
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
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
        const decoded = jwt_decode(response.data.accessToken);
        setUsername(decoded.username);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const admin = async () => {
    const response = await axiosJWT.get(
      "http://localhost:5000/api/business/account/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setListAdmin(response.data);
  };

  const Logout = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/business/auth/logout`);
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="w-full bg-base-100 min-h-screen">
        {/* start lg:sidebar/flex md:grid/flex sm:block */}
        <div className="container mx-auto p-4">
          {/* start breadcrumbs */}
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to={"/project/admin/dashboard"}>Control Panel</Link>
              </li>
              <li>
                <Link to={"/project/admin/dashboard"}>Dashboard</Link>
              </li>
            </ul>
          </div>
          {/* end breadcrumbs */}
          {/* start link produk */}
          <div className="collapse shadow-md rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Buka Manajemen Produk
            </div>
            <div className="collapse-content flex flex-col gap-4">
              <Link>Manajemen Produk Kurma</Link>
              <Link>Manajemen Produk Yoghurt</Link>
              <Link>Manajemen Produk Lain</Link>
            </div>
          </div>
          {/* end link produk */}
          <div className="divider"></div>
          {/* start stat */}
          <div className="stats shadow flex flex-col md:flex-row">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="stat-title">Total Stok Yoghurt</div>
              <div className="stat-value">480 Pics</div>
              <div className="stat-desc">
                <Link>↗︎ Buka Pengaturan</Link>
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <div className="stat-title">Total Stok Kurma</div>
              <div className="stat-value">289 Pack</div>
              <div className="stat-desc">
                <Link>↗︎ Buka Pengaturan</Link>
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
              </div>
              <div className="stat-title">Produk Lain</div>
              <div className="stat-value">10 Macam</div>
              <div className="stat-desc">
                <Link>↗︎ Buka Pengaturan</Link>
              </div>
            </div>
          </div>
          {/* end stat */}
          <div className="divider"></div>
          {/* start table */}
          <div className="collapse shadow-lg rounded-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Buka Tabel Yoghurt
            </div>
            <div className="collapse-content">
              <div className="overflow-x-auto w-full">
                {/* start Table yoghurt */}
                <table className="table w-full">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="/tailwind-css-component-profile-2@56w.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Zemlak, Daniel and Leannon
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Desktop Support Technician
                        </span>
                      </td>
                      <td>Purple</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          details
                        </button>
                      </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="/tailwind-css-component-profile-3@56w.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Brice Swyre</div>
                            <div className="text-sm opacity-50">China</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Carroll Group
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Tax Accountant
                        </span>
                      </td>
                      <td>Red</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          details
                        </button>
                      </th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="/tailwind-css-component-profile-4@56w.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Marjy Ferencz</div>
                            <div className="text-sm opacity-50">Russia</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Rowe-Schoen
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Office Assistant I
                        </span>
                      </td>
                      <td>Crimson</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          details
                        </button>
                      </th>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="/tailwind-css-component-profile-5@56w.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Yancy Tear</div>
                            <div className="text-sm opacity-50">Brazil</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        Wyman-Ledner
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Community Outreach Specialist
                        </span>
                      </td>
                      <td>Indigo</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          details
                        </button>
                      </th>
                    </tr>
                  </tbody>
                  {/* foot */}
                  <tfoot>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                      <th></th>
                    </tr>
                  </tfoot>
                </table>
                {/* end Table yoghurt */}
              </div>
            </div>
          </div>
          {/* end table */}
        </div>
        {/* end lg:sidebar/flex md:grid/flex sm:block */}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Dashboard;
