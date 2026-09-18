import React from 'react'
import Link from 'next/link'
import { getcurrentuser } from '@/lib/auth'

const Navbar = async () => {
  const user = await getcurrentuser()
  return (
    <nav className='flex justify-between p-5 bg-[#0B1F3A] text-white h-15 items-center' >
      <div className='flex items-center gap-5'><div><img  className='border border-[#0B1F3A] mix-blend-lighten fill={true}' width={50} height={25} src="/img1.png" alt="" /></div>
        <div>Prithvi_Setu</div></div>

      <ul className='flex justify-between gap-12'>
        {!user && (
          <>
            <Link href={"/register"}><button className='bg-[#0B5ED7] hover:cursor-pointer rounded-md p-2'>Register</button></Link>
            <Link href={"/Login"}><button className='bg-[#0B5ED7] hover:cursor-pointer rounded-md p-2'>Login</button></Link>
            <Link href={"/Login/adminlogin"}><button className='bg-[#0B5ED7] hover:cursor-pointer rounded-md p-2'>Admin</button></Link>

          </>
        )}

        {user && (
          <>
            <Link href={`/${user.role}`}><button className='bg-[#0B5ED7] hover:cursor-pointer rounded-md p-2'>Dashboard</button></Link>
            <Link href={"/Login"}><button className='bg-[#0B5ED7] hover:cursor-pointer rounded-md p-2'>Logout</button></Link>

          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
