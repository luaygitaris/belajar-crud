"use client";
import { DeleteUserButton } from "@/components/button";
import { editUser } from "@/lib/actions";
import { User } from "@prisma/client";
import Image from "next/image";
import { useActionState } from "react";

const FormActionEditUser = ({ user }: { user: User }) => {
    const UpdateUser = editUser.bind(null, user.id);

    const [state, formAction] = useActionState(UpdateUser, null);


    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Edit User Information</h2>

            <form action={formAction} className="flex flex-col gap-4">
                <div className="flex items-center justify-center">
                    <Image src={user.image || ""} width={100} height={100} alt="logo"></Image>
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        defaultValue={user.name || ''} 
                        className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full" 
                    />
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        defaultValue={user.email || ''} 
                        className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full" 
                    />
                </div>
                
                <div>
                    <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700">School Name</label>
                    <input 
                        type="text" 
                        name="schoolName" 
                        defaultValue={user.schoolName || ''} 
                        className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full" 
                    />
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Profile Image URL</label>
                    <input 
                        type="text" 
                        name="image" 
                        defaultValue={user.image || ''} 
                        className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full" 
                    />
                </div>

                <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                    <select 
                        name="role" 
                        defaultValue={user.role || 'User'} 
                        className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                    >
                        <option value="Admin">Admin</option>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Parent">Parent</option>
                        <option value="User">User</option>
                    </select>
                </div>

                <button 
                    type="submit" 
                    className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Save Changes
                </button>
                {state?.error?.email && <p className="text-red-500 text-sm mt-2">{state.error.email}</p>}
            </form>
            <DeleteUserButton user={user}/>
        </div>
    );
};

export default FormActionEditUser;
