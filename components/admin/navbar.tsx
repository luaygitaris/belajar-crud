import { Search } from 'lucide-react';

const Navbar = async () => {
	return (
		<div className='flex items-center justify-between p-4 relative static top-[-10px] z-50'>
			<div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
				<Search />
				<input
					type='text'
					placeholder='Search...'
					className='w-[200px] p-2 bg-transparent outline-none'
				/>
			</div>
		</div>
	);
};

export default Navbar;
