'use client'


import { useState, useEffect } from "react"

import PromptCard from "./PromptCard"

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='space-y-6 py-8 sm:columns-3 sm:gap-6 xl:columns-3'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setSearchText] = useState("")
  const [posts, setPosts] = useState([])
  const handleSearchChange = (e) => {
    
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/prompt")
      const data = await response.json()

      setPosts(data)
    }
    fetchData()
  }, [])
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input placeholder="Search for Tags, Prompts or Usernames" type="text" value={searchText} onChange={handleSearchChange} required className="search_input peer"/>

      </form>

      <PromptCardList data={posts}
      handleTagClick={() => {}}/>

    </section>
  )
}

export default Feed