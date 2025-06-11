import Link from 'next/link'
import React from 'react'
import Divider from './Divider'
import BrandStrategyCard from './Brand'
import { BsAsterisk } from 'react-icons/bs'

export default function Product() {
     return (
          <>
               <div className="w-[1150px] m-auto">
                    <div className="bg-[#0a0a0a] pt-[60px] pb-[20px]  flex justify-between items-center font-semibold text-[15px] font-[family-name:var(--font-inter)] ">
                         <div className="">[ WHAT I DO ]</div>
                         <Link href="/product">
                              <p className="">[ EXPLORE MORE ]</p>
                         </Link>
                    </div>
                    <Divider />
                    
                    <div className="flex justify-center items-center leading-[40px] space-x-3 py-10">
                         <div className="flex flex-col justify-center items-end text-[30px]">
                              <p className=" text-center font-bold text-[20px]">
                                   CRAFTING
                              </p>
                              <p className=" text-center font-bold text-[30px]">
                                   VALUABLE
                              </p>
                         </div>
                         <p className="font-forum text-[100px] font-medium">IMPACT</p>
                    </div>
               </div>

               <div className="w-[1150px] m-auto grid grid-cols-1 md:grid-cols-2 gap-7 justify-center items-center">
                    <BrandStrategyCard
                         icon={<BsAsterisk className="w-6 h-6" />}
                         title="Brand Strategy"
                         description="A strong brand strategy defines what a brand stands for, promises to its customers, and how it communicates those promises through product development."
                         tags={[
                              "Brand Posture",
                              "Consumer Behaviours",
                              "Narrative Strategy",
                              "Offer Framework",
                         ]}
                         href="/"
                    />
                    <BrandStrategyCard
                         icon={<BsAsterisk className="w-6 h-6" />}
                         title="Brand Strategy"
                         description="A strong brand strategy defines what a brand stands for, promises to its customers, and how it communicates those promises through product development."
                         tags={[
                              "Brand Posture",
                              "Consumer Behaviours",
                              "Narrative Strategy",
                              "Offer Framework",
                         ]}
                         href="/"
                    />
               </div>

          </>
     )
}
