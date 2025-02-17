// import FormActionEditUser from '@/components/admin/student/form-action-edit-student';
// import { getStudentbyId } from '@/lib/data';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import photo from '@/public/hero/hero1.png';

// const Page = async ({ params }: { params: { id: string } }) => {
// 	const { id } = await params;
// 	const student = await getStudentbyId(id);
// 	const image = student?.image || photo;

// 	if (!student) {
// 		notFound();
// 	}
// 	return (
// 		<div >
// 			<div className='flex justify-center'>
// 				<Image
// 					src={image}
// 					alt=''
// 					width={144}
// 					height={144}
// 					className='w-36 h-36 rounded-full object-cover'
// 				/>
// 			</div>
// 			<FormActionEditUser user={student} />
// 		</div>
// 	);
// };

// export default Page;

import FormActionEditUser from '@/components/admin/student/form-action-edit-student';
import { getStudentbyId } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import photo from '@/public/hero/hero1.png';



const Page = async ({
	params,
  }: {
	params: Promise<{ edit: string }>
  }) => {
  const student = await getStudentbyId((await params).edit);

  if (!student) {
    notFound(); 
  }

  const image = student?.image || photo;

  return (
    <div>
      <div className="flex justify-center">
        <Image
          src={image}
          alt="Student Image"
          width={144}
          height={144}
          className="w-36 h-36 rounded-full object-cover"
        />
      </div>
      <FormActionEditUser user={student} />
    </div>
  );
};

export default Page;


