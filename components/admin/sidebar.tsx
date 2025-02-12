import {
	Calendar1Icon,
	Home,
	Presentation,
	Search,
	Settings,
	Speech,
	UserCircle,
	Users2Icon,
} from 'lucide-react';

import { getUserById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/auth';

const items = [
	{
		title: 'Applications',
		items: [
			{
				title: 'Home',
				url: '/dashboard',
				icon: Home,
			},
			{
				title: 'Teacher',
				url: '#',
				icon: Speech,
			},
			{
				title: 'Student',
				url: '/students',
				icon: Users2Icon,
			},
			{
				title: 'Classes',
				url: '#',
				icon: Presentation,
			},
			{
				title: 'Calendar',
				url: '#',
				icon: Calendar1Icon,
			},
			{
				title: 'Search',
				url: '#',
				icon: Search,
			},
			{
				title: 'Settings',
				url: '#',
				icon: Settings,
			},
		],
	},
];

export async function AppSidebar() {
	const session = await auth();

	const userId = session?.user?.id ?? '';
	const user = await getUserById(userId);

	return (
		<div className='mt-4 text-sm bg-white'>
			{user && (
				<div className='flex flex-col items-center justify-center'>
					<Image
						src={user.image || '/hero1.png'}
						width={100}
						height={100}
						alt='logo'
					/>
					<p>{user.schoolName}</p>
				</div>
			)}
			{items.map((i) => (
				<div
					className='flex flex-col gap-2 px-3 mt-5'
					key={i.title}
				>
					<span className='hidden lg:block text-gray-400 text-lg my-2 px-2'>
						{i.title}
					</span>
					<div className='flex flex-col gap-5'>
						{i.items.map((item) => {
							return (
								<Link
									key={item.title}
									href={item.url}
									className='flex gap-5 items-center px-4'
								>
									<item.icon />
									<span className='hidden lg:block'>{item.title}</span>
								</Link>
							);
						})}
					</div>
				</div>
			))}
			<div className='mt-10 ml-2'>
				<Link
					href={'/profile'}
					className='flex gap-5 items-center px-4'
				>
					<UserCircle />
					<span className='hidden lg:block'>Profile</span>
				</Link>
			</div>
		</div>
	);
}
