'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

export default function SwiperBasic() {
  const slides = [
    { id: 1, src: '/images/Carousel/logo1.png', alt: 'logo 1' },
    { id: 2, src: '/images/Carousel/logo2.png', alt: 'logo 2' },
    { id: 3, src: '/images/Carousel/logo3.png', alt: 'logo 3' },
    { id: 4, src: '/images/Carousel/logo1.png', alt: 'logo 1' },
    { id: 5, src: '/images/Carousel/logo2.png', alt: 'logo 2' },
    { id: 6, src: '/images/Carousel/logo3.png', alt: 'logo 3' },
  ]

  return (
    <div className="w-[1150px] mx-auto py-10 flex justify-center items-center ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={6}
        loop={true}
        autoplay={{ delay: 1000 }}
        pagination={{ clickable: true }}
        navigation
        className="overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={500}
              height={500}
              className="object-contain opacity-70 hover:opacity-100 transition "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
