import Link from "next/link";
import React from "react";
<<<<<<< HEAD
=======
import { BsArrowRight } from "react-icons/bs";
>>>>>>> 5f6f6da59dd91789fc17dc1553fb8c08bbd07be8
import { FiArrowUpRight } from "react-icons/fi";

type BrandStrategyCardProps = {
     icon: React.ReactNode;
     title: string;
     description: string;
     tags: string[];
     href?: string;
};

export default function BrandStrategyCard({
     icon,
     title,
     description,
     tags,
     href = "/",
}: BrandStrategyCardProps) {
     return (
          <div className="bg-[#0a0a0a] text-white p-6 md:p-8 rounded-2xl border border-white/10 shadow-md hover:shadow-xl transition font-inter">
               {/* Header */}
               <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                         <div className="text-white">{icon}</div>
                         <h2 className="text-[25px] font-semibold">{title}</h2>
                    </div>
                    <Link href={href}>
                         <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
                              {/* Panah keluar */}
                              <FiArrowUpRight size={25} />

                         </button>
                    </Link>
               </div>

               {/* Description */}
               <p className="text-[15px] text-white/70 leading-relaxed mb-6">{description}</p>

               <div className="flex flex-wrap gap-3">
                    {tags.map((tag, i) => (
                         <span
                              key={i}
                              className="text-xs px-5 py-3 rounded-full border border-white/10 bg-gradient-to-r from-[#222222] to-[#0b0b0b] hover:from-[#2a2a2a] hover:to-[#111111] transition"
                         >
                              {tag.toUpperCase()}
                         </span>
                    ))}
               </div>

          </div>
     );
}
