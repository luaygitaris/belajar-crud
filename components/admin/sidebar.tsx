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
import { auth } from '@/app/api/auth/auth';

const items = [
	{
		title: 'Applications',
		items: [
			{
				title: 'Home',
				url: '/dashboard',
				icon: Home,
				visible: ['Admin', 'Student', 'Teacher', 'Parent'],
			},
			{
				title: 'Teacher',
				url: '/teachers',
				icon: Speech,
				visible: ['Admin'],
			},
			{
				title: 'Student',
				url: '/students',
				icon: Users2Icon,
				visible: ['Admin', 'Student', 'Teacher', 'Parent'],
			},
			{
				title: 'Classes',
				url: '#',
				icon: Presentation,
				visible: ['Admin'],
			},
			{
				title: 'Calendar',
				url: '#',
				icon: Calendar1Icon,
				visible: ['Admin'],
			},
			{
				title: 'Search',
				url: '#',
				icon: Search,
				visible: ['Admin', 'Student'],
			},
			{
				title: 'Settings',
				url: '#',
				icon: Settings,
				visible: ['Admin'],
			},
		],
	},
	{
		title: "Other",
		items: [
			{
				title: "Profile",
				url: "/profile",
				icon: UserCircle,
				visible: ['Admin']
			}
		]
	}
];

export async function AppSidebar() {
	const session = await auth();

	const userId = session?.user?.id ?? '';
	const user = await getUserById(userId);

	const userRole = user?.role ?? '';

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
			{items.map((section) => (
				<div
					className='flex flex-col gap-2 px-3 mt-5'
					key={section.title}
				>
					<span className='hidden lg:block text-gray-400 text-lg my-2 px-2'>
						{section.title}
					</span>
					<div className='flex flex-col gap-5 mb-5'>
						{section.items.map((item) => {
							if (item.visible.includes(userRole)) {
								return (
									<Link
										key={item.title}
										href={item.url}
										className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight'
									>
										<item.icon />
										<span className='hidden lg:block'>{item.title}</span>
									</Link>
								);
							}
							return null;
						})}
					</div>
				</div>
			))}
		</div>
	);
}
