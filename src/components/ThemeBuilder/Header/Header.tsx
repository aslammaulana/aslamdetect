import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

export default function Header() {
     return (
          <div className="bg-[#0a0a0a] hidden md:block border-b-2 border-[#313944] sticky top-0 inset-x-0 z-[100] ">
               <div className='max-w-[1200px] m-auto h-[100px] flex justify-between items-center font-[family-name:var(--font-inter)]  '>
                    <div className='flex justify-center items-center space-x-2'>
                         <Link href="/">
                              <Image
                                   src="/images/LogoAslamMaulana.svg" // Path dari folder public
                                   alt="Avatar"
                                   width={170} // Atur lebar gambar
                                   height={170} // Atur tinggi gambar
                              />
                         </Link>
                    </div>
                    <div className="flex items-center justify-end space-x-5">
                         <div className="text-[14px] font-semibold flex items-center justify-center space-x-7">
                              <p className="">SERVICES</p>
                              <p className="">WORKS</p>
                              <p className="">ABOUT ME</p>
                              <p className="">ARTICLES</p>
                         </div>
                         <div className="space-x-3">
                              <Link href="/">
                                   <button className='bg-[#ffffff2f] hover:bg-[#ffffff62] text-[#ffffff] text-[15px] font-semibold py-3.5 px-3.5 rounded-full'>
                                        <FaLinkedin size={15} className='w-5 h-5' />
                                   </button>
                              </Link>
                         </div>
                         <Link href="/">
                              <button className='bg-[#ffffff] hover:bg-[#ffffff2f] hover:text-[#ffffff] text-[#1f1f1f] text-[13px] font-semibold py-3.5 px-5 rounded-full'>
                                   <p>CONTACT ME</p>
                              </button>
                         </Link>


                         <div className="">
                              <Link href="/">
                                   <div className="w-[43px] rounded-lg shadow-md">
                                        <Image
                                             src="/images/Aslam-01.png"
                                             alt="User"
                                             width={600}
                                             height={400}
                                             className='rounded-lg'
                                        />
                                   </div>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
}