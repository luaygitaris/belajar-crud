import Link from "next/link";

export default function NavbarComponent() {
	return (
		<nav className="flex fixed w-full justify-between items-center px-1 py-2 md:px-10 md:py-4 bg-ungu border-b border-white">
			<Link href={'/'} className="flex items-center gap-2 text-white">
				<h3 className='font-bold text-lg md:text-xl'>SMS</h3>
                <p className="text-xs md:text-base">Manajemen Sekolah</p>
			</Link>
            <div>
                <Link href={'/login'} className="bg-white text-xs md:text-base text-ungu py-2 px-4 rounded-md">Login</Link>
				
            </div>
		</nav>
	);
}
