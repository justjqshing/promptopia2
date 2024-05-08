'use client'

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
const PromptCard = ({ post }) => {
  const [image, setImage] = useState()

  useEffect(() => {
    if(post && typeof post.creator.image  === 'undefined') {
      const fecchImage = async () => {
        const response = await fetch(`https://ui-avatars.com/api/?name=${post.creator.username}`)
        
        console.log('success')
        
        setImage(response.url)
      }
      fecchImage()
    } else {
      setImage(post.creator.image)
    }
    // else {
    //   const fecchImage = async () => {
    //     const response = await fetch(`https://ui-avatars.com/api/?name=John+Doe`)

        
    //     setImage(response.url)
    //   }
    //   fecchImage()
    // }
  }, [post])

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div>
          <Image src={image} width={30} height={30}></Image>
        </div>
      </div>
    </div>
  )
}

export default PromptCard