import CountChart from '@/components/admin/CountChart';
import UserCard from '@/components/admin/dashboard/UserCard';
import EventCalender from '@/components/admin/EventCalender';
import AttendaceChart from '@/components/AttendanceChart';

const page = () => {
	return (
		<div className='w-full flex gap-2'>
			<div className='w-2/3 flex flex-col gap-5'>
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
				<div className='flex flex-col lg:flex-row gap-4'>
					{/* COUNT CHART */}
					<div className='w-full lg:w-1/3 h-[450px]'>
						<CountChart />
					</div>
					{/* ATTENDANCE CHART */}
					<div className='w-full lg:w-2/3 h-[450px]'>
						<AttendaceChart />
					</div>
				</div>
			</div>
			<div className='w-full lg:w-1/3 flex flex-col gap-8'>
				<EventCalender />
			</div>
		</div>
	);
};
export default page;
