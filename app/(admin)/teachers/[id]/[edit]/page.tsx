import { getTeacherbyId } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import photo from '@/public/hero/hero1.png';
import FormActionEditUser from '@/components/admin/teacher/form-action-edit-student';

const Page = async ({
	params,
  }: {
	params: Promise<{ edit: string }>
  }) => {
	const teacher = await getTeacherbyId((await params).edit);
	const image = teacher?.image || photo;

	if (!teacher) {
		notFound();
	}
	return (
		<div >
			<div className='flex justify-center'>
				<Image
					src={image}
					alt=''
					width={144}
					height={144}
					className='w-36 h-36 rounded-full object-cover'
				/>
			</div>
			<FormActionEditUser user={teacher} />
		</div>
	);
};

export default Page;
