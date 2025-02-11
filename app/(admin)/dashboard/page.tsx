import UserCard from '@/components/admin/dashboard/UserCard';

const page = () => {
	return (
		<div className='w-full'>
			<div className='w-2/3'>
				<div className='flex gap-2'>
					<UserCard
						type='Teachers'
						className='w-[300px]'
					/>
					<UserCard
						type='Students'
						className='w-[300px]'
					/>
				</div>
			</div>
		</div>
	);
};
export default page;
