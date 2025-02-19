import { auth } from '@/app/api/auth/auth';
import {
	AddUserStudentTeacherButton,
	DeleteClassButton,
} from '@/components/button';
import { getClasses, getUserById } from '@/lib/data';
import { View } from 'lucide-react';
import Link from 'next/link';

export default async function ClassList() {
	const classes = await getClasses();

	const session = await auth();

	const userId = session?.user?.id ?? '';
	const user = await getUserById(userId);

	const userRole = user?.role ?? '';

	return (
		<div className='container mx-auto py-6'>
			<div className='flex justify-between items-center mb-4'>
        <h1 className='text-3xl font-semibold text-gray-800'>Class List</h1>
        <AddUserStudentTeacherButton href={'/classes/addClass'}>
				Add Class
			</AddUserStudentTeacherButton>
      </div>
			{classes.length === 0 ? (
				<div className='flex flex-col items-center justify-center min-h-screen py-10'>
					<h1 className='text-3xl font-semibold text-gray-700 mb-4'>
						No Students Found
					</h1>
					<AddUserStudentTeacherButton href={'/classes/addClass'}>
						Add Class
					</AddUserStudentTeacherButton>
				</div>
			) : (
				<div className='overflow-x-auto bg-white shadow-lg rounded-lg'>
					<table className='min-w-full table-auto text-left text-sm text-gray-500'>
						<thead className='bg-gray-100 text-gray-600'>
							<tr>
								<th className='py-3 px-6 font-semibold text-sm uppercase'>
									Grade
								</th>
								<th className='py-3 px-6 font-semibold text-sm uppercase hidden md:table-cell'>
									Class
								</th>
								<th className='py-3 px-6 font-semibold text-sm uppercase hidden md:table-cell'>
									Kapasitas
								</th>
								<th className='py-3 px-6 font-semibold text-sm uppercase hidden md:table-cell'>
									Guru Kelas
								</th>
								<th className='flex justify-center py-3 px-6 font-semibold text-sm uppercase'>
									Actions
								</th>
							</tr>
						</thead>
						<tbody>
							{classes?.map((student) => (
								<tr
									key={student.id}
									className='border-b hover:bg-gray-50 transition-colors'
								>
									<td className='py-4 px-6 flex-col'>
										<h3 className='font-semibold'>{student.grade}</h3>
									</td>
									<td className='py-4 px-6'>{student.className}</td>
									<td className='py-4 px-6 hidden md:table-cell'>
										{student.capacity}
									</td>
									<td className='py-4 px-6 hidden md:table-cell'>
										{student.teacher.name}
									</td>
									<td>
										<div className='flex items-center justify-center gap-2'>
											<Link href={`/students/${student.id}`}>
												<button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'>
													<View />
												</button>
											</Link>
											{userRole === 'Admin' && (
												<DeleteClassButton student={student} />
											)}
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
			
		</div>
	);
}
