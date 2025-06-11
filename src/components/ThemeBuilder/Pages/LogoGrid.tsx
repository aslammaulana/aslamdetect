import Image from 'next/image';

const logos = [
  '/images/Carousel/logo1.png',
  '/images/Carousel/logo2.png',
  '/images/Carousel/logo3.png',
  '/images/Carousel/logo5.png',
  '/images/Carousel/logo3.png',
];

export default function LogoGrid() {
  return (
    <div className="w-[1150px] mx-auto py-4">
      <div className="flex justify-between items-center">
        {logos.map((src, index) => (
          <div key={index} className="relative w-32 h-32">
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
