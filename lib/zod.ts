import { object, string, z } from 'zod';

export const SignInSchema = object({
	email: string().email('Invalid Email'),
	password: string()
		.min(6, 'Password must be more 6 Character')
		.max(32, 'Password must be less 6 Character'),
});

export const RegisterSchema = object({
	name: string().min(4, 'Name must be more than 4 character'),
	email: string().email('Invalid Email'),
	password: string()
		.min(6, 'Password must be more 6 Character')
		.max(32, 'Password must be less 6 Character'),
	ConfirmPassword: string()
		.min(6, 'Password must be more 6 Character')
		.max(32, 'Password must be less 6 Character'),
	image: string(),
	role: string(),
	schoolName: string().min(4, 'Name must be more than 4 character'),
}).refine((data) => data.password === data.ConfirmPassword, {
	message: 'Password does not match',
	path: ['ConfirmPassword'],
});

export const EditUserSchema = object({
	name: string().min(4, 'Name must be more than 4 character'),
	schoolName: string().min(4, 'School Name must be more than 4 character'),
	email: string().email('Invalid Email'),
	image: string().min(4, 'Image URL must be more than 4 character'),
	role: string().min(4, 'Role must be more than 4 character'),
});

export const StudentSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().min(1, 'Email is required'),
	image: z.string(),
	address: z.string().min(1, 'Address is required'),
	nim: z.string().min(1, 'NIM is required'),
	grade: z.string().refine((val) => !isNaN(Number(val)), {
		message: 'Invalid grade value',
	}),
	class: z.string().min(1, 'Class is required'),
	parent: z.string().min(1, 'Parent name is required'),
	phone: z.string().min(1, 'Phone number is required'),
	schoolName: z.string().min(1, 'School name is required'),
	birthday: z.string().refine((val) => !isNaN(Date.parse(val)), {
		message: 'Invalid birthday date',
	}),
});

