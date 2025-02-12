import { auth } from '@/auth';
import { LogoutButton } from '@/components/button';
import { getUserById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const Profile = async () => {
  const profile = await auth();
  const userId = profile?.user?.id ?? '';
  const profileId = await getUserById(userId);

  return (
    <div className="max-w-4xl mx-auto py-8">
      {profileId && (
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
          <div className="flex-shrink-0">
            <Image
              src={profileId.image || '/hero1.png'}
              width={100}
              height={100}
              alt="User Image"
              className="rounded-full border-2 border-gray-200"
            />
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-gray-800">
              {profileId.name}
            </p>
            <p className="text-gray-600">{profileId.email}</p>
            <p className="text-gray-600">{profileId.schoolName}</p>
            <p className="text-sm text-gray-500">{profileId.role}</p>
          </div>
        </div>
      )}

      <div className="flex justify-center space-x-4 mt-6">
        <Link
          href="/profile/editProfile"
          className="px-10 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Edit
        </Link>
        <LogoutButton/>
      </div>
    </div>
  );
};

export default Profile;
