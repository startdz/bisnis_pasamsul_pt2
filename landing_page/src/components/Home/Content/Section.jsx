import React from "react";
import k1 from "/kurma1.jpg";
import k2 from "/kurma2.jpg";
import y3 from "/y3.jpg";
import y4 from "/y4.jpg";

const Section = () => {
    return (
        <>
            <div className="w-full mx-auto text-center flex justify-center py-2 bg-base-200">
                <article class="prose">
                    <h1>Yoghurt Pilihan Terbaik</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum minus consequatur optio ipsa nostrum! Nemo expedita in mollitia perferendis reiciendis!</p>
                </article>
            </div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-auto card bg-base-300 rounded-[0] place-items-center py-4 px-2">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure>
                            <img src={y3} alt="Album" className="rounded-tr-md rounded-br-md" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Yoghurt Populer!</h2>
                            <p className="text-sm">Yoghurt Model Cups.</p>
                            <div className="stats shadow">

                                <div className="stat">
                                    <div className="stat-title">Yoghurt Laris</div>
                                    <div className="stat-value">Rp 19,900</div>
                                    <div className="stat-desc">Hemat 18%</div>
                                </div>

                            </div>
                            <div className="rating flex justify-end">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Selengkapnya</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal">❤</div>
                <div className="grid flex-grow h-auto card bg-base-300 rounded-[0] place-items-center py-4 px-2">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure>
                            <img src={y4} alt="Album" className="rounded-tr-md rounded-br-md" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Yoghurt Premium!</h2>
                            <p className="text-sm">Yoghurt Bucket & Varian rasa.</p>
                            <div className="stats shadow">

                                <div className="stat">
                                    <div className="stat-title">Paket Premium</div>
                                    <div className="stat-value">Rp 24,900</div>
                                    <div className="stat-desc">Hemat 18%</div>
                                </div>

                            </div>
                            <div className="rating flex justify-end">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Selengkapnya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto text-center flex justify-center py-2 bg-base-200">
                <article class="prose">
                    <h1>Kurma Pilihan Terbaik</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum minus consequatur optio ipsa nostrum! Nemo expedita in mollitia perferendis reiciendis!</p>
                </article>
            </div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-auto card bg-base-300 rounded-[0] place-items-center py-4 px-2">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure>
                            <img src={k1} alt="Album" className="rounded-tr-md rounded-br-md" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Kurma Populer!</h2>
                            <p className="text-sm">Kurma manis dengan kesegaran.</p>
                            <div className="stats shadow">

                                <div className="stat">
                                    <div className="stat-title">Kurma Laris</div>
                                    <div className="stat-value">Rp 27,900</div>
                                    <div className="stat-desc">Hemat 18%</div>
                                </div>

                            </div>
                            <div className="rating flex justify-end">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Selengkapnya</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal">❤</div>
                <div className="grid flex-grow h-auto card bg-base-300 rounded-[0] place-items-center py-4 px-2">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure>
                            <img src={k2} alt="Album" className="rounded-tr-md rounded-br-md" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Kurma Premuim!</h2>
                            <p className="text-sm">Produk Mekkah dan Madinah.</p>
                            <div className="stats shadow">

                                <div className="stat">
                                    <div className="stat-title">Kurma Premuim</div>
                                    <div className="stat-value">Rp 53,900</div>
                                    <div className="stat-desc">8% lebih murah dari bulan sebelumnya</div>
                                </div>

                            </div>
                            <div className="rating flex justify-end">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section;
