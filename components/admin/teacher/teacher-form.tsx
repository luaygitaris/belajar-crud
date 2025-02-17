'use client';

import { addTeacher } from '@/lib/actions';
import { useActionState } from 'react';
import { AddStudentButton } from '@/components/button';

const AddTeacherPage = () => {
	const [state, formAction] = useActionState(addTeacher, null);

	return (
		<div className='space-y-6 bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto'>
			<h1 className='text-2xl mb-4'>Add Teacher</h1>
			<form
				action={formAction}
				className='space-y-4'
			>
				{state?.message ? (
					<div
						className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100'
						role='alert'
					>
						<span className='font-medium'>{state?.message}</span>
					</div>
				) : null}

				<div>
					<label
						htmlFor='name'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Name
					</label>
					<input
						type='text'
						name='name'
						className='border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5'
					/>
					<div
						aria-live='polite'
						aria-atomic='true'
					>
						<span className='text-sm text-red-500 mt-2'>{state?.message}</span>
					</div>
				</div>
				<div>
					<label
						htmlFor='email'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Email
					</label>
					<input
						type='email'
						name='email'
						className='border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5'
					/>
					<div
						aria-live='polite'
						aria-atomic='true'
					>
						<span className='text-sm text-red-500 mt-2'>
							{state?.error?.email}
						</span>
					</div>
				</div>
				<div>
					<label
						htmlFor='image'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Image URL
					</label>
					<input
						type='url'
						name='image'
						placeholder='https://image.com'
						className='border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
					/>
					<div
						aria-live='polite'
						aria-atomic='true'
					>
						<span className='text-sm text-red-500 mt-2'>
							{state?.error?.image}
						</span>
					</div>
				</div>
				<div>
					<label
						htmlFor='address'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Address
					</label>
					<input
						type='text'
						name='address'
						className='border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5'
					/>
					<div
						aria-live='polite'
						aria-atomic='true'
					>
						<span className='text-sm text-red-500 mt-2'>
							{state?.error?.address}
						</span>
					</div>
				</div>
				<div>
					<label
						htmlFor='teacherId'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Teacher Id
					</label>
					<input
						type='text'
						name='teacherId'
						className='border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5'
					/>
					<div
						aria-live='polite'
						aria-atomic='true'
					>
						<span className='text-sm text-red-500 mt-2'>
							{state?.error?.teacherId}
						</span>
					</div>
				</div>
				<div>
					<label
						htmlFor='class'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Class
					</label>
					<input
						type='text'
						name='class'
						className='border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5'
					/>
					<div
						aria-live='polite'
						aria-atomic='true'
					>
						<span className='text-sm text-red-500 mt-2'>{state?.message}</span>
					</div>
				</div>
				<div>
					<label
						htmlFor='subject'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Subject
					</label>
					<input
						type='text'
						name='subject'
						className='border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5'
					/>
					<div
						aria-live='polite'
						aria-atomic='true'
					>
						<span className='text-sm text-red-500 mt-2'>
							{state?.error?.subject}
						</span>
					</div>
				</div>
				<div>
					<label
						htmlFor='phone'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Phone
					</label>
					<input
						type='text'
						name='phone'
						className='border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5'
					/>
					<div
						aria-live='polite'
						aria-atomic='true'
					>
						<span className='text-sm text-red-500 mt-2'>
							{state?.error?.phone}
						</span>
					</div>
				</div>
				<div>
					<label
						htmlFor='schoolName'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						School Name
					</label>
					<input
						type='text'
						name='schoolName'
						className='border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5'
					/>
					<div
						aria-live='polite'
						aria-atomic='true'
					>
						<span className='text-sm text-red-500 mt-2'>
							{state?.error?.schoolName}
						</span>
					</div>
				</div>
				<div>
					<label
						htmlFor='birthday'
						className='block mb-2 text-sm font-medium text-gray-900'
					>
						Birthday
					</label>
					<input
						type='date'
						name='birthday'
						className='border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5'
					/>
					<div
						aria-live='polite'
						aria-atomic='true'
					>
						<span className='text-sm text-red-500 mt-2'>
							{state?.error?.birthday}
						</span>
					</div>
				</div>
				<AddStudentButton />
			</form>
		</div>
	);
};

export default AddTeacherPage;
