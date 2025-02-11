import Navbar from '@/components/admin/navbar';
import { AppSidebar } from '@/components/admin/sidebar';

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='h-screen flex'>
			{/* LEFT */}
			<div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]'>
				<AppSidebar />
			</div>
			{/* RIGHT */}
			<div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-y-scroll hide-scrollbar flex flex-col'>
				<Navbar />
				<div className='px-2 bg-slate-100'>{children}</div>
			</div>
		</div>
	);
}
