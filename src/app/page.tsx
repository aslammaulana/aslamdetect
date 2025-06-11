'use client';

import { useEffect } from 'react';
import Header from '@/components/ThemeBuilder/Header/Header';
import Intro from '@/components/ThemeBuilder/Pages/Intro';
import Product from '@/components/ThemeBuilder/Pages/Product';

export default function Page() {
  useEffect(() => {
    fetch('/api/track')
      .then((res) => res.json())
      .then((data) => {
        console.log('Tracking Data:', data);
      });
  }, []);

  return (
    <>
      <Header />
      <Intro />
      <Product />
      
      <div className="h-[500px]" />
    </>
  );
}
