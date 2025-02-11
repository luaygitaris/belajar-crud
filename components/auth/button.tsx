'use client'

import { PencilIcon } from "lucide-react"
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