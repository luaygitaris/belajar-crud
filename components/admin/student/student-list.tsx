import { auth } from '@/app/api/auth/auth';
import { AddUserStudentTeacherButton, DeleteStudentButton } from '@/components/button';
import { getStudentbyUser, getUserById } from '@/lib/data';
import { View } from 'lucide-react';
import Link from 'next/link';

const StudentList = async () => {
  const students = await getStudentbyUser();
  const session = await auth();

  const userId = session?.user?.id ?? '';
  const user = await getUserById(userId);

  const userRole = user?.role ?? '';


  const sortedStudents = students?.sort((a, b) => {
	const nameA = a.name ?? '';
    const nameB = b.name ?? '';
    const nimA = a.nim ?? '';
    const nimB = b.nim ?? '';

    const nameComparison = nameA.localeCompare(nameB);
    if (nameComparison !== 0) return nameComparison;

    return nimA.localeCompare(nimB, undefined, { numeric: true });
  });

  if (!students?.length) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen py-10'>
        <h1 className='text-3xl font-semibold text-gray-700 mb-4'>
          No Students Found
        </h1>
        <AddUserStudentTeacherButton href={'/students/addStudent'}>Add Student</AddUserStudentTeacherButton>
      </div>
    );
  }

  return (
    <div className='container mx-auto py-6'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-3xl font-semibold text-gray-800'>Student List</h1>
        <AddUserStudentTeacherButton href={'/students/addStudent'}>Add Student</AddUserStudentTeacherButton>
      </div>

      <div className='overflow-x-auto bg-white shadow-lg rounded-lg'>
        <table className='min-w-full table-auto text-left text-sm text-gray-500'>
          <thead className='bg-gray-100 text-gray-600'>
            <tr>
              <th className='py-3 px-6 font-semibold text-sm uppercase'>
                Nama Siswa
              </th>
              <th className='py-3 px-6 font-semibold text-sm uppercase'>NIM</th>
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
            {sortedStudents?.map((student) => (
              <tr
                key={student.id}
                className='border-b hover:bg-gray-50 transition-colors'
              >
                <td className='py-4 px-6 flex-col'>
                  <h3 className='font-semibold'>{student.name}</h3>
                  <p className='text-gray-500 text-xs'>{student.class}</p>
                </td>
                <td className='py-4 px-6'>{student.nim}</td>
                <td className='py-4 px-6 hidden md:table-cell'>{student.address}</td>
                <td className='py-4 px-6 hidden md:table-cell'>
                  {new Date(student.birthday).toLocaleDateString()}
                </td>
                <td>
                  <div className='flex items-center justify-center gap-2'>
                    <Link href={`/students/${student.id}`}>
                      <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'>
                        <View />
                      </button>
                    </Link>
                    {userRole === 'Admin' && (
                      <DeleteStudentButton student={student} />
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

export default StudentList;
