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

export const getStudentbyUser = async () => {
  const session = await auth();

  if (!session || !session.user) {
    redirect('/dashboard');
  }

  const userId = session.user.id ?? '';
  const user = await getUserById(userId);

  const role = user?.role;
  const schoolName = user?.schoolName;

  if (role === 'Admin') {
    try {
      const students = await prisma.student.findMany({
        where: { schoolName },
        include: { user: { select: { name: true } } },
      });
      return students;
    } catch (error) {
      console.error('Error fetching students for Admin:', error);
      return [];
    }
  } else {
    try {
      const students = await prisma.student.findMany({
        where: { user: { id: userId } },
        include: { user: { select: { name: true } } },
      });
      return students;
    } catch (error) {
      console.error('Error fetching students for non-admin user:', error);
      return [];
    }
  }
};
