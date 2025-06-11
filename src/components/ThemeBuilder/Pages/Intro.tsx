import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
<<<<<<< HEAD
=======
import LogoCarousel from './Intro2'
import SwiperBasic from './Intro2'
>>>>>>> 5f6f6da59dd91789fc17dc1553fb8c08bbd07be8
import LogoGrid from './LogoGrid'

export default function Intro() {
     return (
          <>
               <div className="bg-[#111111] flex flex-col justify-center items-center">
                    <div className="max-w-[1150px]  m-auto py-[100px] flex justify-between items-stretch font-[family-name:var(--font-inter)]  ">
                         {/* Div Kiri */}
                         <div className=" w-[65%] flex flex-col justify-center items-start text-[110px] font-black space-y-5 leading-[100px] text-[#ffffff] ">
                              <div className="flex justify-center items-center space-x-10">
                                   <div className="w-[92px]">
                                        <Image
                                             src="/images/Aslam-01.png"
                                             alt="User"
                                             width={600}
                                             height={400}
                                             className="rounded-full"
                                        />
                                   </div>
                                   <div className="w-[45px]">
                                        <Image
                                             src="/images/ArrowRight.svg"
                                             alt="User"
                                             width={600}
                                             height={400}
                                             className="opacity-60"
                                        />
                                   </div>
                                   <div>HI I AM</div>
                              </div>
                              <div>ASLAM</div>
                              <div>MAULANA</div>
                         </div>

                         {/* Div Kanan */}
                         <div className="w-[35%] flex flex-col justify-between">
                              {/* Deskripsi */}
                              <div>
                                   <p className="text-right text-[25px]">
                                        A product designer, specialize in creating magical visual identities for digital products.
                                   </p>
                              </div>

                              {/* Tombol */}
                              <div className="flex flex-col justify-center items-end space-y-4 mb-[10px]">
                                   <Link href="/">
                                        <button className="bg-[#ffffff] hover:bg-[#ffffff2f] hover:text-[#ffffff] text-[#1f1f1f] text-[14px] font-semibold py-4 px-6 rounded-full">
                                             <p>VIEW PORTOFOLIO</p>
                                        </button>
                                   </Link>
                                   <Link href="/">
                                        <button className="bg-[#ffffff00] hover:bg-[#ffffff2f] hover:text-[#ffffff] text-[#ffffff] text-[14px] font-semibold py-4 px-6 rounded-full border-2 border-[#ffffff]">
                                             <p>DOWNLOAD RESUME</p>
                                        </button>
                                   </Link>
                              </div>
                         </div>
                    </div>
                    <LogoGrid/>

               </div>

          </>
     )
}
