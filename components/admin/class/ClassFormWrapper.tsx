import { getTeacherbyUser } from '@/lib/data';
import ClassForm from './form-add-class';

export default async function ClassFormWrapper() {
	const teachers = await getTeacherbyUser();

	return <ClassForm teachers={teachers} />;
}
