'use client';

import { HeroContent, HeroContentDua } from '@/lib/content';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from 'react-icons/fa';

export default function MainComponent() {
  const [openIndex, setOpenIndex] = useState(null);
  const [openContent, setOpenContent] = useState(null)

  const toggleContent = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const toggleContentAsk = (index) => {
    setOpenContent((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <div className="flex flex-wrap justify-between mt-10">
      <main className="p-10 w-full md:w-1/2">
        <h1 className="text-2xl font-bold">Fitur Unggulan:</h1>
        {HeroContent.map((content) => (
          <div key={content.id} className="mb-5">
            <div
              className="flex items-center gap-4 justify-between bg-ungu text-white p-5 rounded-md cursor-pointer"
              onClick={() => toggleContent(content.id)}
            >
              <h3>{content.title}</h3>
              {openIndex === content.id ? (
                <FaArrowAltCircleDown className="text-2xl" />
              ) : (
                <FaArrowAltCircleRight className="text-2xl" />
              )}
            </div>

            {openIndex === content.id && (
              <div className="border-2 border-ungu border-t-0 p-5">
                <p>{content.isi}</p>
              </div>
            )}
          </div>
        ))}
      </main>

      <main className="p-10 w-full md:w-1/2">
      <h1 className="text-2xl font-bold">Kenapa memilih kami?</h1>
        {HeroContentDua.map((content) => (
          <div key={content.id} className="mb-5">
            <div
              className="flex items-center gap-4 justify-between bg-ungu text-white p-5 rounded-md cursor-pointer"
              onClick={() => toggleContentAsk(content.id)}
            >
              <h3>{content.title}</h3>
              {openContent === content.id ? (
                <FaArrowAltCircleDown className="text-2xl" />
              ) : (
                <FaArrowAltCircleRight className="text-2xl" />
              )}
            </div>

            {openContent === content.id && (
              <div className="border-2 border-ungu border-t-0 p-5">
                <p>{content.isi}</p>
              </div>
            )}
          </div>
        ))}
        <div className='border-2 flex flex-col justify-center items-center p-4'>
            <h1 className='font-bold text-center md:text-left'>Dapatkan Pengalaman Manajemen Sekolah yang Lebih Baik!</h1>
            <div className='flex'>
               
                <p className='text-center'><Link href={'/register'} className='text-blue-500 font-bold'>Daftar sekarang </Link>dan rasakan kemudahan dalam mengelola aktivitas sekolah dengan cara yang lebih efektif.</p>
            </div>
        </div>
      </main>
    </div>
  );
}
