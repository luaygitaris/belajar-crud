import { prisma } from './prisma';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';



export const getUsers = async () => {
    const session = await auth();

    if (!session || !session.user) redirect('/dashboard');

    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.log(error);
    }
};

export const getUserById = async (userId: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });
        return user;
    } catch (error) {
        console.log(error);
    }
};