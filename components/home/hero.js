import Image from 'next/image';
import hero1 from '@/public/hero/hero1.png';

export default function HeroComponent() {

  return (
    <>
      <header className='bg-ungu pt-20 px-4 text-center md:text-left md:p-10 flex flex-col md:flex-row gap-10 items-center justify-between h-full md:h-screen'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl md:text-2xl font-bold text-white'>
            Selamat Datang di Sistem Manajemen Sekolah (SMS)
          </h1>
          <p className='text-white'>
            Kami menghadirkan platform canggih yang dirancang untuk memudahkan
            pengelolaan seluruh kegiatan di sekolah Anda, mulai dari
            administrasi, keuangan, hingga komunikasi antara siswa, guru, dan
            orang tua. Dengan tampilan yang user-friendly dan fitur yang
            lengkap, sistem kami membantu menciptakan lingkungan pendidikan yang
            lebih efisien dan transparan.
          </p>
        </div>
        <div>
          <Image
            src={hero1}
            alt='manajemen sekolah'
            width={2100}
          />
        </div>
      </header>

    </>
  );
}
