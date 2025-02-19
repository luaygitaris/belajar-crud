'use client';

import { deleteClass, deleteStudent, deleteUser } from '@/lib/actions';
import { Class, Student, Teacher, User } from '@prisma/client';
import { Delete, Edit, PencilIcon } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

export const LoginButton = () => {
	const { pending } = useFormStatus();
	return (
		<button
			type='submit'
			disabled={pending}
			className='w-full bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800'
		>
			{pending ? 'Authenticating....' : 'Sign In'}
		</button>
	);
};

export const RegisterButton = () => {
	const { pending } = useFormStatus();
	return (
		<button
			type='submit'
			disabled={pending}
			className='w-full bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800'
		>
			{pending ? 'resitering....' : 'Register'}
		</button>
	);
};

export const EditButton = () => {
	return (
		<Link
			href={'/profile'}
			className='border rounded-sm p-1 hover:bg-gray-200'
		>
			<PencilIcon />
		</Link>
	);
};

export const DeleteUserButton = ({ user }: { user: User }) => {
	const DeleteUser = deleteUser.bind(null, user.id);
	const [state2, formAction2] = useActionState(DeleteUser, null);
	return (
		<form
			action={formAction2}
			className='mt-6 text-center'
		>
			<button
				type='submit'
				onClick={() => signOut({ callbackUrl: '/' })}
				className='py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500'
			>
				Delete Account
			</button>
			{state2 && (
				<p className='text-red-500 text-sm mt-4 text-center'>{state2}</p>
			)}
		</form>
	);
};

export const LogoutButton = () => {
	return (
		<button
			onClick={() => signOut({ callbackUrl: '/' })}
			className='px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'
		>
			Log Out
		</button>
	);
};

export const AddUserStudentTeacherButton = ({
	href,
	children,
  }: {
	href: string;
	children: React.ReactNode;
  }) => {
	return (
	  <Link
		href={href}
		className="w-fit bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800"
	  >
		{children}
	  </Link>
	);
  };

export const AddStudentButton = () => {
	return (
		<button
			type='submit'
			className='w-full bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800'
		>
			Add Student
		</button>
	);
};

export const DeleteStudentButton = ({student}: {student: Student}) => {
	const DeleteStudent = deleteStudent.bind(null, student.id);
	const [state, formAction] = useActionState(DeleteStudent, null);

	return (
		<form
			action={formAction}
		>	
			<button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple'>
												<Delete />
											</button>
			{state && (
				<p className='text-red-500 text-sm mt-4 text-center'>{state}</p>
			)}
		</form>
	);
};

export const EditStudentButton = () => {
	return (
		<Link href={'/students/editStudent'}>
			<Edit/>
		</Link>
	)
}
export const DeleteTeacherButton = ({teacher}: {teacher: Teacher}) => {
	const DeleteStudent = deleteStudent.bind(null, teacher.id);
	const [state, formAction] = useActionState(DeleteStudent, null);

	return (
		<form
			action={formAction}
		>	
			<button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple'>
												<Delete />
											</button>
			{state && (
				<p className='text-red-500 text-sm mt-4 text-center'>{state}</p>
			)}
		</form>
	);
};

export const DeleteClassButton = ({student}: {student: Class}) => {
	const DeleteStudent = deleteClass.bind(null, student.id);
	const [state, formAction] = useActionState(DeleteStudent, null);

	return (
		<form
			action={formAction}
		>	
			<button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple'>
												<Delete />
											</button>
			{state && (
				<p className='text-red-500 text-sm mt-4 text-center'>{state}</p>
			)}
		</form>
	);
};