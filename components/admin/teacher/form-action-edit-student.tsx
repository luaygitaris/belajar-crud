'use client';
import { updateTeacher } from '@/lib/actions';
import { Teacher } from '@prisma/client';
import { useActionState } from 'react';

const FormActionEditUser = ({ user }: { user: Teacher }) => {
	const UpdateUser = updateTeacher.bind(null, user.id);

	const [state, formAction] = useActionState(UpdateUser, null);

	return (
		<div className='max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg'>
			<h2 className='text-2xl font-semibold text-center mb-6'>
				Edit Teacher Information
			</h2>

			<form
				action={formAction}
				className='flex flex-col gap-4'
			>
				<div>
					<label
						htmlFor='name'
						className='block text-sm font-medium text-gray-700'
					>
						Name
					</label>
					<input
						type='text'
						name='name'
						defaultValue={user.name || ''}
						className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full'
					/>
				</div>

				<div>
					<label
						htmlFor='email'
						className='block text-sm font-medium text-gray-700'
					>
						Email
					</label>
					<input
						type='email'
						name='email'
						defaultValue={user.email || ''}
						className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full'
					/>
				</div>

				<div>
					<label
						htmlFor='schoolName'
						className='block text-sm font-medium text-gray-700'
					>
						School Name
					</label>
					<input
						type='text'
						name='schoolName'
						defaultValue={user.schoolName || ''}
						className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full'
					/>
				</div>

				<div>
					<label
						htmlFor='address'
						className='block text-sm font-medium text-gray-700'
					>
						Address
					</label>
					<input
						type='text'
						name='address'
						defaultValue={user.address || ''}
						className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full'
					/>
				</div>
				<div>
					<label
						htmlFor='teacherId'
						className='block text-sm font-medium text-gray-700'
					>
						Teacher Id
					</label>
					<input
						type='text'
						name='teacherId'
						defaultValue={user.teacherId || ''}
						className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full'
					/>
				</div>
				<div>
					<label
						htmlFor='subject'
						className='block text-sm font-medium text-gray-700'
					>
						Subject
					</label>
					<input
						type='text'
						name='subject'
						defaultValue={user.subject || ''}
						className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full'
					/>
				</div>
				<div>
					<label
						htmlFor='class'
						className='block text-sm font-medium text-gray-700'
					>
						Class
					</label>
					<input
						type='text'
						name='class'
						defaultValue={user.class || ''}
						className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full'
					/>
				</div>
				<div>
					<label
						htmlFor='phone'
						className='block text-sm font-medium text-gray-700'
					>
						Phone
					</label>
					<input
						type='text'
						name='phone'
						defaultValue={user.phone || ''}
						className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full'
					/>
				</div>
				<div>
					<label
						htmlFor='birthday'
						className='block text-sm font-medium text-gray-700'
					>
						Birthday
					</label>
					<input
						type='date'
						name='birthday'
						className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full'
					/>
				</div>
				<div>
					<label
						htmlFor='image'
						className='block text-sm font-medium text-gray-700'
					>
						Image URL
					</label>
					<input
						type='text'
						name='image'
						defaultValue={user.image || ''}
						className='mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full'
					/>
				</div>

				<button
					type='submit'
					className='mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
				>
					Save Changes
				</button>
				{state?.error?.email && (
					<p className='text-red-500 text-sm mt-2'>{state.error.email}</p>
				)}
			</form>
		</div>
	);
};

export default FormActionEditUser;
