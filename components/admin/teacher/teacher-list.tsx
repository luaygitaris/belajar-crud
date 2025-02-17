import { auth } from '@/auth';
import { AddUserStudentTeacherButton, DeleteTeacherButton } from '@/components/button';
import { getTeacherbyUser, getUserById } from '@/lib/data';
import { View } from 'lucide-react';
import Link from 'next/link';

const TeacherList = async () => {
  const teachers = await getTeacherbyUser();
  const session = await auth();

  const userId = session?.user?.id ?? '';
  const user = await getUserById(userId);

  const userRole = user?.role ?? '';


  const sortedTeachers = teachers?.sort((a, b) => {
	const nameA = a.name ?? '';
    const nameB = b.name ?? '';

    const nameComparison = nameA.localeCompare(nameB);
    return nameComparison
  });

  if (!teachers?.length) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen py-10'>
        <h1 className='text-3xl font-semibold text-gray-700 mb-4'>
          No Teachers Found
        </h1>
        <AddUserStudentTeacherButton href='/teachers/addUserTeacher'>Add Teacher</AddUserStudentTeacherButton>
      </div>
    );
  }

  return (
    <div className='container mx-auto py-6'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-3xl font-semibold text-gray-800'>Teachers List</h1>
        <AddUserStudentTeacherButton href='/teachers/addUserTeacher'>Add Teacher</AddUserStudentTeacherButton>
      </div>

      <div className='overflow-x-auto bg-white shadow-lg rounded-lg'>
        <table className='min-w-full table-auto text-left text-sm text-gray-500'>
          <thead className='bg-gray-100 text-gray-600'>
            <tr>
              <th className='py-3 px-6 font-semibold text-sm uppercase'>
                Nama Guru
              </th>
              <th className='py-3 px-6 font-semibold text-sm uppercase'>Teacher Id</th>
              <th className='py-3 px-6 font-semibold text-sm uppercase hidden md:table-cell'>
                Alamat
              </th>
              <th className='py-3 px-6 font-semibold text-sm uppercase hidden md:table-cell'>
                Tanggal Lahir
              </th>
              <th className='flex justify-center py-3 px-6 font-semibold text-sm uppercase'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedTeachers.map((teacher) => (
              <tr
                key={teacher.id}
                className='border-b hover:bg-gray-50 transition-colors'
              >
                <td className='py-4 px-6 flex-col'>
                  <h3 className='font-semibold'>{teacher.name}</h3>
                  <p className='text-gray-500 text-xs'>{teacher.class}</p>
                </td>
                <td className='py-4 px-6'>{teacher.teacherId}</td>
                <td className='py-4 px-6 hidden md:table-cell'>{teacher.address}</td>
                <td className='py-4 px-6 hidden md:table-cell'>
                  {new Date(teacher.birthday).toLocaleDateString()}
                </td>
                <td>
                  <div className='flex items-center justify-center gap-2'>
                    <Link href={`/teachers/${teacher.id}`}>
                      <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'>
                        <View />
                      </button>
                    </Link>
                    {userRole === 'Admin' && (
                      <DeleteTeacherButton teacher={teacher} />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherList;
