import { getUserById } from '@/lib/data';

import FormActionEditUser from './form-action-edit-user';
import { auth } from '@/auth';

const EditProfileUser = async () => {
	const session = await auth();

	const userId = session?.user?.id ?? '';
	const editUser = await getUserById(userId);

	return (
		<div>
			{editUser && (
				<div>
					<FormActionEditUser user={editUser} />
				</div>
			)}
		</div>
	);
};

export default EditProfileUser;
