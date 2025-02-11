import { object, string } from 'zod';

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
	schoolName: string().min(4, 'Name must be more than 4 character')

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