import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import y3 from '/y3.jpg'
import { Link, useNavigate } from 'react-router-dom';

const Content = () => {
  return (
    <React.Fragment>
      <div className='w-full'>
        <div className="py-4 px-2 mt-3 text-center border-2 border-zinc-900 bg-base-300 rounded hover:bg-zinc-900 hover:text-base-100 hover:border-base-100 group transition-all duration-300 ease-in-out">
          <span className='font-bold capitalize group-hover:tracking-wider'>Halaman Dashboard</span>
        </div>
      </div>
      <React.Fragment>
        <div className="w-full mt-2 md:text-xl">
          <div className="container max-w-2xl mx-auto lg:max-w-7xl">
            <div className="flex flex-col gap-4 lg:flex-wrap lg:flex-row lg:gap-2 lg:justify-evenly">
              <div className="aspect-square flex gap-1 p-1 shadow-lg rounded-lg">
                <div className="w-2/3 flex flex-col gap-2 p-1 lg:items-center lg:justify-center mx-auto">
                  <div className='aspect-square shadow-xl rounded-lg flex flex-col items-center justify-center group'>
                    <div className='font-bold'>Manajemen Produk Yoghurt</div>
                    <img className="mask mask-heart w-4/5 group-hover:-translate-y-2 transition-all duration-300 ease-in-out" src={y3}/>
                  </div>
                  <div className='aspect-square shadow-xl rounded-lg flex items-baseline justify-center group lg:w-3/4'>
                    <div className="stats shadow self-center group-hover:bg-zinc-900 group-hover:text-base-100 transition-all duration-300 ease-in-out group-hover:translate-y-2">
                      <div className="stat">
                        <div className="stat-title group-hover:text-base-100">Total Seluruh Yoghurt</div>
                        <div className="stat-value">480 Pics</div>
                        <Link to={""} className="stat-desc group-hover:font-bold group-hover:text-base-100">+Tambah Yoghurt ga?</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 flex flex-col justify-around gap-2 p-1 shadow-xl">
                  <div className='aspect-video rounded hover:rounded-lg shadow-xl  p-1 text-center  hover:font-bold hover:bg-zinc-900 hover:text-base-100 transition-all duration-200 ease-in-out  group md:text-2xl'>
                    Jenis Yoghurt
                    <div className='font-bold mt-2'><Link to={"/"} className='group-hover:bg-base-100 group-hover:text-zinc-900 py-1 px-4 rounded transition-all duration-200 ease-in-out'>Lihat</Link></div>
                  </div>
                  <div className='aspect-video rounded hover:rounded-lg shadow-xl  p-1 text-center  hover:font-bold hover:bg-zinc-900 hover:text-base-100 transition-all duration-200 ease-in-out  group md:text-2xl'>
                    Variant Rasa
                    <div className='font-bold mt-2'><Link to={"/"} className='group-hover:bg-base-100 group-hover:text-zinc-900   py-1 px-4 rounded transition-all duration-200 ease-in-out'>Lihat</Link></div>
                  </div>
                  <div className='aspect-video rounded hover:rounded-lg shadow-xl  p-1 text-center  hover:font-bold hover:bg-zinc-900 hover:text-base-100 transition-all duration-200 ease-in-out  group md:text-2xl'>
                    Lokasi Mitra
                    <div className='font-bold mt-2'><Link to={"/"} className='group-hover:bg-base-100 group-hover:text-zinc-900   py-1 px-4 rounded transition-all duration-200 ease-in-out'>Lihat</Link></div>
                  </div>
                  <div className='aspect-video rounded hover:rounded-lg shadow-xl  p-1 text-center  hover:font-bold hover:bg-zinc-900 hover:text-base-100 transition-all duration-200 ease-in-out  group md:text-2xl'>
                    Testimoni
                    <div className='font-bold mt-2'><Link to={"/"} className='group-hover:bg-base-100 group-hover:text-zinc-900   py-1 px-4 rounded transition-all duration-200 ease-in-out'>Lihat</Link></div>
                  </div>
                  <div className='aspect-video rounded hover:rounded-lg shadow-xl  p-1 text-center  hover:font-bold hover:bg-zinc-900 hover:text-base-100 transition-all duration-200 ease-in-out  group md:text-2xl'>
                    Ulasan
                    <div className='font-bold mt-2'><Link to={"/"} className='group-hover:bg-base-100 group-hover:text-zinc-900   py-1 px-4 rounded transition-all duration-200 ease-in-out'>Lihat</Link></div>
                  </div>
                </div>
              </div>
              <div className="aspect-square flex gap-1 p-1 shadow-lg rounded-lg">
                <div className="w-2/3 flex flex-col gap-2 p-1 lg:items-center lg:justify-center mx-auto">
                  <div className='aspect-square shadow-xl rounded-lg flex flex-col items-center justify-center group'>
                    <div className='font-bold'>Manajemen Produk Yoghurt</div>
                    <img className="mask mask-heart w-4/5 group-hover:-translate-y-2 transition-all duration-300 ease-in-out" src={y3}/>
                  </div>
                  <div className='aspect-square shadow-xl rounded-lg flex items-baseline justify-center group lg:w-3/4'>
                    <div className="stats shadow self-center group-hover:bg-zinc-900 group-hover:text-base-100 transition-all duration-300 ease-in-out group-hover:translate-y-2">
                      <div className="stat">
                        <div className="stat-title group-hover:text-base-100">Total Seluruh Yoghurt</div>
                        <div className="stat-value">480 Pics</div>
                        <Link to={""} className="stat-desc group-hover:font-bold group-hover:text-base-100">+Tambah Yoghurt ga?</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 flex flex-col justify-around gap-2 p-1 shadow-xl">
                  <div className='aspect-video rounded hover:rounded-lg shadow-xl  p-1 text-center  hover:font-bold hover:bg-zinc-900 hover:text-base-100 transition-all duration-200 ease-in-out  group md:text-2xl'>
                    Jenis Yoghurt
                    <div className='font-bold mt-2'><Link to={"/"} className='group-hover:bg-base-100 group-hover:text-zinc-900 py-1 px-4 rounded transition-all duration-200 ease-in-out'>Lihat</Link></div>
                  </div>
                  <div className='aspect-video rounded hover:rounded-lg shadow-xl  p-1 text-center  hover:font-bold hover:bg-zinc-900 hover:text-base-100 transition-all duration-200 ease-in-out  group md:text-2xl'>
                    Variant Rasa
                    <div className='font-bold mt-2'><Link to={"/"} className='group-hover:bg-base-100 group-hover:text-zinc-900   py-1 px-4 rounded transition-all duration-200 ease-in-out'>Lihat</Link></div>
                  </div>
                  <div className='aspect-video rounded hover:rounded-lg shadow-xl  p-1 text-center  hover:font-bold hover:bg-zinc-900 hover:text-base-100 transition-all duration-200 ease-in-out  group md:text-2xl'>
                    Lokasi Mitra
                    <div className='font-bold mt-2'><Link to={"/"} className='group-hover:bg-base-100 group-hover:text-zinc-900   py-1 px-4 rounded transition-all duration-200 ease-in-out'>Lihat</Link></div>
                  </div>
                  <div className='aspect-video rounded hover:rounded-lg shadow-xl  p-1 text-center  hover:font-bold hover:bg-zinc-900 hover:text-base-100 transition-all duration-200 ease-in-out  group md:text-2xl'>
                    Testimoni
                    <div className='font-bold mt-2'><Link to={"/"} className='group-hover:bg-base-100 group-hover:text-zinc-900   py-1 px-4 rounded transition-all duration-200 ease-in-out'>Lihat</Link></div>
                  </div>
                  <div className='aspect-video rounded hover:rounded-lg shadow-xl  p-1 text-center  hover:font-bold hover:bg-zinc-900 hover:text-base-100 transition-all duration-200 ease-in-out  group md:text-2xl'>
                    Ulasan
                    <div className='font-bold mt-2'><Link to={"/"} className='group-hover:bg-base-100 group-hover:text-zinc-900   py-1 px-4 rounded transition-all duration-200 ease-in-out'>Lihat</Link></div>
                  </div>
                </div>
              </div>
              <div className="aspect-square flex gap-1 p-1 shadow-lg rounded-lg">
                <div className="w-2/3 flex flex-col gap-2 p-1 lg:items-center lg:justify-center mx-auto">
                  <div className='aspect-square shadow-xl rounded-lg flex flex-col items-center justify-center group'>
                    <div className='font-bold'>Manajemen Produk Yoghurt</div>
                    <img className="mask mask-heart w-4/5 group-hover:-translate-y-2 transition-all duration-300 ease-in-out" src={y3}/>
                  </div>
                  <div className='aspect-square shadow-xl rounded-lg flex items-baseline justify-center group lg:w-3/4'>
                    <div className="stats shadow self-center group-hover:bg-zinc-900 group-hover:text-base-100 transition-all duration-300 ease-in-out group-hover:translate-y-2">
                      <div className="stat">
                        <div className="stat-title group-hover:text-base-100">Total Seluruh Yoghurt</div>
                        <div className="stat-value">480 Pics</div>
                        <Link to={""} className="stat-desc group-hover:font-bold group-hover:text-base-100">+Tambah Yoghurt ga?</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 flex flex-col justify-around gap-2 p-1 shadow-xl">
                  <div className='aspect-video rounded hover:rounded-lg shadow-xl  p-1 text-center  hover:font-bold hover:bg-zinc-900 hover:text-base-100 transition-all duration-200 ease-in-out  group md:text-2xl'>
                    Jenis Yoghurt
                    <div className='font-bold mt-2'><Link to={"/"} className='group-hover:bg-base-100 group-hover:text-zinc-900 py-1 px-4 rounded transition-all duration-200 ease-in-out'>Lihat</Link></div>
                  </div>
                  <div className='aspect-video rounded hover:rounded-lg shadow-xl  p-1 text-center  hover:font-bold hover:bg-zinc-900 hover:text-base-100 transition-all duration-200 ease-in-out  group md:text-2xl'>
                    Variant Rasa
                    <div className='font-bold mt-2'><Link to={"/"} className='group-hover:bg-base-100 group-hover:text-zinc-900   py-1 px-4 rounded transition-all duration-200 ease-in-out'>Lihat</Link></div>
                  </div>
                  <div className='aspect-video rounded hover:rounded-lg shadow-xl  p-1 text-center  hover:font-bold hover:bg-zinc-900 hover:text-base-100 transition-all duration-200 ease-in-out  group md:text-2xl'>
                    Lokasi Mitra
                    <div className='font-bold mt-2'><Link to={"/"} className='group-hover:bg-base-100 group-hover:text-zinc-900   py-1 px-4 rounded transition-all duration-200 ease-in-out'>Lihat</Link></div>
                  </div>
                  <div className='aspect-video rounded hover:rounded-lg shadow-xl  p-1 text-center  hover:font-bold hover:bg-zinc-900 hover:text-base-100 transition-all duration-200 ease-in-out  group md:text-2xl'>
                    Testimoni
                    <div className='font-bold mt-2'><Link to={"/"} className='group-hover:bg-base-100 group-hover:text-zinc-900   py-1 px-4 rounded transition-all duration-200 ease-in-out'>Lihat</Link></div>
                  </div>
                  <div className='aspect-video rounded hover:rounded-lg shadow-xl  p-1 text-center  hover:font-bold hover:bg-zinc-900 hover:text-base-100 transition-all duration-200 ease-in-out  group md:text-2xl'>
                    Ulasan
                    <div className='font-bold mt-2'><Link to={"/"} className='group-hover:bg-base-100 group-hover:text-zinc-900   py-1 px-4 rounded transition-all duration-200 ease-in-out'>Lihat</Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </React.Fragment>
  )
}

export default Content