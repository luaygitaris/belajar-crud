'use client';

import { signupCredentials } from '@/lib/actions';
import Link from 'next/link';
import { useActionState } from 'react';
import { RegisterButton } from './button';

const FormRegister = () => {
	const [state, formAction] = useActionState(signupCredentials, null);

	return (
		<form
			action={formAction}
			className='space-y-6 '
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
					placeholder='John Doe'
					className='border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5'
				/>
				<div
					aria-live='polite'
					aria-atomic='true'
				>
					<span className='text-sm text-red-500 mt-2'>
						{state?.error?.name}
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
					placeholder='John Doe'
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
					htmlFor='image'
					className='block mb-2 text-sm font-medium text-gray-900'
				>
					Name
				</label>
				<input
					type='url'
					name='image'
					placeholder='https://image.com'
					className='border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5'
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
					htmlFor='email'
					className='block mb-2 text-sm font-medium text-gray-900'
				>
					Email
				</label>
				<input
					type='email'
					name='email'
					placeholder='john.doe@gmail.com'
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
				<label htmlFor='role' className='block mb-2 text-sm font-medium text-gray-900'>Role</label>
				<select name='role' className='border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5'>
					<option value='Admin'>Admin</option>
					<option value='Student'>Student</option>
					<option value='Teacher'>Teacher</option>
					<option value='Parent'>Parent</option>
					<option value='User'>User</option>
				</select>
				<div
					aria-live='polite'
					aria-atomic='true'
				>
					<span className='text-sm text-red-500 mt-2'>
						{state?.error?.role}
					</span>
				</div>
			</div>
			<div>
				<label
					htmlFor='password'
					className='block mb-2 text-sm font-medium text-gray-900'
				>
					Password
				</label>
				<input
					type='password'
					name='password'
					placeholder='*******'
					className='border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5'
				/>
				<div
					aria-live='polite'
					aria-atomic='true'
				>
					<span className='text-sm text-red-500 mt-2'>
						{state?.error?.password}
					</span>
				</div>
			</div>
			<div>
				<label
					htmlFor='ConfirmPassword'
					className='block mb-2 text-sm font-medium text-gray-900'
				>
					Confirm Password
				</label>
				<input
					type='password'
					name='ConfirmPassword'
					placeholder='*******'
					className='border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5'
				/>
				<div
					aria-live='polite'
					aria-atomic='true'
				>
					<span className='text-sm text-red-500 mt-2'>
						{state?.error?.ConfirmPassword}
					</span>
				</div>
			</div>
			<RegisterButton />
			<p className='text-sm font-light text-gray-500'>
				Already have an Account?
				<Link href='/'>
					<span className='font-medium pl-1 text-blue-500 hover:text-blue-700'>
						Sign In
					</span>
				</Link>
			</p>
		</form>
	);
};

export default FormRegister;
