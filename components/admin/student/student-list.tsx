// components/admin/student/student-list.tsx
import { AddUserStudentButton } from '@/components/button';
import { getStudentbyUser } from '@/lib/data';

const StudentList = async () => {
  const students = await getStudentbyUser();

  if (!students?.length) {
    return (
      <div>
        <h1 className="text-2xl">No Student Found</h1>
        <AddUserStudentButton />
      </div>
    );
  }
  return (
    <div>
      <table className="w-full bg-white mt-3">
        <thead className="border-b border-gray-100">
          <tr>
            <th className="py-3 px-6 text-left text-sm">Nama Siswa</th>
            <th className="py-3 px-6 text-left text-sm">NIM</th>
            <th className="py-3 px-6 text-left text-sm">Alamat</th>
            <th className="py-3 px-6 text-left text-sm">Tanggal Lahir</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="py-3 px-6">{student.name}</td>
              <td className="py-3 px-6">{student.nim}</td>
              <td className="py-3 px-6">{student.address}</td>
              <td className="py-3 px-6">{new Date(student.birthday).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddUserStudentButton />
    </div>
  );
};

export default StudentList;