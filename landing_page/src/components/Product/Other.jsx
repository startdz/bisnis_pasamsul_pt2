import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { Link } from "react-router-dom";
import y3 from "/y3.jpg";

const Other = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="w-full bg-base-100">
        <div className="container mx-auto">
          {/* breadcrumbs */}
          <div className="text-sm breadcrumbs pt-20">
            <ul>
              <li>
                <Link to={"/"}>Beranda</Link>
              </li>
              <li>
                <Link to={"/"}>Produk</Link>
              </li>
              <li>
                <Link to={"/produk/yoghurt"}>Yoghurt</Link>
              </li>
            </ul>
          </div>
          {/* notif */}
          {/* <progress className="progress w-full"></progress>
          <div className="alert shadow-lg bg-gray-300">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info flex-shrink-0 w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h3 className="font-bold">Promo Yoghurt Special 12.12</h3>
                <div className="text-xs">Ayo Buruan pesan sekarang🖐</div>
              </div>
            </div>
            <div className="flex-none">
              <div className="indicator">
                <span className="indicator-item md:indicator-start badge badge-secondary">
                  Sisa 24
                </span>
                <button className="btn">Pesan Sekarang</button>
              </div>
            </div>
          </div>
          <progress className="progress w-full"></progress> */}
          {/* /notif */}
          {/* Card yoghurt */}
          <div className="grid grid-cols-1 p-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <div className="aspect-[9/12] shadow-lg rounded-lg mb-4">
              <div className="w-full">
                <img
                  src={y3}
                  alt="pr1"
                  className="rounded-t-lg rounded-b-md shadow-lg hover:scale-95 hover:animate-pulse hover:-rotate-2 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="w-full h-2/3 flex flex-col justify-evenly">
                <div className="mx-4 my-2">
                  <h1 className="text-2xl tracking-wider font-bold">
                    Yoghurt A
                  </h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quam totam velit ratione, accusamus hic error quibusdam eius
                    quos. Dolorem quibusdam nisi nam ut molestiae, perferendis
                    fuga id quo magnam laborum.
                  </p>
                  <div className="flex flex-col-reverse justify-between items-center lg:flex-row">
                    <div className="stats shadow-lg">
                      <div className="stat">
                        <div className="stat-title">Harga Yoghurt A</div>
                        <div className="stat-value">Rp.10,000</div>
                        <div className="stat-desc">Tersedia 200 Stok</div>
                      </div>
                    </div>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                    </div>
                  </div>
                </div>
                <Link to={"/kontak"} className="btn hover:bg-stone-900">
                  Pesan Sekarang
                </Link>
              </div>
            </div>
            <div className="aspect-[9/12] shadow-lg rounded-lg mb-4">
              <div className="w-full">
                <img
                  src={y3}
                  alt="pr1"
                  className="rounded-t-lg rounded-b-md shadow-lg hover:scale-95 hover:animate-pulse hover:-rotate-2 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="w-full h-2/3 flex flex-col justify-evenly">
                <div className="mx-4 my-2">
                  <h1 className="text-2xl tracking-wider font-bold">
                    Yoghurt A
                  </h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quam totam velit ratione, accusamus hic error quibusdam eius
                    quos. Dolorem quibusdam nisi nam ut molestiae, perferendis
                    fuga id quo magnam laborum.
                  </p>
                  <div className="flex flex-col-reverse justify-between items-center lg:flex-row">
                    <div className="stats shadow-lg">
                      <div className="stat">
                        <div className="stat-title">Harga Yoghurt A</div>
                        <div className="stat-value">Rp.10,000</div>
                        <div className="stat-desc">Tersedia 200 Stok</div>
                      </div>
                    </div>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                    </div>
                  </div>
                </div>
                <Link to={"/kontak"} className="btn hover:bg-stone-900">
                  Pesan Sekarang
                </Link>
              </div>
            </div>
            <div className="aspect-[9/12] shadow-lg rounded-lg mb-4">
              <div className="w-full">
                <img
                  src={y3}
                  alt="pr1"
                  className="rounded-t-lg rounded-b-md shadow-lg hover:scale-95 hover:animate-pulse hover:-rotate-2 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="w-full h-2/3 flex flex-col justify-evenly">
                <div className="mx-4 my-2">
                  <h1 className="text-2xl tracking-wider font-bold">
                    Yoghurt A
                  </h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quam totam velit ratione, accusamus hic error quibusdam eius
                    quos. Dolorem quibusdam nisi nam ut molestiae, perferendis
                    fuga id quo magnam laborum.
                  </p>
                  <div className="flex flex-col-reverse justify-between items-center lg:flex-row">
                    <div className="stats shadow-lg">
                      <div className="stat">
                        <div className="stat-title">Harga Yoghurt A</div>
                        <div className="stat-value">Rp.10,000</div>
                        <div className="stat-desc">Tersedia 200 Stok</div>
                      </div>
                    </div>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                    </div>
                  </div>
                </div>
                <Link to={"/kontak"} className="btn hover:bg-stone-900">
                  Pesan Sekarang
                </Link>
              </div>
            </div>
            <div className="aspect-[9/12] shadow-lg rounded-lg mb-4">
              <div className="w-full">
                <img
                  src={y3}
                  alt="pr1"
                  className="rounded-t-lg rounded-b-md shadow-lg hover:scale-95 hover:animate-pulse hover:-rotate-2 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="w-full h-2/3 flex flex-col justify-evenly">
                <div className="mx-4 my-2">
                  <h1 className="text-2xl tracking-wider font-bold">
                    Yoghurt A
                  </h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quam totam velit ratione, accusamus hic error quibusdam eius
                    quos. Dolorem quibusdam nisi nam ut molestiae, perferendis
                    fuga id quo magnam laborum.
                  </p>
                  <div className="flex flex-col-reverse justify-between items-center lg:flex-row">
                    <div className="stats shadow-lg">
                      <div className="stat">
                        <div className="stat-title">Harga Yoghurt A</div>
                        <div className="stat-value">Rp.10,000</div>
                        <div className="stat-desc">Tersedia 200 Stok</div>
                      </div>
                    </div>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                    </div>
                  </div>
                </div>
                <Link to={"/kontak"} className="btn hover:bg-stone-900">
                  Pesan Sekarang
                </Link>
              </div>
            </div>
          </div>
          {/* /Card yoghurt */}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Other;
