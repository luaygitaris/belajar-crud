'use server';

import {
	EditUserSchema,
	RegisterSchema,
	SignInSchema,
	StudentSchema,
} from './zod';
import { hashSync } from 'bcrypt-ts';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { Role } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const signupCredentials = async (
	prevState: unknown,
	formData: FormData
) => {
	const validatedFields = RegisterSchema.safeParse(
		Object.fromEntries(formData.entries())
	);

	if (!validatedFields.success) {
		return {
			error: validatedFields.error.flatten().fieldErrors,
		};
	}

	const { name, email, password, image, role, schoolName } =
		validatedFields.data;
	const hashedPassword = hashSync(password, 10);

	try {
		await prisma.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
				image,
				role: role as Role,
				schoolName,
			},
		});
	} catch (error) {
		console.error('Failed to Register User!', error);
		return { message: 'Failed to Register User!' };
	}
	redirect('/dashboard');
};

export const signInCredentials = async (
	prevState: unknown,
	formData: FormData
) => {
	const validatedFields = SignInSchema.safeParse(
		Object.fromEntries(formData.entries())
	);

	if (!validatedFields.success) {
		return {
			error: validatedFields.error.flatten().fieldErrors,
		};
	}

	const { email, password } = validatedFields.data;

	try {
		await signIn('credentials', { email, password, redirectTo: '/dashboard' });
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return { message: 'Invalid Credentials.' };

				default:
					return { message: 'Something went wrong.' };
			}
		}
		throw error;
	}
};

export const editUser = async (
	id: string,
	prevState: unknown,
	formData: FormData
) => {
	const validatedFields = EditUserSchema.safeParse(
		Object.fromEntries(formData.entries())
	);

	if (!validatedFields.success) {
		return {
			error: validatedFields.error.flatten().fieldErrors,
		};
	}

	const { name, email, schoolName, image, role } = validatedFields.data;

	try {
		await prisma.user.update({
			where: { id },
			data: {
				name,
				email,
				schoolName,
				image,
				role: role as Role,
			},
		});
		revalidatePath('/profile');
	} catch (error) {
		console.error('Failed to update user!', error);
		throw new Error('Failed to update user!');
	}
	revalidatePath('/profile');
	redirect('/profile');
};

export const deleteUser = async (id: string) => {
	try {
		await prisma.user.delete({
			where: { id },
		});
		revalidatePath('/profile');
	} catch (error) {
		console.error('Failed to delete user!', error);
		throw new Error('Failed to delete user!');
	}
	redirect('/');
};

export const signupCredentialsStudents = async (
	prevState: unknown,
	formData: FormData
) => {
	const validatedFields = RegisterSchema.safeParse(
		Object.fromEntries(formData.entries())
	);

	if (!validatedFields.success) {
		return {
			error: validatedFields.error.flatten().fieldErrors,
		};
	}

	const { name, email, password, image, role, schoolName } =
		validatedFields.data;
	const hashedPassword = hashSync(password, 10);

	try {
		await prisma.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
				image,
				role: role as Role,
				schoolName,
			},
		});
	} catch (error) {
		console.error('Failed to Register User!', error);
		return { message: 'Failed to Register User!' };
	}
	redirect('/students/addStudent');
};

export const addStudent = async (prevState: unknown, formData: FormData) => {
	const data = Object.fromEntries(formData.entries());

	const validatedFields = StudentSchema.safeParse(data);

	if (!validatedFields.success) {
		return {
			error: validatedFields.error.flatten().fieldErrors,
		};
	}

	const {
		name,
		email,
		image,
		address,
		nim,
		grade,
		class: studentClass,
		parent,
		phone,
		schoolName,
		birthday,
	} = validatedFields.data;

	const gradeNumber = parseInt(grade, 10);
	const birthdayDate = new Date(birthday);

	try {
		await prisma.student.create({
			data: {
				name,
				email,
				image,
				address,
				nim,
				grade: gradeNumber,
				class: studentClass,
				parent,
				phone,
				schoolName,
				birthday: birthdayDate,
			},
		});

		revalidatePath('/students');
	} catch (error) {
		console.error('Failed to create student:', error);
		return { message: 'Failed to create student' };
	}
	redirect('/students');
};

export const updateStudent = async (
	id: string,
	prevState: unknown,
	formData: FormData
) => {
	const validatedFields = StudentSchema.safeParse(
		Object.fromEntries(formData.entries())
	);

	if (!validatedFields.success) {
		return {
			error: validatedFields.error.flatten().fieldErrors,
		};
	}

	const {
		name,
		email,
		address,
		nim,
		image,
		grade,
		class: studentClass,
		parent,
		phone,
		schoolName,
		birthday,
	} = validatedFields.data;

	const gradeNumber = parseInt(grade, 10);
	const birthdayDate = new Date(birthday);

	try {
		await prisma.student.update({
			where: { id },
			data: {
				name,
				email,
				address,
				nim,
				image,
				grade: gradeNumber,
				class: studentClass,
				parent,
				phone,
				schoolName,
				birthday: birthdayDate,
			},
		});

		revalidatePath('/students');
	} catch (error) {
		console.error('Failed to create student:', error);
		return { message: 'Failed to create student' };
	}
	revalidatePath('/students');
	redirect('/students');
};

export const deleteStudent = async (id: string) => {
	try {
		await prisma.student.delete({
			where: { id },
		});
		await prisma.user.delete({
			where:{id}
		})
		revalidatePath('/students')
	} catch (error) {
		console.error('Failed to delete student!', error)
		throw new Error('Failed to delete student!')
	}
	redirect('/students')
};



