import { getStudentbyId, getUserById } from '@/lib/data';
import { notFound } from 'next/navigation';
import {
	Mail,
	Home,
	BookOpen,
	Phone,
	Cake,
	BracesIcon,
	Edit,
} from 'lucide-react';
import Image from 'next/image';
import photo from '@/public/hero/hero1.png';
import Link from 'next/link';
import { CgPerformance } from 'react-icons/cg';
import { MdClass, MdPlayLesson } from 'react-icons/md';
import { auth } from '@/app/api/auth/auth';

const StudentDetailPage = async ({
	params,
  }: {
	params: Promise<{ id: string }>
  }) => {
	const student = await getStudentbyId((await params).id);

	const image = student?.image || photo;

	const session = await auth();

	const userId = session?.user?.id ?? '';
	const user = await getUserById(userId);

	const role = user?.role ?? '';

	if (!student) {
		notFound();
	}

	return (
		<div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
			{/* LEFT */}
			<div className='w-full xl:w-2/3'>
				{/* TOP */}
				<div className='flex flex-col lg:flex-row gap-4'>
					{/* USER INFO CARD */}
					<div className='bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4'>
						<div className='w-1/3'>
							<Image
								src={image}
								alt=''
								width={144}
								height={144}
								className='w-36 h-36 rounded-full object-cover'
							/>
						</div>
						<div className='w-2/3 flex flex-col justify-between gap-4'>
							<div className='flex items-center gap-4'>
								<h1 className='text-md font-semibold'>{student.name}</h1>
								{role === 'Admin' && (
									<Link href={`/students/${student.id}/${student.id}`}>
										<button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'>
											<Edit />
										</button>
									</Link>
								)}
							</div>
							<div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
								<div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
									<BookOpen
										width={14}
										height={14}
									/>
									<span>{student.nim}</span>
								</div>
								<div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
									<Home
										width={14}
										height={14}
									/>
									<span>{student.address}</span>
								</div>
								<div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
									<Cake
										width={14}
										height={14}
									/>
									<span>{new Date(student.birthday).toLocaleDateString()}</span>
								</div>
								<div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
									<Mail
										width={14}
										height={14}
									/>
									<span>{student.email}</span>
								</div>
								<div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
									<Phone
										width={14}
										height={14}
									/>
									<span>{student.phone}</span>
								</div>
							</div>
						</div>
					</div>
					{/* SMALL CARDS */}
					<div className='flex-1 flex gap-4 justify-between flex-wrap'>
						{/* CARD */}
						<div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
							<CgPerformance
								width={24}
								height={24}
								className='w-6 h-6'
							/>
							<div className=''>
								<h1 className='text-xl font-semibold'>90%</h1>
								<span className='text-sm text-gray-400'>Attendance</span>
							</div>
						</div>
						{/* CARD */}
						<div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
							<BracesIcon
								width={24}
								height={24}
								className='w-6 h-6'
							/>
							<div className=''>
								<h1 className='text-xl font-semibold'>2</h1>
								<span className='text-sm text-gray-400'>Branches</span>
							</div>
						</div>
						{/* CARD */}
						<div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
							<MdPlayLesson
								width={24}
								height={24}
								className='w-6 h-6'
							/>
							<div className=''>
								<h1 className='text-xl font-semibold'>6</h1>
								<span className='text-sm text-gray-400'>Lessons</span>
							</div>
						</div>
						{/* CARD */}
						<div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
							<MdClass
								width={24}
								height={24}
								className='w-6 h-6'
							/>
							<div className=''>
								<h1 className='text-xl font-semibold'>6</h1>
								<span className='text-sm text-gray-400'>Classes</span>
							</div>
						</div>
					</div>
				</div>
				{/* BOTTOM */}
				<div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
					<h1>Student&apos;s Schedule</h1>
				</div>
			</div>
			{/* RIGHT */}
			<div className='w-full xl:w-1/3 flex flex-col gap-4'>
				<div className='bg-white p-4 rounded-md'>
					<h1 className='text-xl font-semibold'>Shortcuts</h1>
					<div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
						<Link
							className='p-3 rounded-md bg-lamaSkyLight'
							href='/'
						>
							Student&apos;s Classes
						</Link>
						<Link
							className='p-3 rounded-md bg-lamaPurpleLight'
							href='/'
						>
							Student&apos;s Teachers
						</Link>
						<Link
							className='p-3 rounded-md bg-lamaYellowLight'
							href='/'
						>
							Student&apos;s Lessons
						</Link>
						<Link
							className='p-3 rounded-md bg-pink-50'
							href='/'
						>
							Student&apos;s Exams
						</Link>
						<Link
							className='p-3 rounded-md bg-lamaSkyLight'
							href='/'
						>
							Student&apos;s Assignments
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StudentDetailPage;
