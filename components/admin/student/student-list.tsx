import { AddUserStudentButton } from '@/components/button';
import { getStudentbyUser } from '@/lib/data';

const StudentList = async () => {
  const students = await getStudentbyUser();

  if (!students?.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-10">
        <h1 className="text-3xl font-semibold text-gray-700 mb-4">No Students Found</h1>
        <AddUserStudentButton />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold text-gray-800">Student List</h1>
        <AddUserStudentButton />
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto text-left text-sm text-gray-500">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="py-3 px-6 font-semibold text-sm uppercase">Nama Siswa</th>
              <th className="py-3 px-6 font-semibold text-sm uppercase">NIM</th>
              <th className="py-3 px-6 font-semibold text-sm uppercase">Alamat</th>
              <th className="py-3 px-6 font-semibold text-sm uppercase">Tanggal Lahir</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">{student.name}</td>
                <td className="py-4 px-6">{student.nim}</td>
                <td className="py-4 px-6">{student.address}</td>
                <td className="py-4 px-6">{new Date(student.birthday).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
