'use client'

import { PencilIcon } from "lucide-react"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { useFormStatus } from "react-dom"

export const LoginButton=() => {
    const {pending} = useFormStatus()
    return(
        <button
				type='submit'
                disabled={pending}
				className='w-full bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800'
			>
				{pending? 'Authenticating....' : 'Sign In'}
			</button>
    )
}

export const RegisterButton=() => {
    const {pending} = useFormStatus()
    return(
        <button
				type='submit'
                disabled={pending}
				className='w-full bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800'
			>
				{pending? 'resitering....' : 'Register'}
			</button>
    )
}

export const EditButton = () => {
    return (
      <Link
        href={"/profile"}
        className="border rounded-sm p-1 hover:bg-gray-200"
      >
        <PencilIcon/>
      </Link>
    );
  };

  export const LogoutButton = () => {
    return (
      <button
          onClick={() => signOut({ callbackUrl: '/' })} 
          className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Log Out
        </button>
    )
  }