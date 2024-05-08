'use client'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
const Nav = () => {
    const { data: session } = useSession()
    const [providers, setProviders] = useState(null)
    const [ToggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
      const setUpProviders = async () => {
        const response = await getProviders()

        setProviders(response)
      }

      setUpProviders()
    },[])
  return (
    <nav className=" flex-between w-full mb-16 pt-3">
        <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
      

      <p className="logo_text">
        Promtopia
      </p>
      </Link>


      {/* Desktop Nav */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="gap-3 md:gap-5 flex">
            <Link href="/create-prompt" className="black_btn">
                Create Prompt
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Image
              src={session?.user.image}
              alt='avatar'
              width={37}
              height={37}
              className='object-contain rounded-full'>
            </Image>
          </div>
        ) : (
          <>
              <button type="button" className="outline_btn" onClick={() => signIn()}> Sign in</button>
          </>
            
        )}
      </div>

      <div className="sm:hidden flex relative">
      {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              alt='avatar'
              width={37}
              height={37}
              className='object-contain rounded-full cursor-pointer'
              onClick={() => setToggleDropdown(prev => !prev)}>
            </Image>

            {ToggleDropdown && (
              <div className="dropdown">
                <Link href="/profile" className="dropdown_link" onClick={() => (setToggleDropdown(false))}>
                  My Profile
                </Link>
                <Link href="/create-prompt" className="dropdown_link" onClick={() => (setToggleDropdown(false))}>
                  Create Prompt
                </Link>
                <button type="button" onClick={signOut} className="black_btn w-full mt-3">Sign Out</button>
              </div>
            )}
          </div>
        ) : (
          <>
              <button type="button" className="outline_btn" onClick={() => signIn()}> Sign in</button>
          </>
        )}

      </div>



    </nav>
  )
}

export default Nav