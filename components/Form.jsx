
import Link from "next/link"

const Form = ( {type, post, setPost, submitting, handleSubmit} ) => {
  return (
    <section className="w-full max-w-full flex items-start justify-start flex-col">
      <h1 className="blue_gradient head_text text-left">{type} post</h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world and let your imagination run wild with any AI platform.
      </p>

      <form className="mt-10 w-full max-w-2xl flex flex-col glassmorphism gap-7" onClick={handleSubmit}>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-500">
            Your AI Prompt
          </span>

          <textarea value={post.prompt} onChange={(e) => {setPost({ ...post, prompt: e.target.value})}} placeholder="Write your prompt here..." required className="form_textarea">

          </textarea>
          
         
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-500">
            Your AI Prompt Tag
          </span>

          <textarea value={post.tag} onChange={(e) => {setPost({ ...post, tag: e.target.value})}} placeholder="Write Your Tag Here..." required className="form_input">

          </textarea>
          
         
        </label>
        <div className="flex justify-end items-center mx-3 mb-5 gap-4">
          <Link href='/' className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button type="submit" disabled={submitting} className="bg-primary-orange px-5 py-1.5 text-sm rounded-full text-white">
            {submitting ? 'Creating' : 'Submit'}

          </button>
        </div>

      </form>
      
    </section>
    
  )
}

export default Form